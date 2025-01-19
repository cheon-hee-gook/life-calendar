import React from "react";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";

function InputSection({ birthDate, setBirthDate, lifeSpan, setLifeSpan }) {
  return (
    <Box p="4" borderWidth="1px" borderRadius="lg" shadow="sm">
      {/* 생년월일 입력 */}
      <FormControl mb="4">
        <FormLabel>생년월일</FormLabel>
        <Input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </FormControl>

      {/* 기준 연수 입력 */}
      <FormControl>
        <FormLabel>기준 연수</FormLabel>
        <Input
          type="number"
          value={lifeSpan}
          onChange={(e) => setLifeSpan(Number(e.target.value))}
        />
      </FormControl >
    </Box>
  );
}

export default InputSection;
