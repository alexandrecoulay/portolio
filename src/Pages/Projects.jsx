import React from "react";
import PageContainer from "../Components/Others/PageContainer";
import ProjectsHome from "../Views/Projects";

function Projects({ noNav, noAddProjects }) {
    
    return(
        <PageContainer noNav={noNav}>
            <ProjectsHome noAddProjects={noAddProjects} />
        </PageContainer>
    )
}

export default Projects;