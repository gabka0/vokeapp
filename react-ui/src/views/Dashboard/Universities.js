import React, { useState, useEffect, useCallback } from "react";
// Chakra imports
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  Button,
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
// import { tablesProjectData, billingData } from "variables/general";
import BillingRow from "components/Tables/MentorsRow";
import MentorsApi from "api/requests";
import axios from "../../api/index"
import DashboardTableRow from "components/Tables/DashboardTableRow";
import { dashboardTableData, universityData } from "variables/general";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";


export const debounce = (func, waitFor) => {
  let timeout = null;

  const debounced = (...args) => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced;
};

function Universities() {
  const textColor = useColorModeValue("gray.700", "white");

  const [costIntervalIsOpen, setCostIntervalIsOpen] = useState(false);
  const [countryIsOpen, setCountryIsOpen] = useState(false);
  const [levelIsOpen, setLevelIsOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [ costInterval, setCostInterval ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ level, setLevel ] = useState('');
  const [degree, setDegree] = useState('');

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold" color={textColor}>
          Подбор университетов
        </Text>
      </Box>
      <Card overflowX={{ sm: "scroll" }}>
          <Button onClick={() => setShowFilters(!showFilters)}>
            Искать по фильтрам
          </Button>
            <Box display="flex" flexWrap="wrap">
            <Box mt={4}>
                <FormControl>
                  <Input 
                  placeholder="Name"
                  onChange={(e) => setDegree(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box mt={4}>
                <FormControl>
                  <Select
                    key="consultation_cost"
                    name="consultation_cost"
                    onChange={(e) => setCostInterval(e.target.value)}
                    isOpen={costIntervalIsOpen}
                    onOpen={() => setCostIntervalIsOpen(!costIntervalIsOpen)}
                    onClose={() => setCostIntervalIsOpen(false)}
                    placeholder="USA"
                  >
                    <option value="100 000 - 250 000">100 000 - 250 000 ₸</option>
                    <option value="300 000 - 450 000">300 000 - 450 000 ₸</option>
                    <option value="500 000 - 1 000 000">500 000 - 1 000 000 ₸</option>
                  </Select>
                </FormControl>
              </Box>
              <Box mt={4}>
                <FormControl>
                  <Select
                    isOpen={levelIsOpen}
                    name="level_of_education"
                    onChange={(e) => setLevel(e.target.value)}
                    onOpen={() => setLevelIsOpen(!levelIsOpen)}
                    onClose={() => setLevelIsOpen(false)}
                    placeholder="Faculty"
                  >
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            <Card p="16px" overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="12px 0px 28px 0px">
            <Flex direction="column">
              <Flex align="center">
                <Icon
                  as={IoCheckmarkDoneCircleSharp}
                  color="teal.300"
                  w={4}
                  h={4}
                  pe="3px"
                />
                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  <Text fontWeight="bold" as="span">
                    Found
                  </Text>{" "}
                  10 universities
                </Text>
              </Flex>
            </Flex>
          </CardHeader>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" ps="0px">
                <Th ps="0px" color="gray.400">
                  Save
                </Th>
                <Th ps="0px" color="gray.400">
                  Universities
                </Th>
                <Th color="gray.400">Deadline</Th>
                <Th color="gray.400">Country</Th>
                <Th color="gray.400">Chance</Th>
                <Th color="gray.400">Overview</Th>
                
              </Tr>
            </Thead>
            <Tbody>
              {universityData.map((row) => {
                return (
                  <DashboardTableRow
                    name={row.name}
                    logo={row.logo}
                    country={row.country}
                    location={row.location}
                    chance={row.chance}
                  />
                );
              })}
            </Tbody>
          </Table>
        </Card>

      </Card>
    </Flex>
  );
}

export default Universities;