import React, { useState } from "react";
import { Bar } from "react-chartjs-2"; // Chart.js의 Bar 차트를 사용
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Heading,
  Text,
  VStack,
  HStack,
  Container,
} from "@chakra-ui/react"; // Chakra UI 컴포넌트 불러오기
import {
  Chart as ChartJS, // Chart.js의 필수 모듈 등록
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js의 필수 구성 요소 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function App() {
  // 생년월일 상태
  const [birthDate, setBirthDate] = useState("");
  // 기준 연수 상태
  const [lifeSpan, setLifeSpan] = useState(80);

  // 생년월일 입력 핸들러
  const handleBirthDateChange = (e) => setBirthDate(e.target.value);

  // 기준 연수 입력 핸들러
  const handleLifeSpanChange = (e) => setLifeSpan(Number(e.target.value));

  // 주 단위 계산 함수
  const calculateWeeks = () => {
    if (!birthDate) return { livedWeeks: 0, remainingWeeks: 0 }; // 생년월일이 없으면 초기값 반환

    const now = new Date(); // 현재 날짜
    const birth = new Date(birthDate); // 입력된 생년월일

    const totalWeeks = lifeSpan * 52; // 기준 연수에 따른 총 주 수
    const livedWeeks = Math.floor((now - birth) / (1000 * 60 * 60 * 24 * 7)); // 현재까지 살아온 주 수 계산
    const remainingWeeks = Math.max(totalWeeks - livedWeeks, 0); // 남은 주 수 계산 (0 이하 방지)

    return { livedWeeks, remainingWeeks }; // 계산된 주 수 반환
  };

  // 계산된 주 수
  const { livedWeeks, remainingWeeks } = calculateWeeks();

  // 차트 데이터 정의
  const chartData = {
    labels: ["살아온 주", "남은 주"], // 차트의 라벨
    datasets: [
      {
        label: "주 수", // 데이터셋 이름
        data: [livedWeeks, remainingWeeks], // 살아온 주와 남은 주 데이터
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", // 살아온 주 색상
          "rgba(255, 99, 132, 0.6)", // 남은 주 색상
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)", // 살아온 주 테두리 색상
          "rgba(255, 99, 132, 1)", // 남은 주 테두리 색상
        ],
        borderWidth: 1, // 테두리 두께
      },
    ],
  };

  // 차트 옵션 정의
  const chartOptions = {
    responsive: true, // 반응형 활성화
    plugins: {
      legend: { display: false }, // 범례 비활성화
    },
    scales: {
      y: { beginAtZero: true }, // Y축이 0부터 시작
    },
  };

  return (
    <Container maxW="container.md" py="8">
      {/* 제목 */}
      <Heading mb="6" textAlign="center">
        인생달력
      </Heading>

      <VStack spacing="6" align="stretch">
        {/* 입력 섹션 */}
        <Box p="4" borderWidth="1px" borderRadius="lg" shadow="sm">
          {/* 생년월일 입력 */}
          <FormControl mb="4">
            <FormLabel>생년월일</FormLabel>
            <Input
              type="date"
              value={birthDate}
              onChange={handleBirthDateChange}
            />
          </FormControl>

          {/* 기준 연수 입력 */}
          <FormControl>
            <FormLabel>기준 연수</FormLabel>
            <Input
              type="number"
              value={lifeSpan}
              onChange={handleLifeSpanChange}
            />
          </FormControl>
        </Box>

        {/* 결과 섹션 */}
        <Box p="4" borderWidth="1px" borderRadius="lg" shadow="sm">
          <Heading size="md" mb="4">
            결과
          </Heading>
          {/* 살아온 주 표시 */}
          <HStack justifyContent="space-between">
            <Text>살아온 주:</Text>
            <Text fontWeight="bold">{livedWeeks}주</Text>
          </HStack>
          {/* 남은 주 표시 */}
          <HStack justifyContent="space-between">
            <Text>남은 주:</Text>
            <Text fontWeight="bold">{remainingWeeks}주</Text>
          </HStack>
        </Box>

        {/* 차트 섹션 */}
        <Box p="4" borderWidth="1px" borderRadius="lg" shadow="sm">
          <Heading size="md" mb="4">
            시각화
          </Heading>
          {/* 막대 차트 */}
          <Box maxW="600px" mx="auto">
            <Bar data={chartData} options={chartOptions} />
          </Box>
        </Box>
      </VStack>
    </Container>
  );
}

export default App;
