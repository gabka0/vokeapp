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

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");

  const [costIntervalIsOpen, setCostIntervalIsOpen] = useState(false);
  const [countryIsOpen, setCountryIsOpen] = useState(false);
  const [levelIsOpen, setLevelIsOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [ costInterval, setCostInterval ] = useState('');
  const [ country, setCountry ] = useState('');
  const [ level, setLevel ] = useState('');
  const [degree, setDegree] = useState('');

  const [mentors, setMentors] = useState([]);
  

  const handleFilter = (data, key, value) => {
    return data.filter(item => item[key] === value);
  };


  const fetchMentors = async () => {
    const response = await axios.get('/mentors-list');
    setMentors(response.data);
  };

  useEffect(() => {
    fetchMentors();
  }, []);

  const renderData = (data) => {
    return data.map((item, index) => (
      <BillingRow
        key={index}
        first_name={item.first_name}
        last_name={item.last_name}
        photo_url={item.photo_url}
        country={item.country}
        university={item.university}
        degree={item.degree}
        level_of_education={item.level_of_education}
        consultation_cost={item.consultation_cost}
        biography={item.biography}
        reciever={item.user}
        />
    ));
  };

  const renderMentors = () => {
    let data = mentors;
    if (costInterval) {
      data = handleFilter(data, 'consultation_cost', costInterval);
    }
    if (country) {
      data = handleFilter(data, 'country', country);
    }
    if (level) {
      data = handleFilter(data, 'level_of_education', level);
    }
    if (degree) {
      data = handleFilter(data, 'degree', degree);
    }
    return renderData(data);
  };

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold" color={textColor}>
          Здесь вы можете найти подходящего ментора
        </Text>
      </Box>
      <Card overflowX={{ sm: "scroll" }}>
          <Button onClick={() => setShowFilters(!showFilters)}>
            Искать по фильтрам
          </Button>
          {showFilters && (
            <Box display="flex" flexWrap="wrap">
              <Box mt={4}>
                <FormControl>
                  <Select
                    key="consultation_cost"
                    name="consultation_cost"
                    onChange={(e) => setCostInterval(e.target.value)}
                    isOpen={costIntervalIsOpen}
                    onOpen={() => setCostIntervalIsOpen(!costIntervalIsOpen)}
                    onClose={() => setCostIntervalIsOpen(false)}
                    placeholder="Цена"
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
                    placeholder="Уровень образования"
                  >
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
                  </Select>
                </FormControl>
              </Box>
              <Box mt={4}>
                <FormControl>
                  <Select
                    key="country"
                    name="country"
                    onChange={(e) => setCountry(e.target.value)}
                    isOpen={countryIsOpen}
                    onOpen={() => setCountryIsOpen(!countryIsOpen)}
                    onClose={() => setCountryIsOpen(false)}
                    placeholder="Страна"
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
                </FormControl>
              </Box>
              <Box mt={4}>
                <FormControl>
                  <Input 
                  placeholder="Введите специльность"
                  onChange={(e) => setDegree(e.target.value)}
                  />
                </FormControl>
              </Box>
            </Box>
          )}
        {renderMentors()}

      </Card>
    </Flex>
  );
}

export default Tables;
