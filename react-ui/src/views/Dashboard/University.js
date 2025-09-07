import React, { useState, useEffect } from "react";
// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Text,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
// Assets
import ProfileBgImage from "assets/img/yale.jpg";
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPenFancy,
  FaPlus,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import { useAuth} from "../../auth-context/auth.context"
import axios from "../../api/index"

function University() {
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




  return (
    <Flex direction="column">
      <Box
        mb={{ sm: "20px", md: "75px", xl: "70px" }}
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
              <Flex direction="row" maxWidth="100%" my={{ sm: "14px" }}>
                <Text
                  fontSize={{ sm: "sm", md: "xl" }}
                  color={textColor}
                  fontWeight="semibold"
                >
                  Yale University
                </Text>
                <Text
                  fontSize={{ sm: "sm", md: "sm" }}
                  color={emailColor}
                  fontWeight="semibold"
                  ml="20px"
                >
                  Financial Aid:
                </Text>
                <Text
                  fontSize={{ sm: "sm", md: "sm" }}
                  color={textColor}
                  fontWeight="semibold"
                  ml="10px"
                >
                  Yes
                </Text>
                <Text
                  fontSize={{ sm: "sm", md: "sm" }}
                  color={emailColor}
                  fontWeight="semibold"
                  ml="20px"
                >
                  Acceptance Rate:
                </Text>
                <Text
                  fontSize={{ sm: "sm", md: "sm" }}
                  color={textColor}
                  fontWeight="semibold"
                  ml="10px"
                >
                  10.5%
                </Text>
                <Text
                  fontSize={{ sm: "sm", md: "sm" }}
                  color={emailColor}
                  fontWeight="semibold"
                  ml="20px"
                >
                  Nearest Deadline
                </Text>
                <Text
                fontsize={{ sm: "sm", md: "sm" }}
                color={textColor}
                fontWeight="semibold"
                ml="10px"
              >
                1 November
              </Text>
              <Text
              fontsize={{ sm: "sm", md: "sm" }}
              color={emailColor}
              fontWeight="semibold"
              ml="20px"
              >
                Location
              </Text>
              <Text
              fontsize={{ sm: "sm", md: "sm" }}
              color={textColor}
              fontWeight="semibold"
              ml="10px"
              >
                USA, New Haven, Connecticut
              </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap="22px">
        <Card maxH="100%" p="16px" w="300%">
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              About
            </Text>
          </CardHeader>
          <CardBody px="5px">
            <Flex direction="column">
              <Flex align="center" mb="18px">
                <Text fontSize="md" color="gray.500" fontWeight="400">
                Yale University is a private Ivy League research university located in New Haven, Connecticut, United States. 
                It was founded in 1701 and is one of the oldest and most prestigious universities in the world. 
                The university is organized into 14 schools, including the undergraduate college, Graduate School of Arts and Sciences, 
                School of Architecture, School of Art, School of Divinity, School of Drama, School of Engineering and Applied Science, 
                School of Forestry & Environmental Studies, Law School, School of Management, School of Medicine, School of Music, 
                School of Nursing, and School of Public Health.
                Yale has a total enrollment of approximately 13,400 students, including about 5,500 undergraduates and 
                7,900 graduate and professional students. The university has a diverse student body, with students from 
                all 50 states and over 120 countries.
                </Text>
              </Flex>
            </Flex>
          </CardBody>
        </Card>

      </Grid>
       <Card p="16px" my="24px">
        <CardHeader p="12px 5px" mb="12px">
          <Flex direction="column">
            <Text fontSize="lg" color={emailColor} fontWeight="bold">
            Mentors who can help you
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
              <Box mb="20px" position="relative" borderRadius="15px" w="100px">
                <Image borderRadius="15px" src="https://res.cloudinary.com/dbkckoa6q/image/upload/v1679915218/%D1%84%D0%BE%D1%82%D0%BE_giw8nt.jpg" />
              </Box>
              <Flex direction="column">
                <Text
                  fontSize="xl"
                  color={textColor}
                  fontWeight="bold"
                  mb="10px"
                >
                  Shadiyar Bakhyttas
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400" mb="20px">
                A graduate of the IB NIS program and currently studying at Istanbul Medipol University in 
                the Business Administration faculty. He was admitted to more than 10 universities in Turkey 
                for business and economics faculties. He provides consultations and full support and can help 
                you/your child to get a scholarship to study in Turkey.
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
                  Apply
                  </Button>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction="column">
              <Box mb="20px" position="relative" borderRadius="15px" w="100px">
                <Image borderRadius="15px" src="https://res.cloudinary.com/dbkckoa6q/image/upload/v1679915216/photo5_va6rep.jpg" />
              </Box>
              <Flex direction="column">
                <Text
                  fontSize="xl"
                  color={textColor}
                  fontWeight="bold"
                  mb="10px"
                >
                  Zhaniya Kaiyp
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400" mb="20px">
                A graduate of KTL Astana and Studienkolleg Halle, Germany. 
                She is currently studying at the University of Applied Sciences Osnabrück in 
                the Media Design faculty. Since 2019, she has been teaching German and English, 
                as well as providing consultations and full support for admission to German universities. 
                She can help you/your child to get admitted to a university in Germany and also teach German language.
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
                    Apply
                  </Button>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction="column">
              <Box mb="20px" position="relative" borderRadius="15px" w="100px">
                <Image borderRadius="15px" src="https://res.cloudinary.com/dbkckoa6q/image/upload/v1679915188/aruzhan_fooatj.jpg" />
              </Box>
              <Flex direction="column">
                <Text
                  fontSize="xl"
                  color={textColor}
                  fontWeight="bold"
                  mb="10px"
                >
                  Aruzhan Nurtayeva
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400" mb="20px">
                A graduate of IB NIS, she is currently studying at NYU in the Medicine faculty. 
                She received over $150k/year in scholarships when applying to universities in the United States.
                 She provides consultations, full support and can share her experience in obtaining scholarships.
                </Text>
                <Flex justifyContent="flex-end">
                  <Button
                    variant="outline"
                    colorScheme="teal"
                    minW="110px"
                    h="36px"
                    fontSize="xs"
                    px="1.5rem"
                  >
                    Apply
                  </Button>
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
                <Icon as={FaSearch} fontSize="lg" mb="12px" />
                <Text fontSize="lg" fontWeight="bold">
                  Find more
                </Text>
              </Flex>
            </Button>
          </Grid>
        </CardBody>
      </Card> 
    </Flex>
  );
}

export default University;
