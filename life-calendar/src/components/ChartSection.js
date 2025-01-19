import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS, // Chart.js의 기본 클래스
  CategoryScale, // X축 스케일
  LinearScale, // Y축 스케일
  BarElement, // Bar 차트를 위한 요소
  Title, // 차트 제목
  Tooltip, // 툴팁
  Legend, // 범례
} from "chart.js";

// Chart.js의 필수 구성 요소 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ChartSection({ chartData, chartOptions }) {
  return (
    <Box p="4" borderWidth="1px" borderRadius="lg" shadow="sm">
      <Heading size="md" mb="4">
        시각화
      </Heading>
      <Box maxW="600px" mx="auto">
        <Bar data={chartData} options={chartOptions} />
      </Box>
    </Box>
  );
}

export default ChartSection;
