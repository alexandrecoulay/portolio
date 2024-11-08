import React, { useContext } from "react"
import {SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "../../Components/Projects/Card";
import { ProjectContext } from "../../Context/AppContext";

function ProjectsHome() {
    const { projects } = useContext(ProjectContext)

    return (
            <SimpleGrid columns={2} spacing='10'>
                {projects?.length > 1 && projects.map((data, idx) => <ProjectCard key={idx} {...data} />) }
            </SimpleGrid>
    )
}


export default ProjectsHome;