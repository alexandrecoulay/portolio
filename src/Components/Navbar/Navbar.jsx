import { Box, Flex, Button, Stack, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import NavLink from './NavLink';
import { useContext } from 'react';
import { UserContext } from '../../Context/AppContext';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [userInfo, setUserInfo] = useContext(UserContext);

  const disconnect = () => {
    setUserInfo(null)
  }

  return (
    <Box w="120ch">
      <Flex h="60px" alignItems={'center'} justifyContent={'space-between'}>
        <Stack direction={"row"} gap="10px" alignItems={"center"}>
          <NavLink href="/">Accueil</NavLink>
          <NavLink href="/projects">Mes projets</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/sound">Met le son jackie</NavLink>
          { userInfo?.id && <NavLink href={`/svg/${userInfo?.id}`}>Liste des SVG</NavLink> }
        </Stack>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} alignItems="center" spacing={3}>
              <Button onClick={toggleColorMode}>
                  { colorMode === 'light' ? <MoonIcon /> : <SunIcon /> }
              </Button>
              { userInfo?.id ? <Button onClick={() => disconnect()}>Deconnexion</Button> : <NavLink href={"/connect"}>Connexion</NavLink> }
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}