// Chapter7.js
import { useState, useEffect } from "react";

 function Chapter7() {
  const [data, setData] = useState("ачааллаж байна...");

  useEffect(() => {
    // Жинхэнэ API дуудлага мэт simulation хийе
    setTimeout(() => {
      setData("🌍 Fake API-с өгөгдөл ирлээ!");
    }, 2000);
  }, []);

  return (
    <div className="p-4 border rounded-xl shadow-md w-72 bg-white">
      <h2 className="text-lg font-bold">Chapter 7: useEffect</h2>
      <p>{data}</p>
    </div>
  );
}
export default Chapter7
