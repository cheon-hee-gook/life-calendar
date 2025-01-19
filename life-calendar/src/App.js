import React, {useState} from "react";

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
    </div>
  );
}

export default App;
