import { Container } from "@chakra-ui/react";
import React from "react";
import Nav from "../Navbar/Navbar";

function PageContainer({ children, noNav }) {

    return (  
        <Container centerContent maxWidth="100%" minHeight="100vh" overflowY={"hidden"}>
            { noNav ?? <Nav />}
            { children }
        </Container>
    )
}

export default PageContainer;