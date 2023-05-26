import React from "react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
  IconButton,
  InputGroup,
  InputLeftAddon,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  AddIcon,
  AtSignIcon,
  BellIcon,
  ChatIcon,
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
  PlusSquareIcon,
  Search2Icon,
  SunIcon,
} from "@chakra-ui/icons";
import User_Auth from "./User_Auth";



const Links = [
  { url: "profile", title: "Profile" },
  { url: "message", title: "Message" },
  { url: "all_user", title: "All User" },


];

let Auth = true;

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("#DADBDD", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <NavLink to="/">
              <Box mr={100}><img src="https://attryb.com/assets/attrybNavLog.svg" alt="" /></Box>
            </NavLink>
            <HStack
              as={"nav"}
              spacing={30}
              display={{ base: "none", md: "flex" }}
              // border='1px' borderColor='gray.200'
              ml={50}
            >
           

              <NavLink to="/newCars">
             <Button>New Cars</Button>
              </NavLink>
              
              <NavLink to="/secondHandCars">
                <Button >Second Hand Cars</Button>
              </NavLink>

            </HStack>
          </HStack>

        

             



          <Flex alignItems={"center"}>
            <Button mr={4} onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <MoonIcon className="icon" />
              ) : (
                <SunIcon className="icon" />
              )}
            </Button>
            <Menu>
              <User_Auth />
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link.url}
                  to={`/${link.url}`}
                  onClick={() => {
                    onClose();
                  }}
                >
                  {link.title}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;