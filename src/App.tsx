import React from "react";
import "./App.css";
import {
    ColorSchemeProvider,
    ColorScheme,
    MantineProvider,
    Paper,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import AppShellExample from "./components/AppShell";

function App() {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: "mantine-color-scheme",
        defaultValue: "light",
        getInitialValueInEffect: true,
    });

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    useHotkeys([["mod+J", () => toggleColorScheme()]]);

    return (
        <div className="App" style={{ margin: "4rem auto" }}>
            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider theme={{ colorScheme: colorScheme }}>
                    <Paper>
                        <AppShellExample />
                    </Paper>
                </MantineProvider>
            </ColorSchemeProvider>
        </div>
    );
}

export default App;
