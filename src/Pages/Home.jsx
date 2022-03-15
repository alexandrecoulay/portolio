import React from "react";
import PageContainer from "../Components/Others/PageContainer";
import Hero from "../Views/Home/Hero";
import Projects from "./Projects";

function Home() {
    
    return (
        <PageContainer>
            <Hero />
            <Projects noNav noAddProjects />
        </PageContainer>
    )
}

export default Home;