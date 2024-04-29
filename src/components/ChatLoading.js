import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const ChatLoading = () => {
  return (
    <Stack>
      <Skeleton height="32px" />
      <Skeleton height="32px" />
      <Skeleton height="32px" />
      <Skeleton height="32px" />
      <Skeleton height="32px" />
      <Skeleton height="32px" />
      <Skeleton height="32px" />
    </Stack>
  );
};

export default ChatLoading;
