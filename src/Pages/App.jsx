import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Home from './Home';
import "../Styles/index.scss";
import { theme } from "../Theme/theme";
import Projects from "./Projects";
import { ProjectContextProvider } from "../Context/AppContext";
import Contact from "./Contact";

function App() {

    return (
        <ProjectContextProvider>
            <ChakraProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/projects" element={<Projects />} />
                        <Route exact path="/contact" element={<Contact />} />
                    </Routes>
                </BrowserRouter>
            </ChakraProvider>
        </ProjectContextProvider>
    );
}

export default App;
