import React from "react";
import Login from "../components/Authentication/Login";
import {
  Box,
  Container,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import Signup from "../components/Authentication/Signup";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        width="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="2px"
        textAlign="center"
        fontSize="16px"
        className=".code"
      >
        <Text fontSize="3xl" fontFamily="Work-sans" color="black">
          Chat Up!
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded">
          <TabList mb="1rem">
            <Tab width="50%" _selected={{ color: "white", bg: "blue.500" }}>
              Login
            </Tab>
            <Tab width="50%" _selected={{ color: "white", bg: "blue.400" }}>
              Sign up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
