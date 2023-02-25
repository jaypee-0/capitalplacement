import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Qualified from "./Qualified";
import Disqualified from "./Disqualified";

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
                <Box sx={{ p: 3 }}>
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

function MainTabs({idO, setidO}:any) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className="bg-[#F6F8F9] h-[100%]">
            <Tabs
                value={value}
                textColor="inherit"
                onChange={handleChange}
                aria-label="basic tabs example"
                indicatorColor="primary"
                centered
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "#000000",
                        width: "120px"
                    }
                }}
            >
                <Tab sx={{ fontSize: "12px", color: "#A5A5A5", marginRight: "20px" }} label="QUALIFIED" {...a11yProps(0)} />
                <Tab sx={{ fontSize: "12px", color: "#A5A5A5" }} label="DISQUALIFIED" {...a11yProps(1)} />
            </Tabs>
            <Divider sx={{ width: "230px", marginLeft: "35px" }} />
            <TabPanel value={value} index={0}>
                <Qualified idO={idO} setidO={setidO} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Disqualified />
            </TabPanel>
        </div>
    );
}

export default MainTabs;
