import { Box, Flex, Button, Stack, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import NavLink from './NavLink';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box w="120ch">
      <Flex h="60px" alignItems={'center'} justifyContent={'space-between'}>
        <Stack direction={"row"} gap="10px" alignItems={"center"}>
          <NavLink href="/">Accueil</NavLink>
          <NavLink href="/projects">Mes projets</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </Stack>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} alignItems="center" spacing={3}>
              <Button onClick={toggleColorMode}>
                  { colorMode === 'light' ? <MoonIcon /> : <SunIcon /> }
              </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}