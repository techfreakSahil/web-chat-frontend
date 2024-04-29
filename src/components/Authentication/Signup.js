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
import { useHistory } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const toast = useToast();
  const history = useHistory();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });
  const [show, setShow] = useState(false);
  function formChange(e) {
    // const file = e.target.files[0];
    // if (file !== undefined) {
    //   setForm((prev) => ({
    //     ...prev,
    //     [e.target.name]: e.target.files[0],
    //   }));
    // } else {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  async function submitForm() {
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      toast({
        title: `Please fill all the fields`,
        status: "error",
        isClosable: true,
        position: "top",
      });
      return;
    }
    if (form.password !== form.confirmPassword) {
      toast({
        title: `Password do not match`,
        status: "error",
        isClosable: true,
        position: "top",
      });
      return;
    }
    try {
      const { name, email, password } = form;

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
        },
        config
      );
      console.log("idhr");
      toast({
        title: `User created successfully`,
        status: "success",
        isClosable: true,
        position: "top",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      history.push("/chats");
    } catch {
      console.log("error");
    }
  }
  return (
    <VStack spacing="2px" color="black">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your Name"
          name="name"
          value={form.name}
          onChange={formChange}
        />
      </FormControl>
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
            name="password"
            value={form.password}
            type={show ? "text" : "password"}
            placeholder="Enter password"
            onChange={formChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            name="confirmPassword"
            value={form.confirmPassword}
            type={show ? "text" : "password"}
            placeholder="Confirm password"
            onChange={formChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Upload Profile Images</FormLabel>
        <Input
          type="file"
          name="image"
          accept="image/*"
          value={form.image}
          onChange={formChange}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        onClick={submitForm}
        marginTop="30px"
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
