import React from "react";
import { Box } from "@mui/material";
import Main from "../components/Task2/Main/Main";
import Sidebar from "../components/Task2/Sidebar/Sidebar";
import Header from "../components/Task2/Header/Header";

const Employer = () => {
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
                <Box sx={{ mt: 23, width: '100%' }}>
                    <Main />
                </Box>
            </Box>
        </Box>
    );
};

export default Employer;
