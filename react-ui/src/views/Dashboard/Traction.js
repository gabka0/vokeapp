import TimelineRow from "components/Tables/TimelineRow";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import { Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { timelineData } from "variables/general";

function Traction() {
    const textColor = useColorModeValue("gray.700", "white");

    return (
        <Card maxH="100%">
          <CardHeader p="22px 0px 35px 14px">
            <Flex direction="column">
              <Text
                fontSize="lg"
                color={textColor}
                fontWeight="bold"
                pb=".5rem"
              >
                Admission Roadmap for Yale University
              </Text>
            </Flex>
          </CardHeader>
          <CardBody ps="20px" pe="0px" mb="31px" position="relative">
            <Flex direction="column">
              {timelineData.map((row, index, arr) => {
                return (
                  <TimelineRow
                    logo={row.logo}
                    date={row.date}
                    title={row.title}
                    color={row.color}
                    index={index}
                    arrLength={arr.length}
                    text={row.text}
                  />
                );
              })}
            </Flex>
          </CardBody>
        </Card> 
    )
}

export default Traction;