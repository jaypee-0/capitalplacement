import React from "react";
import { Add } from "@mui/icons-material";
import ReactPlayer from 'react-player/lazy'

const Video = () => {
    const [activeIndex, setActiveIndex] = React.useState<number | boolean>(1);
    const active = (id: number) => {
        if (activeIndex === id) {
            return setActiveIndex(false);
        }
        setActiveIndex(id);
    };
    return (
        <div className="w-full">
            {/* Buttons */}
            <div className="flex flex-row gap-x-4 mt-3 w-full justify-between mb-7 rounded-3xl py-5 px-5 border-[1px] border-gray-200 shadow-lg shadow-gray-300 items-center">
                <p className="text-[#0B0B0B] w-1/2 text-lg">Candidate’s video submissions will below below, you can also ask candidate’s to submit further video.</p>
                <button className="flex flex-row items-center font-bold gap-x-4 text-lg rounded-sm text-[#00635B]">
                    <Add fontSize="large" />
                    Request Video
                </button>
            </div>

            <div className="flex flex-row mt-3 w-full justify-between mb-7 rounded-3xl border-[1px] border-gray-200 shadow-lg shadow-gray-300 items-center">
                <div className="p-5 mr-8 w-full">
                    <h3 className="text-2xl font-bold">Tell us about yourself?</h3>
                    <p className="text-[#BABABA] text-sm pb-4 w-full mt-10">Submitted on 12 Mar 2023</p>
                    <div className="h-[0.5px] bg-[#BABABA] mb-7 w-full" />
                    <h3 className="uppercase text-sm mb-3 font-bold">Rate this video</h3>
                    <div className="flex mb-3">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                            return (
                                <div className="flex flex-row w-full">
                                    <div
                                        key={index}
                                        className={`${
                                            activeIndex === index ? "bg-[#000000] text-white" : "bg-[#fff] text-[#000]"
                                        } w-full text-center flex flex-col h-10 justify-center self-center cursor-pointer border-[#000] border rounded-md`}
                                        onClick={() => active(index)}
                                    >
                                        <p className="text-xl my-auto mb-2 font-bold">{item}</p>
                                    </div>
                                    {/* <Divider orientation="vertical" className="bg-black" /> */}
                                </div>
                            );
                        })}
                    </div>

                    <p className="text-right text-red-700 font-bold mt-auto">Delete video</p>
                </div>
                <div className="rounded-2xl bg-[#fff] h-[330px] w-[500px]">
                    <ReactPlayer style={{borderRadius: 50}} url="https://www.youtube.com/watch?v=rQ4CCTgsdcU" width="100%" height="100%" />
                </div>
            </div>

            <div className="mt-3 w-full mb-7 rounded-3xl py-5 px-5 border-[1px] border-gray-200 shadow-lg shadow-gray-300">
                <p className="text-[#000000] font-bold lg:w-1/2 xl:w-1/3 text-2xl">Why do you want to be part of this program and what would you like to gain?</p>
                <p className="text-[#BABABA] text-sm pb-4 w-full mt-8">Requested on 12 Mar 2023 | Deadline: 12 June 2023</p>
            </div>
        </div>
    );
};

export default Video;
