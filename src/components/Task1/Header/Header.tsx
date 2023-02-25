import React, { useState } from "react";
import "./Header.css";
import Divider from "@mui/material/Divider";

const Header = () => {
    const [selected, setSelected] = useState(true);
    return (
        <div className="h-[110px] w-full">
            <div className="headerTabs__container">
                <div className="headerTabs__subContainer my-auto">
                    <div>
                        <span>xxxxxxxxxx</span>
                    </div>
                    <div>
                        <Divider orientation="vertical" />
                    </div>
                </div>
                <div className={`${selected === true ? "bg-[#00635b] h-full w-[280px] text-white items-center flex flex-row justify-center" : "headerTabs__subContainer my-auto"}`}>
                    <div>
                        <span>Application Form</span>
                    </div>

                    <div>
                        <Divider orientation="vertical" />
                    </div>
                </div>
                <div className="headerTabs__subContainer my-auto">
                    <div>
                        <span>xxxxxxxxxx</span>
                        <Divider orientation="vertical" />
                    </div>
                </div>
            </div>
            <Divider sx={{ width: "100%" }} />
        </div>
    );
};

export default Header;
