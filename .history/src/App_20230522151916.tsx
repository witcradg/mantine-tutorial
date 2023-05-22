import React, {useRef} from "react";
import "./App.css";
import Cards from "./components/Cards";
import { ColorSchemeProvider, ColorScheme, MantineProvider, Paper } from "@mantine/core";
import LightAndDarkModeButton from "./components/LightDarkButton";
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  const ref = useRef<HTMLDivElement>(null);
console.log('ref', ref)
    return (
        <div className="App">
            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider theme={{ colorScheme: colorScheme }}>
                    <Paper ref={ref} radius={0} style={{minHeight: '100vh'}}>
                        <Cards />
                        <LightAndDarkModeButton />
                    </Paper>
                </MantineProvider>
            </ColorSchemeProvider>
        </div>
    );
}

export default App;
