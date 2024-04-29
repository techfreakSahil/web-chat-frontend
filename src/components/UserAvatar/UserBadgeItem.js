import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      px={3}
      py={2}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      bgColor="purple"
      cursor="pointer"
      color="white"
      onClick={handleFunction}
    >
      {user?.name}
      <CloseIcon pl={1} />
    </Box>
  );
};

export default UserBadgeItem;
