import { QuestionIcon } from "@chakra-ui/icons";
import { Button, Flex, Link, Text, Icon } from "@chakra-ui/react";
import SidebarHelpImage from "assets/img/SidebarHelpImage.png";
import IconBox from "components/Icons/IconBox";
import React from "react";
import { FaWhatsapp, FaInstagram, FaTelegram } from "react-icons/fa";

export function SidebarHelp(props) {
  // Pass the computed styles into the `__css` prop
  const { children, ...rest } = props;
  return (
    <Flex
      borderRadius="15px"
      flexDirection="column"
      bgImage={SidebarHelpImage}
      justifyContent="flex-start"
      alignItems="start"
      boxSize="100%"
      p="16px"
      h="200px"
      w="100%"
    >
      <IconBox width="35px" h="35px" bg="white" mb="auto">
        <QuestionIcon color="teal.300" h="18px" w="18px" />
      </IconBox>
      <Text fontSize="sm" color="white" fontWeight="bold">
        Need a help?
      </Text>
      <Text fontSize="xs" color="white" mb="10px">
        Contact us
      </Text>      
      <Button
        as={Link}
        href="https://wa.me/905319692074"
        target="_blank"
        colorScheme="teal"
        onHover={{ bg: "teal.500" }}
        variant="solid"
        size="sm"
        mt="10px"
        w="100%"
      >
        <Icon as={FaWhatsapp} w="18px" h="18px" me="10px" />
        WhatsApp
      </Button>
      <Button
        as={Link}
        href="https://www.instagram.com/prostd.kz/"
        target="_blank"
        colorScheme="red"
        onHover={{ bg: "red.500" }}
        variant="solid"
        size="sm"
        mt="10px"
        w="100%"
      >
        <Icon as={FaInstagram} w="18px" h="18px" me="10px" />
        Instagram
      </Button>
      <Button
        as={Link}
        href="https://t.me/proostd"
        target="_blank"
        colorScheme="blue"
        onHover={{ bg: "blue.500" }}
        variant="solid"
        size="sm"
        mt="10px"
        w="100%"
      >
        <Icon as={FaTelegram} w="18px" h="18px" me="10px" />
        Telegram
      </Button>
    </Flex>
  );
}
