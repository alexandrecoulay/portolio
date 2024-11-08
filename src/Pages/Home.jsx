import React from "react";
import PageContainer from "../Components/Others/PageContainer";
import ContactHome from "../Views/Contact/ContactHome";
import Hero from "../Views/Home/Hero";
import Projects from "./Projects";

function Home() {
    
    return (
        <PageContainer>
            <Hero />
            <Projects noNav noAddProjects />
            <ContactHome noTitle />
        </PageContainer>
    )
}

export default Home;