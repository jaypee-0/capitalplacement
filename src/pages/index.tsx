import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../components/Task1/Sidebar/Sidebar";
import Main from "../components/Task1/Main/Main";
import Header from "../components/Task1/Header/Header";

const Task1 = () => {
    return (
        <Box
            sx={{
                display: "flex",
                width: "100%"
            }}
        >
            <Box
                sx={{
                    width: 100
                }}
            >
                <Sidebar />
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh"
                }}
            >
                <Header />
                <Main />
            </Box>
        </Box>
    );
};

export default Task1;
