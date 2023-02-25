import React from "react";
import { Box, FormControl, TextField, Checkbox, Switch, FormControlLabel } from "@mui/material";
import { ArrowForwardIos, Add } from "@mui/icons-material";
import { DropzoneDialog } from "mui-file-dropzone";
import { Typography } from "@material-ui/core";

const Main = () => {
    const [files, setfiles] = React.useState<any>([]);
    const [open, setopen] = React.useState<any>(false);

    function handleSave(files: any) {
        setopen(false);
        setfiles(files);
    }

    function handleOpen() {
        setopen(true);
    }
    function handleClose() {
        setopen(false);
    }
    const UploadIcon = require("../../../assets/upload.png");
    const [checked, setchecked] = React.useState(false);
    const [checkedswitch, setcheckedswitch] = React.useState(false);
    const info = [
        { name: "First Name", noSwitch: true },
        { name: "Last Name", noSwitch: true },
        { name: "Email", noSwitch: true },
        { name: "Phone", sub: "(without dial code)" },
        { name: "Nationality" },
        { name: "Current Residence" },
        { name: "ID Number" },
        { name: "Date of Birth" },
        { name: "Gender" }
    ];
    const profile = [
        { name: "Education" },
        { name: "Experience" },
        { name: "Resume" }
    ];
    return (
        <Box
            sx={{
                width: "100%",
                position: "relative",
                scrollBehavior: "smooth",
                mb: 10
            }}
        >
            <Box
                sx={{
                    bg: "white",
                    height: "100vh",
                    ml: 5,
                    mt: 10
                }}
            >
                <FormControl>
                    {/* Image Upload */}
                    <Box className="min-w-[420px] shadow-md rounded-2xl mb-10">
                        <p className="bg-[#D0F7FA] px-8 pt-4 pb-3 rounded-t-2xl font-semibold text-[#000]">Upload cover image</p>
                        <Box className="px-8 py-8">
                            <Box className="rounded-md border-dashed w-full h-44 border-black border flex flex-col text-center items-center justify-center">
                                <img onClick={handleOpen} src={UploadIcon} style={{ width: "40px", height: "40px", marginBottom: "10px" }} alt="pic.png" />
                                <Typography>Upload cover image</Typography>
                                <p className="text-[#979797] text-sm">16:9 ratio is recommended. Max image size 1mb</p>
                            </Box>
                        </Box>
                        <DropzoneDialog
                            open={open}
                            onSave={(files) => handleSave(files)}
                            acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                            showPreviews={true}
                            maxFileSize={5000000}
                            onClose={handleClose}
                            maxWidth="md"
                            onDelete={(file) => {
                                const currentFileIndex = files.indexOf(file);
                                files.splice(currentFileIndex, 1);
                                setfiles([...files]);
                            }}
                            fileObjects={files}
                        />
                    </Box>

                    {/* Personal Information */}
                    <Box className="min-w-[420px] lg:max-w-[450px] shadow-md rounded-2xl mb-10">
                        <p className="bg-[#D0F7FA] px-8 pt-4 pb-3 rounded-t-2xl font-semibold text-[#000]">Personal Information</p>
                        <Box className="px-8 py-8">
                            <Box className="flex flex-col mb-5">
                                {info.map(({ name, noSwitch, sub }) => {
                                    return (
                                        <Box className="mb-3 pb-4 border-b-[1px] border-b-gray-300 grid grid-cols-6 max-h-12">
                                            <Box className="flex items-center col-span-3">
                                                <label key={name} className="text-[#000] font-semibold">
                                                    {name}
                                                </label>
                                                <p className="text-[#00000090] text-xs ml-1">{sub}</p>
                                            </Box>
                                            <Box className="col-span-3 flex items-center flex-row">
                                                {noSwitch ? (
                                                    ""
                                                ) : (
                                                    <>
                                                        <FormControlLabel
                                                            control={<Checkbox checked={checked} onChange={() => setchecked(!checked)} inputProps={{ "aria-label": "controlled" }} />}
                                                            label="Internal"
                                                        />
                                                        <FormControlLabel
                                                            control={
                                                                <Switch
                                                                    defaultChecked
                                                                    size="small"
                                                                    checked={checkedswitch}
                                                                    onChange={() => setcheckedswitch(!checkedswitch)}
                                                                    inputProps={{ "aria-label": "controlled" }}
                                                                />
                                                            }
                                                            label={checkedswitch ? "Hide" : "Show"}
                                                        />
                                                    </>
                                                )}
                                            </Box>
                                        </Box>
                                    );
                                })}

                                <button className='flex flex-row font-bold gap-2 mt-3 -mb-4 text-sm'>
                                    <Add />
                                    Add a question
                                </button>
                            </Box>
                        </Box>
                    </Box>

                    {/* Profile */}
                    <Box className="min-w-[420px] lg:max-w-[450px] shadow-md rounded-2xl mb-10">
                        <p className="bg-[#D0F7FA] px-8 pt-4 pb-3 rounded-t-2xl font-semibold text-[#000]">Profile</p>
                        <Box className="px-8 py-8">
                            <Box className="flex flex-col mb-5">
                                {profile.map(({ name }) => {
                                    return (
                                        <Box className="mb-3 pb-4 border-b-[1px] border-b-gray-300 grid grid-cols-6 max-h-12">
                                            <Box className="flex items-center col-span-3">
                                                <label key={name} className="text-[#000] font-semibold">
                                                    {name}
                                                </label>
                                            </Box>
                                            <Box className="col-span-3 flex items-center flex-row">
                                                
                                                        <FormControlLabel
                                                            control={<Checkbox checked={checked} onChange={() => setchecked(!checked)} inputProps={{ "aria-label": "controlled" }} />}
                                                            label="Mandatory"
                                                        />
                                                        <FormControlLabel
                                                            control={
                                                                <Switch
                                                                    defaultChecked
                                                                    size="small"
                                                                    checked={checkedswitch}
                                                                    onChange={() => setcheckedswitch(!checkedswitch)}
                                                                    inputProps={{ "aria-label": "controlled" }}
                                                                />
                                                            }
                                                            label={checkedswitch ? "Hide" : "Show"}
                                                        />
                                            </Box>
                                        </Box>
                                    );
                                })}

                                <button className='flex flex-row font-bold gap-2 mt-3 -mb-4 text-sm'>
                                    <Add />
                                    Add a question
                                </button>
                            </Box>
                        </Box>
                    </Box>
                    
                    {/* Additional Questions */}
                    <Box className="min-w-[420px] lg:max-w-[450px] shadow-md rounded-2xl mb-10">
                        <p className="bg-[#D0F7FA] px-8 pt-4 pb-3 rounded-t-2xl font-semibold text-[#000]">Additional Questions</p>
                        <Box className="px-8 py-8">
                            <Box className="flex flex-col mb-5">
                                {profile.map(({ name }) => {
                                    return (
                                        <Box className="mb-3 pb-4 border-b-[1px] border-b-gray-300 grid grid-cols-6 max-h-12">
                                            <Box className="flex items-center col-span-3">
                                                <label key={name} className="text-[#000] font-semibold">
                                                    {name}
                                                </label>
                                            </Box>
                                            <Box className="col-span-3 flex items-center flex-row">
                                                
                                                        <FormControlLabel
                                                            control={<Checkbox checked={checked} onChange={() => setchecked(!checked)} inputProps={{ "aria-label": "controlled" }} />}
                                                            label="Mandatory"
                                                        />
                                                        <FormControlLabel
                                                            control={
                                                                <Switch
                                                                    defaultChecked
                                                                    size="small"
                                                                    checked={checkedswitch}
                                                                    onChange={() => setcheckedswitch(!checkedswitch)}
                                                                    inputProps={{ "aria-label": "controlled" }}
                                                                />
                                                            }
                                                            label={checkedswitch ? "Hide" : "Show"}
                                                        />
                                            </Box>
                                        </Box>
                                    );
                                })}

                                <button className='flex flex-row font-bold gap-2 mt-3 -mb-4 text-sm'>
                                    <Add />
                                    Add a question
                                </button>
                            </Box>
                        </Box>
                    </Box>
                    <TextField></TextField>
                    <button className='flex flex-row font-bold gap-x-4 mt-3 mb-5 text-sm rounded-sm py-3 px-4 ml-auto text-white bg-[#21B592]'>
                        Save & Continue                        
                        <ArrowForwardIos fontSize='small' />
                    </button>
                </FormControl>
            </Box>
        </Box>
    );
};

export default Main;
