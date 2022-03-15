import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Link,
} from '@chakra-ui/react';
import LinkAvatar from "../Buttons/LinkAvatar";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function ProjectCard({ url, title, description, image, favicon, created_at, language }) {
  
    return (
      <Center py={6}>
        <Stack height={'450px'} w={'445px'} boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
          <Box maxH={'150px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
            <Box background={`url(${image})`} display="flex" flexDirection={"column"} justifyContent="center" bgPos={"50%"} w="full" bgSize={"cover"} height={"150px"}  />
          </Box>
          <Stack height={"100%"} direction={"column"} justifyContent="space-between">
            {
              language && <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}>
              { language }
            </Text>
            }
            <Stack>
              <Heading fontSize={'2xl'} fontFamily={'body'}>
                { title }
              </Heading>
              <Text color={'gray.500'}>{description}</Text>
            </Stack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <LinkAvatar src={favicon} href={url} size={22} />
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Link href={url} isExternal fontWeight={600}>{url} <ExternalLinkIcon mx={'2px'} /></Link>
                <Text color={'gray.500'}>Depuis : {created_at}</Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    )
}

export default ProjectCard;