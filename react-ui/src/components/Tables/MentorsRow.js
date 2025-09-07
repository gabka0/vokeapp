import {
  Box,
  Avatar,
  AvatarGroup,
  Image,
  Button,
  Flex,
  Icon,
  Textarea,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import axios from "../../api/index";
import { useAuth } from "auth-context/auth.context";


function BillingRow(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const nameColor = useColorModeValue("gray.500", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const { reciever, first_name, last_name, country ,university, degree, level_of_education, consultation_cost, photo_url, biography } = props;
  const emailColor = useColorModeValue("gray.400", "gray.300");
  let { user } = useAuth();
  const { setUser } = useAuth();
  const [message, setMessage] = useState("Здравствуйте, ");
  const [application, setApplication] = useState({
    sender: user._id,
    reciever: props.reciever,
    message: "",
  });

  const sendApplication = async (event) => {
    try {
      event.preventDefault();
      console.log(application);
      const response = await axios.post(
        "http://localhost:5000/api/application/create", application,
      { headers: { Authorization: `${user.token}` } }
      );
      setApplication({
        sender: user._id,
        reciever: props.reciever,
        message: "",
      });
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
                src={photo_url}
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
                  {first_name} {last_name}
                </Text>
                <Text
                  fontSize={{ sm: "sm", md: "md" }}
                  color={nameColor}
                  fontWeight="semibold"
                  ms={{ sm: "8px", md: "0px" }}
                >
                   {university} ({country})
                </Text>
                <Text
                  fontSize={{ sm: "sm", md: "md" }}
                  color={nameColor}
                  fontWeight="semibold"
                  ms={{ sm: "8px", md: "0px" }}
                >
                  {degree} ({level_of_education})
                </Text>
                <Text
                  fontSize={{ sm: "sm", md: "md" }}
                  color={nameColor}
                  fontWeight="semibold"
                  ms={{ sm: "8px", md: "0px" }}
                >
                   {consultation_cost} ₸
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
                {biography}
              </Text>
              </Box>
            </Flex>

            {/*Contact a Mentor button at the right side of the row*/}
            {user.role !== "mentor_approved" && (
            <Flex
              align="center"
              justify="flex-end"
              direction={{ sm: "column", md: "row" }}
              w={{ sm: "100%" }}
              textAlign={{ sm: "center", md: "start" }}
              mt={{ sm: "0px", md: "10px" }}
            >
              <Button
                as="a"
                onClick={onOpen}
                target="_blank"
                colorScheme="green"
                variant="solid"
                size="md"
                w={{ sm: "100%", md: "auto" }}
              >                
                <Icon as={FiSend} w="18px" h="18px" me="10px" />
                Отправить заявку
              </Button>
            </Flex>
            )}
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Напишите сообщение ментору</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Textarea
                isInvalid placeholder="Введите сообщение"
                value={message}
                maxlength="200"
                onChange={(e) => {
                  setMessage(e.target.value);
                  setApplication({ ...application, message: e.target.value });
                }}
              />
            </ModalBody>
            <ModalFooter>
              <Button mr={3} colorScheme="green" onClick={sendApplication}>
                Отправить
              </Button>
              <Button variant='ghost' onClick={onClose}>Закрыть</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </Box>
  );
}

export default BillingRow;
