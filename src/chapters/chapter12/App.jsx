import React, { useState, useCallback, useMemo } from "react";

// 📝 Memoized component (зөвхөн props өөрчлөгдөхөд л дахин зурна)
const Child = React.memo(({ count, onClick }) => {
  console.log("🔄 Child rerendered!");
  return (
    <div className="p-2 border rounded mb-2">
      <p>👶 Child component count: {count}</p>
      <button
        onClick={onClick}
        className="bg-green-500 text-white px-2 py-1 rounded"
      >
        ➕ Increase Child Count
      </button>
    </div>
  );
});

function Chapter12() {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  // 📝 useCallback → функцыг тогтвортой хадгална
  const incrementChild = useCallback(() => {
    setChildCount((prev) => prev + 1);
  }, []);

  // 📝 useMemo → тооцооллыг cache хийж хадгална
  const expensiveCalculation = useMemo(() => {
    console.log("⚡ Expensive calculation running...");
    let sum = 0;
    for (let i = 0; i < 1_000_000; i++) {
      sum += i;
    }
    return sum;
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">
        ⚡ Performance Optimization (memo, useCallback, useMemo)
      </h1>

      {/* Parent хэсэг */}
      <div className="mb-4">
        <p>👨 Parent count: {parentCount}</p>
        <button
          onClick={() => setParentCount((prev) => prev + 1)}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          ➕ Increase Parent Count
        </button>
      </div>

      {/* Child component */}
      <Child count={childCount} onClick={incrementChild} />

      {/* Expensive calculation */}
      <div className="mt-4 p-2 border rounded">
        <p>🧮 Expensive Calculation Result: {expensiveCalculation}</p>
      </div>
    </div>
  );
}

export default Chapter12;
