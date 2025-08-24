// Chapter9.js
import { useState } from "react";

function TemperatureInput({ label, value, onChange }) {
  return (
    <div className="mb-2">
      <label className="block">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded px-2 py-1 w-full"
      />
    </div>
  );
}

 function Chapter9() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (val) => {
    setCelsius(val);
    setFahrenheit(val !== "" ? (val * 9) / 5 + 32 : "");
  };

  const handleFahrenheitChange = (val) => {
    setFahrenheit(val);
    setCelsius(val !== "" ? ((val - 32) * 5) / 9 : "");
  };

  return (
    <div className="p-4 border rounded-xl shadow-md w-72 bg-white">
      <h2 className="text-lg font-bold">Chapter 9: Lifting State Up</h2>
      <TemperatureInput
        label="Цельс (°C)"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <TemperatureInput
        label="Фаренгейт (°F)"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </div>
  );
}
export default Chapter9
