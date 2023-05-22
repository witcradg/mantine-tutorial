import React from "react";
import { Grid } from "@mantine/core";

function Cards() {
    return (
        <div className="App">
            <Grid justify='space-around'>
                <Grid.Col style={{ maxWidth: 350}} sm={4} xs={4} >
                    1
                </Grid.Col>
                <Grid.Col md={6} lg={3}>
                    2
                </Grid.Col>
                <Grid.Col md={6} lg={3}>
                    3
                </Grid.Col>
                <Grid.Col md={6} lg={3}>
                    4
                </Grid.Col>
            </Grid>
        </div>
    );
}

export default Cards;
