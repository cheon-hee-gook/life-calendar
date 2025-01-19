import React, { useState } from "react";
import { Container, Heading, VStack } from "@chakra-ui/react";
import ChartSection from "./components/ChartSection";
import InputSection from "./components/InputSection";
import ResultSection from "./components/ResultSection";
import LifeCalendar from "./components/LifeCalendar";

function App() {
  const [birthDate, setBirthDate] = useState("");
  const [lifeSpan, setLifeSpan] = useState(80);

  // 주 단위 계산 함수
  const calculateWeeks = () => {
    if (!birthDate) return { livedWeeks: 0, remainingWeeks: 0, totalWeeks: 0 };

    const now = new Date();
    const birth = new Date(birthDate);

    const totalWeeks = lifeSpan * 52;
    const livedWeeks = Math.floor((now - birth) / (1000 * 60 * 60 * 24 * 7));
    const remainingWeeks = Math.max(totalWeeks - livedWeeks, 0);

    return { livedWeeks, remainingWeeks, totalWeeks };
  };

  const { livedWeeks, remainingWeeks, totalWeeks } = calculateWeeks();

  // 차트 데이터 정의
  const chartData = {
    labels: ["살아온 주", "남은 주"],
    datasets: [
      {
        label: "주 수",
        data: [livedWeeks, remainingWeeks],
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <Container maxW="container.md" py="8">
      <Heading mb="6" textAlign="center">
        인생달력
      </Heading>
      <VStack spacing="6" align="stretch">
        <InputSection
          birthDate={birthDate}
          setBirthDate={setBirthDate}
          lifeSpan={lifeSpan}
          setLifeSpan={setLifeSpan}
        />
        <ResultSection livedWeeks={livedWeeks} remainingWeeks={remainingWeeks} />
        <ChartSection chartData={chartData} chartOptions={chartOptions} />
        <LifeCalendar livedWeeks={livedWeeks} totalWeeks={totalWeeks} />
      </VStack>
    </Container>
  );
}

export default App;
