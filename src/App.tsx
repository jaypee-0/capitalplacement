import "./styles/App.css";
import React from "react";
import Task1 from "./pages";
import Employer from "./pages/Employer";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import { useGetFormDetailsQuery, useGetUsersQuery } from "./services/generalApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Worker } from "@react-pdf-viewer/core";
import { useDispatch } from "react-redux";
import { setUsers } from "./slices/usersSlice";

function App() {
    const dispatch = useDispatch();
    
    const version = 0.1;
    const [programId, setprogramId] = React.useState<any>("");

    const { data } = useGetFormDetailsQuery(version, programId);
    const { data:users, isLoading } = useGetUsersQuery(version, programId);

    React.useEffect(() => {
        !isLoading && dispatch(setUsers(users?.users))        
        setprogramId("497f6eca-6276-4993-bfeb-53cbbbba6f08");
    }, [users, dispatch,isLoading]);

    if (isLoading) {
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
    }
    console.log(data, "-- DATA");
    //console.log(users?.users, "-- USERS"); 

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
