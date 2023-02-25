import "./styles/App.css";
import React from "react";
import Task1 from "./pages";
import Box from "@mui/material/Box";
import Employer from "./pages/Employer";
import { CircularProgress } from "@mui/material";
import { useGetFormDetailsQuery } from "./services/generalApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Worker } from "@react-pdf-viewer/core";

function App() {
    const version = 0.1;
    const [programId, setprogramId] = React.useState<any>("");

    const { data, isLoading } = useGetFormDetailsQuery(version, programId);
    console.log(data, "-- DATA");
    React.useEffect(() => {
        setprogramId("497f6eca-6276-4993-bfeb-53cbbbba6f08");
    }, []);

    if (isLoading)
        return (
            <Box
                sx={{
                    bgcolor: "#fff",
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <CircularProgress size={100} color="success" />
            </Box>
        );
    return (
      <>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Task1 />} />
                    <Route path="/employer/" element={<Employer />}></Route>
                </Routes>
            </BrowserRouter>
        </Worker>
      </>
    );
}

export default App;
