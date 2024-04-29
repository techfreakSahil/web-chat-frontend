import React from "react";
import { Avatar, Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const UserListItem = ({ user, handleFunction }) => {
  console.log("useritem");
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      display="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user?.name}
        src={user?.pic}
      />
      <Text>{user?.name}</Text>
      <Text fontSize="xs">
        <b>Email: </b>
        {user?.email}
      </Text>
    </Box>
  );
};

export default UserListItem;
