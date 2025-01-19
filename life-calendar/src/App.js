import React, {useState} from "react";

function App() {
  const [birthDate, setBirthDate] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("입력된 생년월일:", value);
    setBirthDate(value);
  }



  return (
    <div>
      <h1>인생달력</h1>
      <div>
        <label htmlFor="birthDate">생년월일: </label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={handleChange}
        />
      </div>
      <p>입력된 생년월일: {birthDate} </p>
    </div>
  );
}

export default App;
