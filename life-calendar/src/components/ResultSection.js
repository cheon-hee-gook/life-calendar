import React from "react";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";

function ResultSection({ livedWeeks, remainingWeeks }) {
  return (
    <Box p="4" borderWidth="1px" borderRadius="lg" shadow="sm">
      <Heading size="md" mb="4">
        결과
      </Heading>
      <HStack justifyContent="space-between">
        <Text>살아온 주:</Text>
        <Text fontWeight="bold">{livedWeeks}주</Text>
      </HStack>
      <HStack justifyContent="space-between">
        <Text>남은 주:</Text>
        <Text fontWeight="bold">{remainingWeeks}주</Text>
      </HStack>
    </Box>
  );
}

export default ResultSection;
