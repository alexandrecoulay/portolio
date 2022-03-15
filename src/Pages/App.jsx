import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import SvgListHome from "./SvgList";
import Home from './Home';
import "../Styles/index.scss";
import { theme } from "../Theme/theme";
import Projects from "./Projects";
import { ProjectContextProvider, UserContextProvider } from "../Context/AppContext";
import Connect from "./Connect";
import Sound from "./Sound";
import Contact from "./Contact";

function App() {
    const [userInfo, setUserInfo] = useState(null)

    return (
        <ProjectContextProvider>
            <UserContextProvider value={[userInfo, setUserInfo]}>
                <ChakraProvider theme={theme}>
                    <BrowserRouter>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/svg/:user_id" element={<SvgListHome />} />
                            <Route exact path="/projects" element={<Projects />} />
                            <Route exact path="/contact" element={<Contact />} />
                            <Route exact path="/connect" element={<Connect />} />
                            <Route exact path="/sound" element={<Sound />} />
                        </Routes>
                    </BrowserRouter>
                </ChakraProvider>
            </UserContextProvider>
        </ProjectContextProvider>
    );
}

export default App;
