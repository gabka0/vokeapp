// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import React, { useState } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

import AuthApi from "../../api/auth";
import { useHistory } from "react-router-dom";

function SignUp() {
  const history = useHistory();
  const [isMentor, setIsMentor] = useState(false);

  const handleSwitchChange = (event) => {
    setIsMentor(event.target.checked);
  };

  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Зарегистрироваться");
  const [error, setError] = useState(undefined);

  const register = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (name === "") {
      return setError("Вам нужно ввести свое имя.");
    }
    if (email === "") {
      return setError("Вам нужно ввести свой email.");
    }
    if (password === "") {
      return setError("Вам нужно ввести свой пароль.");
    }
    try {
      setButtonText("Регистрируемся...");
      let data = {
        username: name,
        phone_number: phone,
        email,
        password,
        role: "user",
      };

      if (isMentor) {
        data.role = 'mentor_not_approved'
      }
      let response = await AuthApi.Register(data);
      if (response.data && response.data.success === false) {
        setButtonText("Зарегистрироваться");
        return setError(response.data.msg);
      }
      console.log(response);
      return history.push("/auth/signin");
    } catch (err) {
      console.log(err);
      setButtonText("Зарегистрироваться");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("Что-то пошло не так. Попробуйте еще раз.");
    }
  };

  return (
    <Flex
      direction="column"
      alignSelf="center"
      justifySelf="center"
      overflow="hidden"
    >
      <Box
        position="absolute"
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left="0"
        right="0"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex="-1"
        top="0"
        bgImage={BgSignUp}
        bgSize="cover"
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}
      ></Box>
      <Flex
        direction="column"
        textAlign="center"
        justifyContent="center"
        align="center"
        mt="6.5rem"
        mb="30px"
      >
        <Text fontSize="4xl" color="white" fontWeight="bold">
          Welcome!
        </Text>
        <Text
          fontSize="md"
          color="white"
          fontWeight="normal"
          mt="10px"
          mb="26px"
          w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}
        >
          Добро пожаловать на ProStudy
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
      <Flex
          direction="column"
          w="500px"
          background="transparent"
          borderRadius="15px"
          p="30px"
          mx={{ base: "40px" }}
          bg={bgColor}
          boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        >
          <Link href="/">
          <Text
            fontSize="2xl"
            color={titleColor}
            fontWeight="bold"
            textAlign="center"
            mb="22px"
          >
            ProStudy
          </Text>
          </Link>
          <Text
            fontSize="lg"
            color="gray.400"
            fontWeight="bold"
            textAlign="center"
            mb="22px"
          >
            Пожалуйста, заполните форму для регистрации, чтобы продолжить, или
            {" "}
            <Link color={titleColor} href="/auth/signin">
              войдите
            </Link>
            {" "}в свой аккаунт
          </Text>
          <FormControl>
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              ФИО
            </FormLabel>
            <Input
              fontSize="sm"
              ms="4px"
              borderRadius="15px"
              type="text"
              placeholder="Имя и фамилия"
              mb="24px"
              size="lg"
              onChange={(event) => {
                setName(event.target.value);
                setError(undefined);
              }}
            />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
            Номер телефона (привязанный к WhatsApp/Telegram)
            </FormLabel>
            <Input
              fontSize="sm"
              ms="4px"
              borderRadius="15px"
              type="text"
              placeholder="Ваш номер телефона"
              mb="24px"
              size="lg"
              onChange={(event) => {
                setPhone(event.target.value);
                setError(undefined);
              }}
            />
          
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Почта
            </FormLabel>
            <Input
              fontSize="sm"
              ms="4px"
              borderRadius="15px"
              type="email"
              placeholder="Ваша почта"
              mb="24px"
              size="lg"
              onChange={(event) => {
                setEmail(event.target.value);
                setError(undefined);
              }}
            />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Пароль
            </FormLabel>
            <Input
              fontSize="sm"
              ms="4px"
              borderRadius="15px"
              type="password"
              placeholder="Ваш пароль"
              mb="24px"
              size="lg"
              onChange={(event) => {
                setPassword(event.target.value);
                setError(undefined);
              }}
            />
            <FormControl display="flex" alignItems="center" mb="24px">
              <Switch id="mentor" colorScheme="teal" me="10px" onChange={handleSwitchChange} />
              <FormLabel htmlFor="mentor" mb="0" fontWeight="normal">
                Я ментор
              </FormLabel>
            </FormControl>
            <h4
              style={{
                fontSize: ".9em",
                color: "red",
                textAlign: "center",
                fontWeight: 400,
                transition: ".2s all",
                marginBottom: '1em'
              }}
            >
              {error}
            </h4>
            <Button
              type="submit"
              bg="teal.300"
              fontSize="15px"
              color="white"
              fontWeight="bold"
              w="100%"
              h="45"
              mb="24px"
              _hover={{
                bg: "teal.200",
              }}
              _active={{
                bg: "teal.400",
              }}
              onClick={register}
            >
              {buttonText}
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
