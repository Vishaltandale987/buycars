import React, { useEffect, useState } from 'react'

import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Stack,
  Button,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  keyframes,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { StarIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { AiOutlineUser } from 'react-icons/ai';



function User_Auth() {


  const [userdata, setuserdata] = useState()


  const size = "45px";
  const color = "teal";
  const navigate = useNavigate();


  



  const pulseRing = keyframes`
    0% {
      transform: scale(0.33);
    }
    40%,
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
    `;



    // get user
    let userId = localStorage.getItem("id");
   

    const add = () => {

     
      
      if(userId === null){

        return false

      }else  if(userId !== ""){

        return true

      }

    }

      let isAuthenticated = add()

    const getUser = async () => {
  
  
      try {
        const res = await axios(`https://serverside-qga2.vercel.app/user/${userId}`);
        setuserdata(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      getUser()
    }, [])



    const handleLogout = () => {
      localStorage.removeItem("id");
      localStorage.removeItem("role");
      window.location.reload()
    }

  return (
    <div>
      {!isAuthenticated ? (
       <Link to="/userLogin">
       {/* <StarIcon className="icon" /> */}
        <AiOutlineUser/>

     </Link>
       
      ) : null}

      {isAuthenticated && (
        <Flex justifyContent="center">
          <Popover placement="bottom" isLazy>
            <PopoverTrigger>
              <Flex
                justifyContent="center"
                alignItems="center"
                h="216px"
                w="full"
                overflow="hidden"
              >
          
                <Box
                  as="div"
                  position="relative"
                  w={size}
                  h={size}
                  _before={{
                    content: "''",
                    position: "relative",
                    display: "block",
                    width: "300%",
                    height: "300%",
                    boxSizing: "border-box",
                    marginLeft: "-100%",
                    marginTop: "-100%",
                    borderRadius: "70px",
                    bgColor: color,
                    animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                  }}
                >
                  {/* <img src="https://avatars.githubusercontent.com/u/107469218?v=4" alt="" /> */}
                  <Avatar
                  style={{
                    marginLeft:"-22px"
                  }}
                    src={userdata?.profilePicture}
                    size="full"
                    position="absolute"
                    top={0}
                    
                  />
                </Box>
              </Flex>
            </PopoverTrigger>
            <PopoverContent _focus={{ boxShadown: "none" }} mt={"-70px"}>
              <PopoverBody w="full">
                {isAuthenticated && (
                  <Center>
                    <Box
                      maxW={"270px"}
                      w={"full"}
                      boxShadow={"2xl"}
                      rounded={"md"}
                      overflow={"hidden"}
                    >
                      <Image
                        h={"120px"}
                        w={"full"}
                        src={
                          "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        }
                        objectFit={"cover"}
                      />
                      <Flex justify={"center"} mt={-12}>
                        <Avatar
                          size={"xl"}
                          src={userdata?.profilePicture}
                          alt={"Author"}
                          css={{
                            border: "2px solid white",
                          }}
                        />
                      </Flex>

                      <Box>
                        <Stack spacing={0} align={"center"} mb={5}>
                          <Heading
                            fontSize={"2xl"}
                            fontWeight={500}
                            fontFamily={"body"}
                            
                          >
                          {userdata?.username}
                          </Heading>
                   
                        </Stack>

                        <Flex justifyContent={"space-around"} pb={"10px"}>
                        
                          <Button
                            w={"fit-content"}
                            mt={10}
                            // bg={useColorModeValue("#151f21", "gray.900")}
                            color={"white"}
                           
                            colorScheme='whatsapp'
                            onClick={handleLogout}
                          >
                            Logout
                          </Button>
                        </Flex>
                      </Box>
                    </Box>
                  </Center>
                )}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      )}
    </div>
  );
}

export default User_Auth;

