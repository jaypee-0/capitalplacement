import React from "react";
import "./Sidebar.css";
import { Box, Avatar } from "@mui/material";
import { Menu } from "@mui/icons-material";

const HomeIcon = require("../../../assets/home.png");
const NoteIcon = require("../../../assets/note.png");

const Sidebar = () => {
    return (
        <Box className="sidebar">
            <Box className="sidebar__container">
                <Box className="sidebar__container1">
                    <Menu sx={{ fontSize: "38px", marginBottom: "35px", fontWeight: "10px" }} />
                    <img src={HomeIcon} className="mb-5 h-[30px] w-[30px] ml-[6px]" alt="pic.png" />
                    <img src={NoteIcon} className="mb-5 h-[30px] w-[30px] ml-[6px]" alt="pic.png" />
                </Box>
                <Box className="sidebar__container2">
                    <Avatar sx={{ bgcolor: "#1D4ED8", fontSize: "13px" }}>NT</Avatar>
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;
