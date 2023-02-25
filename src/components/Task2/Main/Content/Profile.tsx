import React from "react";
import Box from "@mui/material/Box";
import { Viewer } from "@react-pdf-viewer/core";
import { CircularProgress } from "@mui/material";
import { useGetOneUserQuery } from "../../../../services/generalApi";

const Profile:any = ({idO, setidO}:any) => {
    const nationality = "Nigerian";
    
    console.log(idO, "- -ID");
    const pdfUrl = require("../../../../assets/EyibraJohnpaulCV20230111.pdf");
    
    const { data, isLoading, isFetching } = useGetOneUserQuery(idO ? idO : 1, {
        refetchOnMountOrArgChange: true,
        skip: false
    });
    
    if (isLoading || isFetching) {
        return (
            <Box
                sx={{
                    bgcolor: "#fff",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <CircularProgress size={100} color="success" />
            </Box>
        );
    }
    if (data) {
        const { firstName, lastName, phone, email, address, gender, ssn } = data;
        return (
            <Box className=" w-full">
                {/* Main Content */}
                <div className="grid grid-cols-6 gap-8">
                    <Box className="col-span-3 w-full shadow-lg border-2 border-gray-100 shadow-gray-300 drop-shadow-xl rounded-2xl">
                        <p className="px-8 pt-4 pb-3 rounded-t-2xl font-extrabold text-[#000] text-2xl break-keep">{firstName + " " + lastName}</p>
                        <Box className="px-8 py-4 flex flex-row justify-between">
                            <Box className="flex flex-col mb-5">
                                <p className="mb-3 text-[#A5A5A5] font-medium">Current Location</p>
                                <p className="mb-3 text-[#A5A5A5] font-medium">Phone</p>
                                <p className="mb-3 text-[#A5A5A5] font-medium">Email</p>
                            </Box>
                            <Box className="flex flex-col mb-5 mx-auto">
                                <p className="mb-3 text-[#000] ">{address.city + " " + address.state}</p>
                                <p className="mb-3 text-[#000] ">{phone}</p>
                                <p className="mb-3 text-[#000] ">{email}</p>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="col-span-3 w-full shadow-lg border-2 border-gray-100 shadow-gray-300 drop-shadow-xl rounded-2xl">
                        <p className="px-8 pt-4 pb-3 rounded-t-2xl font-semibold text-[#000] border-b">Personal Information</p>
                        <Box className="px-8 py-4 flex flex-row justify-between">
                            <Box className="flex flex-col mb-5">
                                <p className="mb-3 text-[#A5A5A5] font-medium">Nationality</p>
                                <p className="mb-3 text-[#A5A5A5] font-medium">National ID</p>
                                <p className="mb-3 text-[#A5A5A5] font-medium">Gender</p>
                            </Box>
                            <Box className="flex flex-col mb-5 mx-auto">
                                <p className="mb-3 text-[#000] ">{nationality}</p>
                                <p className="mb-3 text-[#000] ">{ssn}</p>
                                <p className="mb-3 text-[#000] ">{gender}</p>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="col-span-3 w-full shadow-lg border-2 border-gray-100 shadow-gray-300 drop-shadow-xl rounded-2xl">
                        <p className="px-8 pt-4 pb-3 rounded-t-2xl font-semibold text-[#000] border-b">Education</p>
                        <Box className="px-8 py-4 flex flex-row justify-between gap-x-8">
                            <Box className="flex flex-col mb-5">
                                <p className="mb-4 text-[#000] font-medium">
                                    MM/YYYY-<p>MM/YYYY </p>
                                </p>
                                <p className="mb-4 text-[#000] font-medium">
                                    MM/YYYY-<p>MM/YYYY </p>
                                </p>
                            </Box>
                            <Box className="flex flex-col mb-5 mx-auto ">
                                <p className="mb-3 text-[#000] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quia.</p>
                                <p className="mb-3 text-[#000] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sit!</p>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="col-span-3 w-full shadow-lg border-2 border-gray-100 shadow-gray-300 drop-shadow-xl rounded-2xl">
                        <p className="px-8 pt-4 pb-3 rounded-t-2xl font-semibold text-[#000] border-b">Experience</p>
                        <Box className="px-8 py-4 flex flex-row justify-between gap-x-8">
                            <Box className="flex flex-col mb-5">
                                <p className="mb-4 text-[#000] font-medium">
                                    MM/YYYY-<p>MM/YYYY </p>
                                </p>
                                <p className="mb-4 text-[#000] font-medium">
                                    MM/YYYY-<p>MM/YYYY </p>
                                </p>
                            </Box>
                            <Box className="flex flex-col mb-5 mx-auto ">
                                <p className="mb-3 text-[#000] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quia.</p>
                                <p className="mb-3 text-[#000] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sit!</p>
                            </Box>
                        </Box>
                    </Box>
                </div>

                {/* PDF Viewer */}
                <Box
                    sx={{
                        marginTop: 10,
                        border: "1px solid rgba(0, 0, 0, 0.3)",
                        minHeight: "750px",
                        overflowY: "scroll"
                    }}
                >
                    <Viewer fileUrl={pdfUrl} />
                </Box>
            </Box>
        );
    }
};

export default Profile;
