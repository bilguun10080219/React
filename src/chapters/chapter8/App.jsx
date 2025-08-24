// Chapter8.js
import { useState } from "react";

 function Chapter8() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="p-4 border rounded-xl shadow-md w-72 bg-white">
      <h2 className="text-lg font-bold">Chapter 8: Conditional Rendering</h2>
      {isLoggedIn ? (
        <p className="text-green-600">👋 Та системд нэвтэрсэн байна!</p>
      ) : (
        <p className="text-red-600">🚪 Та нэвтрээгүй байна!</p>
      )}
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-lg"
      >
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}
export default Chapter8
