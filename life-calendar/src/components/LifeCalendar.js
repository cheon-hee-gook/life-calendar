import React from "react";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

function LifeCalendar({ livedWeeks, totalWeeks }) {
  return (
    <Box p="4" borderWidth="1px" borderRadius="lg" shadow="sm">
      <Heading size="md" mb="4">
        캘린더
      </Heading>
      <Grid templateColumns="repeat(52, 1fr)" gap="1">
        {Array.from({ length: totalWeeks }).map((_, index) => (
          <GridItem
            key={index}
            w="5px"
            h="5px"
            bg={index < livedWeeks ? "blue.400" : "gray.300"}
            borderRadius="sm"
          />
        ))}
      </Grid>
      <Text mt="4" fontSize="sm">
        총 {totalWeeks}주 중 {livedWeeks}주를 살았습니다.
      </Text>
    </Box>
  );
}

export default LifeCalendar;
