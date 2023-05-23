import React, { useState } from "react";
import { Button } from "@mantine/core";
import { IconSun } from '@tabler/icons-react';

    //NOTE: With the gradient buttons you can't use light and dark mode. They 
    // will always be the same color.

type LoadingType = {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export default function Buttons() {
    const  [loading, setLoading]  = useState(false);

    const handleClick = () => {
        setLoading(true)
    };

    return (
        <>
            <Button
                leftIcon={<IconSun size="1.1rem" />}
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan" }}
            >
                Indigo cyan
            </Button>
            <Button
                loading={loading} onClick={handleClick}
                variant="gradient"
                gradient={{ from: "teal", to: "lime", deg: 180 }}
            >
                Lime green
            </Button>
            <Button
                component="a" href="https://mantine.dev" target="_blank"
                variant="gradient"
                gradient={{ from: "teal", to: "blue", deg: 90 }}
            >
                Teal blue
            </Button>
            <Button
            styles={(theme) => ({
                root: {
                    border: 0,
                    height: 150,
                    paddingRight: 69,
                    fontFamily: 'monospace',
                    '&:hover': {
                        paddingLeft: 100,
                        paddingRight: 100,
                    }
                }
            })}
             variant="gradient" gradient={{ from: "orange", to: "red" }}>
                Orange red
            </Button>
            <Button
                variant="gradient"
                gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
            >
                Peach
            </Button>
        </>
    );
}
