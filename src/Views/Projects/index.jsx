import React, { useContext } from "react"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import ProjectCard from "../../Components/Projects/Card";
import { ProjectContext, UserContext } from "../../Context/AppContext";
import AddProjectForm from "./AddProject";

function ProjectsHome({ noAddProjects }) {
    const { projects } = useContext(ProjectContext)
    const [userInfo] = useContext(UserContext);
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            {
                userInfo?.id === "alex123" && !noAddProjects && <Button onClick={onOpen}>Ajouter un projet</Button>
            }
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Ajouter un projet</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <AddProjectForm />
                    </ModalBody>
                    <ModalFooter>
                        <Button bg={'#CD4F4B'} _hover={{ bg: "#8E4F4B" }} mr={3} onClick={onClose}>
                            Fermer
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <SimpleGrid columns={2} spacing='10'>
                {projects?.length > 1 && projects.map((data, idx) => <ProjectCard key={idx} {...data} />) }
            </SimpleGrid>
        </>
    )
}


export default ProjectsHome;