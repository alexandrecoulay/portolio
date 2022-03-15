import React, { useState, useContext } from "react";
import { useToast } from '@chakra-ui/react'
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';

import {UserContext} from "../../Context/AppContext";

function ConnectHome() {
    const toast = useToast()
    const [user, setUser] = useState({
        id: "alex123",
        password: "poneygris"
    });

    const [userInfo, setUserInfo] = useContext(UserContext)

    const sendInfo = () => {
        if(user.id === "alex123" && user.password === "poneygris") {
            setUserInfo(user)
            toast({
                title: "Succès",
                description: "Connexion réussi",
                status: "success",
                duration: 7000,
                isClosable: true
            })
        } else {
            toast({
                title: "Erreur",
                description: "Vérifier que les champs soient bien remplis",
                status: "error",
                duration: 7000,
                isClosable: true
            })
        }
    }

    return (
        <Flex
            minH={'calc(100vh - 60px)'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                    Connexion
                </Heading>
                <FormControl isRequired>
                    <FormLabel>Identifiant</FormLabel>
                    <Input                        
                        name="id"
                        onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                        value={user.id}
                        placeholder="alex123"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Mot de passe</FormLabel>
                    <Input
                        name="password"
                        onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                        value={user.password}
                        placeholder="poneygris"
                        _placeholder={{ color: 'gray.500' }}
                        type="password"
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
                        Se connecter
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
}

export default ConnectHome;