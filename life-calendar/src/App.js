import React, {useState} from "react";
import { Bar } from "react-chartjs-2"
// Chart.js 필수 구성 요소 불러오기
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js 구성 요소 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function App() {
  const [birthDate, setBirthDate] = useState("");
  const [lifeSpan, setLifeSpan] = useState(80);

  // 생년월일 변경 핸들러
  const handleBirthDateChange = (e) => {
    const value = e.target.value;
    console.log("입력된 생년월일:", value);
    setBirthDate(value);
  };

  // 기준 연수 변경 핸들러
  const handleLifeSpanChange = (e) => {
    const value = e.target.value;
    console.log("입력된 기준 연수:", value);
    setLifeSpan(value);
  };

  // 주 계산 함수
  const calculateWeeks = () => {
    if (!birthDate) return { livedWeeks: 0, remainingWeeks: 0 };

    const now = new Date();
    const birth = new Date(birthDate);

    // 전체 수명 주 계산
    const totalWeeks = lifeSpan * 52;

    // 살아온 주 계산
    const livedWeeks = Math.floor((now - birth) / (1000 * 60 * 60 * 24 * 7));

    // 남은 주 계산
    const remainingWeeks = totalWeeks - livedWeeks;

    console.log("전체 주:", totalWeeks);
    console.log("살아온 주:", livedWeeks);
    console.log("남은 주:", remainingWeeks);

    return { livedWeeks, remainingWeeks };
  };

  // 계산된 결과
  const { livedWeeks, remainingWeeks } = calculateWeeks();

  // 차트 데이터
  const chartData = {
    labels: ["살아온 주", "남은 주"],
    datasets: [
      {
        label: "주 수",
        data: [livedWeeks, remainingWeeks > 0 ? remainingWeeks : 0],
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
      y: {
        beginAtZero: true,
      },
    },
  };


  return (
    <div>
      <h1>인생달력</h1>
      {/* 생년월일 입력 */}
      <div>
        <label htmlFor="birthDate">생년월일: </label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={handleBirthDateChange}
        />
      </div>

      {/* 기준 연수 입력 */}
      <div>
        <label htmlFor="lifeSpan">기준 연수: </label>
        <input
          type="number"
          id="lifeSpan"
          value={lifeSpan}
          onChange={handleLifeSpanChange}
        />
      </div>

      {/* 계산 결과 출력 */}
      <div>
        <h2>결과</h2>
        <p>살아온 주: {livedWeeks}주</p>
        <p>남은 주: {remainingWeeks > 0 ? remainingWeeks : 0}주</p>
      </div>

      {/* 차트 추가 */}
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2>시각화</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>

    </div>
  );
}

export default App;
