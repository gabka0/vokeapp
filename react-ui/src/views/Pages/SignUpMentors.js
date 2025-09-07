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
  Select,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import React, { useState, createRef } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { useAuth } from "auth-context/auth.context";
import AuthApi from "../../api/auth";
import MentorsApi from "../../api/requests";
import axios from "../../api/index";
import { useHistory } from "react-router-dom";
import Axios from "axios";

function SignUpMentors() {
  const history = useHistory();
  let { user } = useAuth();
  const { setUser } = useAuth();
  const [countryIsOpen, setCountryIsOpen] = useState(false);
  const [levelIsOpen, setLevelIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mentorData, setMentorData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    biography: "",
    user: user,
    consultation_cost: "",
    university: "",
    level_of_education: "",
    degree: "",
    graduation_year: "",
    photo_url: "",
    proof_of_degree_url: "",
    country: "",
  });
    

  const [uploadFile, setUploadFile] = useState("");
  const [uploadFile2, setUploadFile2] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Продолжить");
  const [error, setError] = useState(undefined);

  const [photoUrl, setPhotoUrl] = useState("");
  const [proofOfDegreeUrl, setProofOfDegreeUrl] = useState("");

  const handlePhotoChange = (event) => {
    try {
      setUploadFile(event.currentTarget.files[0]);
      const formData = new FormData();
      formData.append("file", event.target.files[0]);
      formData.append("upload_preset", "ijcz5rzp");
      Axios.post(
        "https://api.cloudinary.com/v1_1/dbkckoa6q/image/upload",
        formData
      ).then((response) => {
        setMentorData({
          ...mentorData,
          photo_url: response.data.secure_url,
        });
        console.log(response.data.secure_url)
      }
      );
    }
    catch (error) {
      console.log(error);
    }
  };

  const handleProofOfDegreeChange = (event) => {
    try {
      setUploadFile2(event.currentTarget.files[0]);
      const formData = new FormData();
      formData.append("file", event.target.files[0]);
      formData.append("upload_preset", "ijcz5rzp");
      Axios.post(
        "https://api.cloudinary.com/v1_1/dbkckoa6q/image/upload",
        formData
      ).then((response) => {
        setMentorData({
          ...mentorData,
          proof_of_degree_url: response.data.secure_url,
        });
      }
      );
    }
    catch (error) {
      console.log(error);
    }
  };


  const registerMentor = async (event) => {
    try {
      let response = await axios.post("http://localhost:5000/api/mentor/create", mentorData, {
        headers: { Authorization: user.token },
      });
      console.log(mentorData);
      if (response.status === 200) {
        setButtonText("Регистрируемся...");
         history.push("/dashboard/mentors");
      }
    } catch (error) {
      console.log(error);
      setButtonText("Продолжить");
      setError(error.response.data.message);
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
        w={{ md: "calc(100vw - 20px)" }}
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
          w="700px"
          background="transparent"
          borderRadius="15px"
          p="30px"
          mx={{ base: "40px" }}
          bg={bgColor}
          boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        >
          <Text
            fontSize="xl"
            color={textColor}
            fontWeight="bold"
            textAlign="center"
            mb="22px"
          >
            ProStudy
          </Text>
          <Text
            fontSize="lg"
            color="gray.400"
            fontWeight="bold"
            textAlign="center"
            mb="22px"
          >
            Пожалуйста, заполните форму для регистрации
          </Text>
            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Имя
              </FormLabel>
              <Input
                id="first_name"
                value={mentorData.first_name}
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                placeholder="Ваше имя"
                mb="24px"
                size="lg"ph
                onChange={(e) =>
                  setMentorData({ ...mentorData, first_name: e.target.value })
                }
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Фамилия
              </FormLabel>
              <Input
                input="last_name"
                value={mentorData.last_name}
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                placeholder="Ваша фамилия"
                mb="24px"
                size="lg"
                onChange={(e) =>
                  setMentorData({ ...mentorData, last_name: e.target.value })
                }
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Номер телефона (привязанный к WhatsApp/Telegram)
              </FormLabel>
              <Input
                value={mentorData.phone_number}
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                placeholder="Ваш номер телефона"
                mb="24px"
                size="lg"
              onChange={(e) => 
                  setMentorData({ ...mentorData, phone_number: e.target.value })
                }
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Загрузите ваше фото (соотношение 1:1)
              </FormLabel>
              <Input
                id="photo"
                value={mentorData.photo}
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="file"
                placeholder="Ваше фото"
                mb="24px"
                size="lg"
                onChange={handlePhotoChange}
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                О себе
              </FormLabel>
              <Textarea
                id="biography"
                value={mentorData.biography}
                fontSize="sm"
                maxlength="300"
                ms="4px"
                borderRadius="15px"
                type="text"
                placeholder="Данный текст будет отображаться в анкете"
                mb="24px"
                size="lg"
                onChange={(e) =>
                  setMentorData({ ...mentorData, biography: e.target.value })
                }
              />
                            {/* Интервал стоимости: 100 000 - 250 000 тг 300 - 
              450 000 тг 500 000 тг - 1 000 000 тг 1 000 000 тг - и больше  */}
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Стоимость сопровождения
              </FormLabel>
              <Select
                id="education_level"
                value={mentorData.consultation_cost}
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                placeholder="Выберите стоимость сопровождения"
                mb="24px"
                size="lg"
                onChange={(e) =>
                  setMentorData({
                    ...mentorData,
                    consultation_cost: e.target.value,
                  })
                }
              >
                <option value="100 000 - 250 000">100 000 - 250 000 ₸</option>
                <option value="300 000 - 450 000">300 000 - 450 000 ₸</option>
                <option value="500 000 - 1 000 000">500 000 - 1 000 000 ₸</option>
              </Select>                
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Выберите ваш уровень образования
              </FormLabel>
              <Select
                id="education_level"
                value={mentorData.level_of_education}
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                placeholder="Выберите ваш уровень образования"
                mb="24px"
                size="lg"
                onChange={(e) =>
                  setMentorData({
                    ...mentorData,
                    level_of_education: e.target.value,
                  })
                }
              >
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
              </Select>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Страна обучения
              </FormLabel>
              <Select
                    key="country"
                    name="country"
                    onChange={(e) => setMentorData({ ...mentorData, country: e.target.value })
                  }
                    isOpen={countryIsOpen}
                    onOpen={() => setCountryIsOpen(!countryIsOpen)}
                    onClose={() => setCountryIsOpen(false)}
                    placeholder="Выберите страну"
                  >
                    <option value="Австралия">Австралия</option>
                    <option value="Австрия">Австрия</option>
                    <option value="Англия">Англия</option>
                    <option value="Болгария">Болгария</option>
                    <option value="Венгрия">Венгрия</option>
                    <option value="Германия">Германия</option>
                    <option value="Гонконг">Гонконг</option>
                    <option value="Дания">Дания</option>
                    <option value="Испания">Испания</option>
                    <option value="Италия">Италия</option>
                    <option value="Казахстан">Казахстан</option>
                    <option value="Канада">Канада</option>
                    <option value="Катар">Катар</option>
                    <option value="Китай">Китай</option>
                    <option value="Нидерланды">Нидерланды</option>
                    <option value="ОАЭ">ОАЭ</option>
                    <option value="Польша">Польша</option>
                    <option value="Сингапур">Сингапур</option>
                    <option value="США">США</option>
                    <option value="Турция">Турция</option>
                    <option value="Финляндия">Финляндия</option>
                    <option value="Франция">Франция</option>
                    <option value="Чехия">Чехия</option>
                    <option value="Швейцария">Швейцария</option>
                    <option value="Южная Корея">Южная Корея</option>
                    <option value="Япония">Япония</option>
                  </Select>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Университет
              </FormLabel>
              <Input
                fontSize="sm"
                value={mentorData.university}
                ms="4px"
                borderRadius="15px"
                type="text"
                placeholder="Введите название университета"
                mb="24px"
                size="lg"
                onChange={(e) =>
                  setMentorData({ ...mentorData, university: e.target.value })
                }
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Специальность (на английском)
              </FormLabel>
              <Input
                id="degree"
                value={mentorData.degree}
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                placeholder="Введите название специальности"
                mb="24px"
                size="lg"
                onChange={(e) =>
                  setMentorData({ ...mentorData, degree: e.target.value })
                }
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Год окончания
              </FormLabel>
              <Input
                id="graduation_year"
                value={mentorData.graduation_year}
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                placeholder="Введите год окончания"
                mb="24px"
                size="lg"
                onChange={(e) =>
                  setMentorData({
                    ...mentorData,
                    graduation_year: e.target.value,
                  })
                }
              />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Загрузите подтверждение об образовании
              </FormLabel>
              <Input
                id="proof_of_degree"
                value={mentorData.proof_of_degree}
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="file"
                placeholder="Загрузите подтверждение об образовании"
                mb="24px"
                size="lg"
                onChange={handleProofOfDegreeChange}
              />
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
                <Button
                type="submit"
                bg="teal.300"
                fontSize="10px"
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
                onClick={registerMentor}
              >
                {buttonText}
              </Button>
              {error}
              </h4>
            </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUpMentors;
