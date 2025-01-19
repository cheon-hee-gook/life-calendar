import React, {useState} from "react";

function App() {
  const [birthDate, setBirthDate] = useState("");
  const [lifeSpan, setLifeSpan] = useState(80);

  const handleBirthDateChange = (e) => {
    const value = e.target.value;
    console.log("입력된 생년월일:", value);
    setBirthDate(value);
  };

  const handleLifeSpanChange = (e) => {
    const value = e.target.value;
    console.log("입력된 기준 연수:", value);
    setLifeSpan(value);
  };

  return (
    <div>
      <h1>인생달력</h1>
      <div>
        <label htmlFor="birthDate">생년월일: </label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={handleBirthDateChange}
        />
      </div>
      <div>
        <label htmlFor="lifeSpan">기준 연수: </label>
        <input
          type="number"
          id="lifeSpan"
          value={lifeSpan}
          onChange={handleLifeSpanChange}
        />
      </div>
      <p>입력된 생년월일: {birthDate}</p>
      <p>입력된 기준 연수: {lifeSpan}년</p>
    </div>
  );
}

export default App;
