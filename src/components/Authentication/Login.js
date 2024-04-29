import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormErrorMessage,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const toast = useToast();
  const history = useHistory();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  function formChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function getCredentialsHandler() {
    setForm({
      email: "test@gmail.com",
      password: "123456",
    });
  }
  async function loginHandler() {
    if (!form.email || !form.password) {
      toast({
        title: `Please fill all the fields`,
        status: "error",
        isClosable: true,
        position: "top",
      });
      return;
    }
    const { email, password } = form;

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "/api/user/login",
        {
          email,
          password,
        },
        config
      );
      toast({
        title: `Login successfully`,
        status: "success",
        isClosable: true,
        position: "top",
      });
      console.log("login hua");
      localStorage.setItem("userInfo", JSON.stringify(data));
      history.push("/chats");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <VStack spacing="3px" color="black">
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your Email Address"
          name="email"
          value={form.email}
          onChange={formChange}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={formChange}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        marginTop="30px"
        onClick={loginHandler}
      >
        Login
      </Button>
      <Button
        colorScheme="red"
        width="100%"
        marginTop="8px"
        onClick={getCredentialsHandler}
      >
        Get Login Credentials
      </Button>
    </VStack>
  );
};

export default Login;
