import {
  Avatar,
  AvatarGroup,
  Flex,
  Icon,
  Progress,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

function DashboardTableRow(props) {
  const { logo, name, location, country, chance} = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Tr>
      <Td>
      <Checkbox></Checkbox>
      </Td>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {name}
          </Text>
        </Flex>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {location}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {country}
        </Text>
      </Td>
      <Td>
        <Flex direction="column">
          <Text
            fontSize="md"
            color="teal.300"
            fontWeight="bold"
            pb=".2rem"
          >{`${chance}%`}</Text>
          <Progress
            colorScheme={chance === 100 ? "teal" : "cyan"}
            size="xs"
            value={chance}
            borderRadius="15px"
          />
        </Flex>
      </Td>
      {/* About button */}
      <Td>
        <Flex align="center" justify="center" py=".8rem">
          <Icon
            as={IoChevronForwardCircleSharp}
            color="teal.300"
            w={6}
            h={6}
            pe="3px"
          />
        </Flex>
      </Td>

    </Tr>
  );
}

export default DashboardTableRow;
