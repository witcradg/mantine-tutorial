import { useState } from "react";
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
} from "@mantine/core";
import LightAndDarkModeButton from "./LightDarkButton";
import TableExample from "./TableExample";

export default function AppShellExample() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            styles={{
                main: {
                    background:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar
                    p="md"
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    width={{ sm: 200, lg: 300 }}
                >
                    <Navbar.Section>
                        <Text>hello this is title</Text>
                    </Navbar.Section>
                    <Navbar.Section grow mt="lg">
                        <Text>example1</Text>
                        <Text>example2</Text>
                        <Text>example3</Text>
                        <Text>example4</Text>
                    </Navbar.Section>
                    <Navbar.Section>
                        <Text>footer</Text>
                    </Navbar.Section>                    
                </Navbar>
            }
            aside={
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                    <Aside
                        p="md"
                        hiddenBreakpoint="sm"
                        width={{ sm: 200, lg: 300 }}
                    >
                        <Text>Application sidebar</Text>
                    </Aside>
                </MediaQuery>
            }
            footer={
                <Footer height={60} p="md">
                    Application footer
                </Footer>
            }
            header={
                <Header height={{ base: 50, md: 70 }} p="md">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <MediaQuery
                            largerThan="sm"
                            styles={{ display: "none" }}
                        >
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <Text>Application header</Text>
                        <LightAndDarkModeButton />
                    </div>
                </Header>
            }
        >
            <TableExample />
        </AppShell>
    );
}
