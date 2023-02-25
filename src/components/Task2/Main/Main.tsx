import React from "react";
import { Box } from "@mui/material";
import MainTabs from "./Tabs/MainTabs";
import Content from "./Content/Content";

const Main = () => {
    return (
        <Box
            sx={{
                width: "100%",
                marginTop: 2,
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Box
                    sx={{
                        width: 300,
                        bg: "#F6F8F9",
                        height: "100vh",
                        position: 'fixed'
                    }}
                >
                    <MainTabs />
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        height: "100%",
                        px: 11,
                        ml: 30
                    }}
                >

                    <Content />
                </Box>
            </Box>
        </Box>
    );
};

export default Main;
