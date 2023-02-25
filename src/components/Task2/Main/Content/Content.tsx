import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Profile from "./Profile";
import Video from "./Video";
import Notes from "./Notes";
import Evaluation from "./Evaluation";
import { Cancel } from "@mui/icons-material";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ py: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

const Content = ({idO, setidO}:any) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className="w-full">

            {/* Buttons */}
                <div className="flex flex-row gap-x-4 mt-3 w-full justify-end mb-7">
                    <button className="flex flex-row font-bold gap-x-4 text-sm rounded-sm py-3 px-4 text-[#A80000]">
                        <Cancel fontSize="small" />
                        Disqualify
                    </button>
                    <button className="flex flex-row font-bold text-sm rounded-md py-3 px-4 text-[#fff] bg-black">Move to Shortlist</button>
                </div>
            <Tabs
                value={value}
                textColor="inherit"
                onChange={handleChange}
                aria-label="basictabs"
                indicatorColor="primary"
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "#000000",
                        width: "120px",
                        height: "3px"
                    }
                }}
            >
                <Tab sx={{ fontSize: "14px", fontWeight: 700, color: "#000", marginRight: "20px" }} label="Profile" {...a11yProps(0)} />
                <Tab sx={{ fontSize: "14px", fontWeight: 700, color: "#000", marginRight: "20px" }} label="Video" {...a11yProps(1)} />
                <Tab sx={{ fontSize: "14px", fontWeight: 700, color: "#000", marginRight: "20px" }} label="Evaluation" {...a11yProps(2)} />
                <Tab sx={{ fontSize: "14px", fontWeight: 700, color: "#000", marginRight: "20px" }} label="Notes" {...a11yProps(3)} />
            </Tabs>
            <Divider sx={{ width: "100%"}} />
            <TabPanel value={value} index={0}>
                <Profile idO={idO} setidO={setidO} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Video />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Evaluation />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Notes />
            </TabPanel>
        </div>
    );
};
export default Content;
