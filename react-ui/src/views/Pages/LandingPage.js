import React from "react";
import {
  Avatar,
  Flex,
  HStack,
  Heading,
  Button,
  Box,
  Text,
  ChakraProvider,
  Grid,
  Link,
  Image,
  Table,
  Tbody,
  Stack,
  VStack,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,

} from "@chakra-ui/react";
// import AuthNavbar from "../../components/Navbars/AuthNavbar";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { TypeAnimation } from "react-type-animation";

const LandingPage = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const nameColor = useColorModeValue("gray.500", "white");
  const MentorsData = [
    {
      first_name: "Аружан",
      last_name: "Нуртаева",
      photo_url: "https://res.cloudinary.com/dbkckoa6q/image/upload/v1679915188/aruzhan_fooatj.jpg",
      country: "США",
      university: "NYU",
      degree: "Медицина",
      biography: "Получила более $150к/год грантов при поступлении в университеты США. Выпускница NIS IB. Люблю спорт, музыку, артс, мобилографию. Считаю нужно уметь жить по полной. Важно сохранять баланс между учебой и хобби/отдыхом, при этом достигая своего максимума."
    },
    {
      first_name: "Жания",
      last_name: "Кайып",
      photo_url: "https://res.cloudinary.com/dbkckoa6q/image/upload/v1679915216/photo5_va6rep.jpg",
      country: "Германия",
      university: "Hochschule Osnabrück",
      degree: "Media Design",
      biography: "Начиная с 2019 года преподаю немецкий и английский, а так же провожу консультации и полное сопровождение по поступлению в Германию. Работаю в образовательных центрах, а так же индивидуально."
    },
    {
      first_name: "Шадияр",
      last_name: "Бахыттас",
      photo_url: "https://res.cloudinary.com/dbkckoa6q/image/upload/v1679915218/%D1%84%D0%BE%D1%82%D0%BE_giw8nt.jpg",
      country: "Турция",
      university: "Istanbul Medipol University",
      degree: "Business Administration",
      biography: "Выпускник НИША IB, поступил в более 10 университетов Турции на факультеты бизнеса и экономики. Провожу консультации и полное сопровождение по поступлению в Турецкие ВУЗы."
    },
  ];

  return (
    <>
      {/* Hero section with image and title on the right side */}
      <Flex
        w={"full"}
        h={"85vh"}
        backgroundImage={
          "url(https://acaric.jp/articles/wp-content/uploads/2021/02/pexels-pixabay-267885-scaled-e1661488971643.jpg)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"xl"} align={"flex-start"} spacing={6}>
            <Heading
              color={"white"}
              lineHeight={1.1}
              fontWeight={600}
              align={"left"}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              <TypeAnimation
                sequence={[
                  "Менторство",
                  "Prostudy",
                ]}
                speed={250}
                delay={500}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "2em", display: "inline-block" }}
              />
            </Heading>
            {/* h2 element */}
            <Text fontSize={"xl"} color={"gray.200"}>
              Найдите подходящего ментора и начните обучение
            </Text>
            {/* h3 element */}

            <Stack 
                direction={{ base: "column", sm: "row" }}
                spacing={{ base: 2, sm: 4 }}
                align={"start"}
            >
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                
                onClick={() => {
                  window.location.href = "/auth/signup";
                }}
                _hover={{ bg: "blue.500" }}
              >
                Зарегистрироваться
              </Button>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                
                onClick={() => {
                  window.location.href = "/auth/login";
                }}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                Войти
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      {/* Section with cards */}
      <Flex direction="column" pt={{ base: "120px", md: "75px" }}
          background="white"
      >
        <Heading
          as="h2"
          size="xl"
          color="gray.700"
          textAlign="center"
          mb="20px"
        >
          Найдите подходящего ментора
        </Heading>
      </Flex>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
          px={{ base: "20px", md: "0" }}
          background="white"
        >
        <CardBody>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 3fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
            
          >
            {MentorsData.map((MentorsData) => (
              <Box p="24px" bg={bgColor} my="22px" borderRadius="12px">
              <Flex
                align="center"
                mb={{ sm: "10px", md: "0px" }}
                direction={{ sm: "column", md: "row" }}
                w={{ sm: "100%" }}
                textAlign={{ sm: "center", md: "start" }}
              >
                <Avatar
                  me={{ md: "22px" }}
                  src={MentorsData.photo_url}
                  w="100px"
                  h="100px"
                  borderRadius="15px"
                />
                <Grid
                  templateColumns={{ sm: "1fr", md: "1fr" }}
                  gap={{ sm: "0px", md: "20px" }}
                  w={{ sm: "100%", md: "100%" }}
                  ms={{ sm: "0px", md: "20px" }}
                  mt={{ sm: "20px", md: "0px" }}
                >
                <Flex direction={{ sm: "column", md: "column" }} maxW="100%">
                  <Text
                    fontSize={{ sm: "lg", lg: "xl" }}
                    color={textColor}
                    fontWeight="bold"
                    ms={{ sm: "8px", md: "0px" }}
                  >
                    {MentorsData.first_name} {MentorsData.last_name}
                  </Text>
                  <Text
                    fontSize={{ sm: "sm", md: "md" }}
                    color={nameColor}
                    fontWeight="semibold"
                    ms={{ sm: "8px", md: "0px" }}
                  >
                     {MentorsData.university} ({MentorsData.country})
                  </Text>
                  <Text
                    fontSize={{ sm: "sm", md: "md" }}
                    color={nameColor}
                    fontWeight="semibold"
                    ms={{ sm: "8px", md: "0px" }}
                  >
                    {MentorsData.degree}
                  </Text>
                </Flex>
                </Grid>
              </Flex>
              {/* Biography section at the right side of the row */}
              <Flex 
                direction="row"
                align="center"
                w={{ sm: "100%" }}
                textAlign={{ sm: "center", md: "start" }}
              >
                <Box
                  w="100%"
                  h="100%"
                  borderRadius="0px"
                  overflow="hidden"
                  mt="15px"
                  mb="20px"
                >
                <Text
                  fontSize={{ sm: "sm", md: "md" }}
                  color={textColor}
                  fontWeight="semibold"
                  ms={{ sm: "8px", md: "0px" }}
                >
                  {MentorsData.biography}
                </Text>
                </Box>
              </Flex>
              </Box>
            ))}
          </Grid>
        </CardBody>
      </Flex>

  </>
  );
};

export default LandingPage;
