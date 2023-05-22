import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import { ColorSchemeProvider, MantineProvider, Paper } from "@mantine/core";
import LightAndDarkModeButton from "./components/LightDarkButton";

function App() {
    return (
        <div className="App">
            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider theme={{ colorScheme: colorScheme }}>
                    <Paper padding="md" radius={0} style={{minHeight: '100vh'}}>
                        <Cards />
                        <LightAndDarkModeButton />
                    </Paper>
                </MantineProvider>
            </ColorSchemeProvider>
        </div>
    );
}

export default App;
