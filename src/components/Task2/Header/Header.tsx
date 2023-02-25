import React from "react";
import Divider from "@mui/material/Divider";
import { LocationOn } from "@mui/icons-material";

const Header = () => {
    const [activeIndex, setActiveIndex] = React.useState<number | boolean>(1);

    const active = (id: number) => {
        if (activeIndex === id) {
            return setActiveIndex(false);
        }
        setActiveIndex(id);
    };
    const headerDeets = [
        { name: "Recommended", no: 3 },
        { name: "Shortlisted", no: 3 },
        { name: "Offer", no: 1 },
        { name: "Hired", no: 0 }
    ];

    return (
        <div className="-ml-1 fixed w-full z-[888] bg-white shadow-md">
            <div className="flex flex-row gap-x-8 items-center my-4 ml-3    ">
                <h5 style={{ fontWeight: "700" }}>Marketing and Business Develeopement Intern</h5>
                <p className="underline ">SaasLeads</p>

                <p className="">
                    <LocationOn sx={{ fontSize: "15px", marginRight: "3px" }} />
                    Lodon,UK
                </p>

                <p className="">View job description</p>
            </div>
                <div className="flex flex-row justify-between">
                    {headerDeets.map(({ name, no }, index) => {
                        return (
                            <div className="flex flex-row w-full">
                                <div
                                    key={index}
                                    className={`${
                                        activeIndex === index ? "bg-[#00635B] text-white" : "bg-[#fff] text-[#00635B]"
                                    } w-full text-center flex flex-col h-32 justify-center self-center cursor-pointer`}
                                    onClick={() => active(index)}
                                >
                                    <p className="text-2xl mb-2 font-bold">{no}</p>
                                    <p>{name}</p>
                                </div>
                                <Divider orientation="vertical" />
                            </div>
                        );
                    })}
                </div>
        </div>
    );
};

export default Header;
