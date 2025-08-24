import React, { useReducer } from "react";

// 📝 Reducer функц – state өөрчлөх логик энд байна
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

function Chapter11() {
  // 📝 useReducer ашиглаж байна
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = React.useState("");

  // ➕ Todo нэмэх
  const addTodo = () => {
    if (input.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">📝 Todo List (Reducer Demo)</h1>

      {/* Input + Button */}
      <div className="mb-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Шинэ ажил нэмэх..."
          className="border px-2 py-1 mr-2"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          ➕ Нэмэх
        </button>
      </div>

      {/* Todo жагсаалт */}
      <ul className="list-disc ml-6">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 mb-1">
            <span
              onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
              className={`cursor-pointer ${
                todo.done ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}
              className="text-red-500"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chapter11;
