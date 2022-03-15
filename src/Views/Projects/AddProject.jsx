import React, { useContext, useState } from "react";
import { ProjectContext } from "../../Context/AppContext";
import { addProject } from "../../Context/Project/Reducer";

import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
} from '@chakra-ui/react';

function AddProjectForm() {

    const [new_projects, setNewProjects] = useState({ 
        url: "", 
        title: "", 
        description: "", 
        image: "",
        favicon: "",
        created_at: "",
        language: ""
    })
    const { dispatch } = useContext(ProjectContext)

    const sendInfo = () => {
        dispatch(addProject(new_projects))
    }
    return (
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}>
                <FormControl isRequired>
                    <FormLabel>Url</FormLabel>
                    <Input                        
                        name="url"
                        onChange={(e) => setNewProjects({ ...new_projects, [e.target.name]: e.target.value })}
                        value={new_projects.url}
                        placeholder="https://example.com"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Titre</FormLabel>
                    <Input                        
                        name="title"
                        onChange={(e) => setNewProjects({ ...new_projects, [e.target.name]: e.target.value })}
                        value={new_projects.title}
                        placeholder="Titre du projet"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Description</FormLabel>
                    <Input
                        name="description"
                        onChange={(e) => setNewProjects({ ...new_projects, [e.target.name]: e.target.value })}
                        value={new_projects.description}
                        placeholder="Ma description"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Url de l'image</FormLabel>
                    <Input
                        name="image"
                        onChange={(e) => setNewProjects({ ...new_projects, [e.target.name]: e.target.value })}
                        value={new_projects.image}
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Url de l'icône</FormLabel>
                    <Input
                        name="favicon"
                        onChange={(e) => setNewProjects({ ...new_projects, [e.target.name]: e.target.value })}
                        value={new_projects.favicon}
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Date</FormLabel>
                    <Input
                        name="created_at"
                        onChange={(e) => setNewProjects({ ...new_projects, [e.target.name]: e.target.value })}
                        value={new_projects.created_at}
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Langage utilisé</FormLabel>
                    <Input
                        name="language"
                        onChange={(e) => setNewProjects({ ...new_projects, [e.target.name]: e.target.value })}
                        value={new_projects.language}
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                    />
                </FormControl>
                <Stack spacing={6}>
                    <Button
                        onClick={() => sendInfo()}
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Enregistrer
                    </Button>
                </Stack>
            </Stack>
    )
}

export default AddProjectForm;