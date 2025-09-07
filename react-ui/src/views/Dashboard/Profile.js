import React, { useState, useEffect } from "react";
// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  Switch,
  Text,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
// Assets
import ProfileBgImage from "assets/img/ProfileBackground.png";
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPenFancy,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import { useAuth} from "../../auth-context/auth.context"
import axios from "../../api/index"

function Profile() {
  // Chakra color mode
  const [mentorData, setMentorData] = useState([]);
  const [applications, setApplications] = useState([]);
  const [application, setApplication] = useState([]);
  const [contacts, setContacts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  let {user} = useAuth();
  const { setUser} = useAuth();
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const borderProfileColor = useColorModeValue(
    "white",
    "rgba(255, 255, 255, 0.31)"
  );
  const emailColor = useColorModeValue("gray.400", "gray.300");

  const getMentorData = async (event) => {
    try {
          let respone = await axios.get("http://localhost:5000/api/mentor/profile", 
          { headers: { Authorization: user.token }});
          setMentorData(respone.data);
          console.log(respone.data);
          } catch (err) {
          console.log(err);
    }
  }

  const getApplications = async (event) => {
    try {
          let response = await axios.get("http://localhost:5000/api/applications-list/",
          { headers: { Authorization: user.token }});
          setApplications(response.data);
          console.log(response.data);
          console.log(response.data);
          } catch (err) {
          console.log(err);
    }
  }
{/* Accept application and get application id from map when onClick button */}
  async function acceptApplication(id) {
    try {
      console.log(id);
      {/* application = Application.objects.get(id=request.data.get("id"))
          Send application id to backend
    */}
      let response = await axios.post("http://localhost:5000/api/application/accept", id,
      { headers: { Authorization: user.token }});
      setApplication(response.data);
      console.log(response.data);
      }
      catch (err) {
      console.log(err);
    }
  }

  async function viewContacts(id) {
    try {
      onOpen();
      let response = await axios.post("http://localhost:5000/api/application-sender/contacts", id,
      { headers: { Authorization: user.token }});
      setContacts(response.data);
      console.log(response.data);
      }
      catch (err) {
      console.log(err);
    }
  }




  useEffect(() => {
    getMentorData();
    getApplications();
  }, []);


  return (
    <Flex direction="column">
      <Box
        mb={{ sm: "40px", md: "75px", xl: "70px" }}
        borderRadius="15px"
        px="0px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        align="center"
      >
        <Box
          bgImage={ProfileBgImage}
          w="100%"
          h="300px"
          borderRadius="25px"
          bgPosition="50%"
          bgRepeat="no-repeat"
          position="relative"
          display="flex"
          justifyContent="center"
        >
          <Flex
            direction={{ sm: "column", md: "row" }}
            mx="1.5rem"
            maxH="330px"
            w={{ sm: "90%", xl: "95%" }}
            justifyContent={{ sm: "center", md: "space-between" }}
            align="center"
            backdropFilter="saturate(200%) blur(50px)"
            position="absolute"
            boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
            border="2px solid"
            borderColor={borderProfileColor}
            bg={bgProfile}
            p="25px"
            borderRadius="20px"
            transform={{
              sm: "translateY(45%)",
              md: "translateY(110%)",
              lg: "translateY(160%)",
            }}
          >
            <Flex
              align="center"
              mb={{ sm: "10px", md: "0px" }}
              direction={{ sm: "column", md: "row" }}
              w={{ sm: "100%" }}
              textAlign={{ sm: "center", md: "start" }}
            >
              <Avatar
                me={{ md: "22px" }}
                src="https://res.cloudinary.com/dbkckoa6q/image/upload/v1679915188/aruzhan_fooatj.jpg"
                w="70px"
                h="70px"
                borderRadius="15px"
              />
              <Flex direction="column" maxWidth="100%" my={{ sm: "14px" }}>
                <Text
                  fontSize={{ sm: "lg", lg: "xl" }}
                  color={textColor}
                  fontWeight="bold"
                  ms={{ sm: "8px", md: "0px" }}
                >
                  {mentorData.first_name}
                </Text>
                <Text
                  fontSize={{ sm: "sm", md: "md" }}
                  color={emailColor}
                  fontWeight="semibold"
                >
                  aruzhan.nurtayeva@gmail.com
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap="22px">
        {/* <Card p="16px">
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Настройки платформы
            </Text>
          </CardHeader>
          <CardBody px="5px">
            <Flex direction="column">
              <Text fontSize="sm" color="gray.500" fontWeight="600" mb="20px">
                ACCOUNT
              </Text>
              <Flex align="center" mb="20px">
                <Switch colorScheme="teal" me="10px" />
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color="gray.500"
                  fontWeight="400"
                >
                  Email me when someone follows me
                </Text>
              </Flex>
              <Flex align="center" mb="20px">
                <Switch colorScheme="teal" me="10px" />
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color="gray.500"
                  fontWeight="400"
                >
                  Email me when someone answers on my post
                </Text>
              </Flex>
              <Flex align="center" mb="20px">
                <Switch colorScheme="teal" me="10px" />
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color="gray.500"
                  fontWeight="400"
                >
                  Email me when someone mentions me
                </Text>
              </Flex>
              <Text
                fontSize="sm"
                color="gray.500"
                fontWeight="600"
                m="6px 0px 20px 0px"
              >
                APPLICATION
              </Text>
              <Flex align="center" mb="20px">
                <Switch colorScheme="teal" me="10px" />
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color="gray.500"
                  fontWeight="400"
                >
                  New launches and projects
                </Text>
              </Flex>
              <Flex align="center" mb="20px">
                <Switch colorScheme="teal" me="10px" />
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color="gray.500"
                  fontWeight="400"
                >
                  Monthly product changes
                </Text>
              </Flex>
              <Flex align="center" mb="20px">
                <Switch colorScheme="teal" me="10px" />
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color="gray.500"
                  fontWeight="400"
                >
                  Subscribe to newsletter
                </Text>
              </Flex>
            </Flex>
          </CardBody>
        </Card> */}
        {/* <Card maxH="100%">
          <CardHeader p="22px 0px 35px 14px">
            <Flex direction="column">
              <Text
                fontSize="lg"
                color={textColor}
                fontWeight="bold"
                pb=".5rem"
              >
                Процесс заявки
              </Text>
            </Flex>
          </CardHeader>
          <CardBody ps="20px" pe="0px" mb="31px" position="relative">
            <Flex direction="column">
              {timelineData.map((row, index, arr) => {
                return (
                  <TimelineRow
                    logo={row.logo}
                    title={row.title}
                    color={row.color}
                    index={index}
                    arrLength={arr.length}
                  />
                );
              })}
            </Flex>
          </CardBody>
        </Card> */}
        { user.role === "mentor_approved" ? (
        <Card maxH="100%" p="16px">
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Biography
            </Text>
          </CardHeader>
          <CardBody px="5px">
            <Flex direction="column">
              <Text fontSize="md" color="gray.500" fontWeight="400" mb="30px" maxW="300px">
              {mentorData.biography}
              </Text>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  me="10px"
                >
                  University:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  {mentorData.university}
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  me="10px"
                >
                  Level of education:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  {mentorData.level_of_education}
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  me="10px"
                >
                  Degree:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  {mentorData.degree}
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
              <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  me="10px"
                >
                  Country:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  {mentorData.country}
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  me="10px"
                >
                  Graduation year:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  {mentorData.graduation_year}
                </Text>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        ) : (
          <></>
        )}
        <Box h="350" overflowX="auto" w={{base: "100%", md: "200%" }}>
        <Card p="16px" w={{base: "100%", md: "200%" }} maxW="100%">
          { user.role === "mentor_approved" ? (
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Applications to you
            </Text>
          </CardHeader>
          ) : (
            <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Заявки менторам
            </Text>
          </CardHeader>
          )}
          {applications.length === 0 ? (
            <CardBody px="5px" maxW="100%">
              <Flex direction="column">
                <Text fontSize="md" color="gray.500" fontWeight="400" mb="30px">
                  Пока что у вас нет заявок...
                  </Text>
                  </Flex>
                  </CardBody>
                  ) :  (
                    <></>
                  )
          }
          {applications.map((ApplicationsData) => {
            return (
          <Box overflowX="auto">
            <Card>
              <CardBody px="5px" maxW="100%">
                <Flex direction="column" w="100%">
                  <Flex justifyContent="space-between" mb="21px" w="100%">
                    <Flex align="center">
                      <Flex direction="column" me="20px" w="70%">
                        {user.role === "mentor_approved" ? (
                        <Text fontSize="sm" color={textColor} fontWeight="bold">
                          {ApplicationsData.sendername}
                        </Text>
                        ) : (
                          <Text fontSize="sm" color={textColor} fontWeight="bold">
                          {ApplicationsData.recipientname}
                        </Text>
                        )}
                        <Text fontSize="xs" color="gray.500" fontWeight="400" maxW="90%">
                          {ApplicationsData.message}
                        </Text>
                      </Flex>
                    </Flex>
                    {ApplicationsData.state === "pending" && user.role === "mentor_approved" && ( 
                    <Flex maxW="50%">
                      <Button p="0px" 
                              bg="transparent" 
                              variant="link"
                              onClick={() => {
                                acceptApplication(ApplicationsData.id);
                              }}
                
                              >
                        <Text
                          fontSize="sm"
                          fontWeight="600"
                          color="green.300"
                          variant="solid"
                          alignSelf="center"
                        >
                          Accept application
                        </Text>
                      </Button>
                    </Flex>
                    )}
                    {ApplicationsData.state === "accepted" && user.role === "mentor_approved" && (
                      <Flex maxW="50%">
                        <Button p="0px"
                                bg="transparent"
                                variant="link"
                                onClick={() => {
                                  viewContacts(ApplicationsData.id);
                                }}
                                >
                          <Text
                            fontSize="sm"
                            fontWeight="600"
                            color="teal.300"
                            variant="solid"
                            alignSelf="center"
                          >
                            Посмотреть контакты
                          </Text>
                        </Button>
                      </Flex>
                    )}
                    {ApplicationsData.state === "accepted" && user.role === "user" && (
                      <Flex maxW="100%">
                        <Button p="0px"
                                colorScheme="green"
                                variant="solid"
                                >
                          <Text
                            fontSize="sm"
                            fontWeight="600"
                            color="white"
                            alignSelf="center"
                          >
                            Заявка принята
                          </Text>
                        </Button>
                      </Flex>
                    )}
                    {ApplicationsData.state === "pending" && user.role === "user" && (
                      <Flex maxW="50%">
                        <Button p="0px"
                                colorScheme="yellow"
                                variant="solid"
                                >
                          <Text
                            fontSize="sm"
                            fontWeight="600"
                            color="teal.300"
                            alignSelf="center"
                          >
                            Заявка в обработке
                          </Text>
                        </Button>
                      </Flex>
                      
                    )}
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          </Box>
            );
          })}
          <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Контакты Вашего ученика</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                Номер телефона: {contacts.phone_number}
              </Text>
              <Text>
                Email: {contacts.email}
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost' onClick={onClose}>Закрыть</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </Card>
        </Box>
      </Grid>
      {/* <Card p="16px" my="24px">
        <CardHeader p="12px 5px" mb="12px">
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Projects
            </Text>
            <Text fontSize="sm" color="gray.500" fontWeight="400">
              Architects design houses
            </Text>
          </Flex>
        </CardHeader>
        <CardBody px="5px">
          <Grid
            templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "repeat(4, 1fr)" }}
            templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
            gap="24px"
          >
            <Flex direction="column">
              <Box mb="20px" position="relative" borderRadius="15px">
                <Image src={ImageArchitect1} borderRadius="15px" />
                <Box
                  w="100%"
                  h="100%"
                  position="absolute"
                  top="0"
                  borderRadius="15px"
                  bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
                ></Box>
              </Box>
              <Flex direction="column">
                <Text fontSize="md" color="gray.500" fontWeight="600" mb="10px">
                  Project #1
                </Text>
                <Text
                  fontSize="xl"
                  color={textColor}
                  fontWeight="bold"
                  mb="10px"
                >
                  Modern
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400" mb="20px">
                  As Uber works through a huge amount of internal management
                  turmoil.
                </Text>
                <Flex justifyContent="space-between">
                  <Button
                    variant="outline"
                    colorScheme="teal"
                    minW="110px"
                    h="36px"
                    fontSize="xs"
                    px="1.5rem"
                  >
                    VIEW PROJECT
                  </Button>
                  <AvatarGroup size="xs">
                    <Avatar name="Ryan Florence" src={avatar6} />
                    <Avatar name="Segun Adebayo" src={avatar2} />
                    <Avatar name="Kent Dodds" src={avatar3} />
                    <Avatar name="Prosper Otemuyiwa" src={avatar4} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction="column">
              <Box mb="20px" position="relative" borderRadius="15px">
                <Image src={ImageArchitect2} borderRadius="15px" />
                <Box
                  w="100%"
                  h="100%"
                  position="absolute"
                  top="0"
                  borderRadius="15px"
                  bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
                ></Box>
              </Box>
              <Flex direction="column">
                <Text fontSize="md" color="gray.500" fontWeight="600" mb="10px">
                  Project #2
                </Text>
                <Text
                  fontSize="xl"
                  color={textColor}
                  fontWeight="bold"
                  mb="10px"
                >
                  Scandinavian
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400" mb="20px">
                  Music is something that every person has his or her own
                  specific opinion about.
                </Text>
                <Flex justifyContent="space-between">
                  <Button
                    variant="outline"
                    colorScheme="teal"
                    minW="110px"
                    h="36px"
                    fontSize="xs"
                    px="1.5rem"
                  >
                    VIEW PROJECT
                  </Button>
                  <AvatarGroup size="xs">
                    <Avatar name="Ryan Florence" src={avatar6} />
                    <Avatar name="Segun Adebayo" src={avatar2} />
                    <Avatar name="Kent Dodds" src={avatar3} />
                    <Avatar name="Prosper Otemuyiwa" src={avatar4} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction="column">
              <Box mb="20px" position="relative" borderRadius="15px">
                <Image src={ImageArchitect3} borderRadius="15px" />
                <Box
                  w="100%"
                  h="100%"
                  position="absolute"
                  top="0"
                  borderRadius="15px"
                  bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
                ></Box>
              </Box>
              <Flex direction="column">
                <Text fontSize="md" color="gray.500" fontWeight="600" mb="10px">
                  Project #3
                </Text>
                <Text
                  fontSize="xl"
                  color={textColor}
                  fontWeight="bold"
                  mb="10px"
                >
                  Minimalist
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400" mb="20px">
                  Different people have different taste, especially various
                  types of music.
                </Text>
                <Flex justifyContent="space-between">
                  <Button
                    variant="outline"
                    colorScheme="teal"
                    minW="110px"
                    h="36px"
                    fontSize="xs"
                    px="1.5rem"
                  >
                    VIEW PROJECT
                  </Button>
                  <AvatarGroup size="xs">
                    <Avatar name="Ryan Florence" src={avatar6} />
                    <Avatar name="Segun Adebayo" src={avatar2} />
                    <Avatar name="Kent Dodds" src={avatar3} />
                    <Avatar name="Prosper Otemuyiwa" src={avatar4} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </Flex>
            <Button
              p="0px"
              bg="transparent"
              color="gray.500"
              border="1px solid lightgray"
              borderRadius="15px"
              minHeight={{ sm: "200px", md: "100%" }}
            >
              <Flex
                direction="column"
                justifyContent="center"
                align="center"
              >
                <Icon as={FaPlus} fontSize="lg" mb="12px" />
                <Text fontSize="lg" fontWeight="bold">
                  Create a New Project
                </Text>
              </Flex>
            </Button>
          </Grid>
        </CardBody>
      </Card> */}
    </Flex>
  );
}

export default Profile;
