import { useState } from "react"
import "./App.css"

import Chapter1 from "./chapters/chapter1/App"
import Chapter2 from "./chapters/chapter2/App"
import Chapter3 from "./chapters/chapter3/App"
import Chapter4 from "./chapters/chapter4/App"
import Chapter5 from "./chapters/chapter5/App"
import Chapter6 from "./chapters/chapter6/App"
import Chapter7 from "./chapters/chapter7/App"
import Chapter8 from "./chapters/chapter8/App"
import Chapter9 from "./chapters/chapter9/App"
import Chapter10 from "./chapters/chapter10/App"
import Chapter11 from "./chapters/chapter11/App"
import Chapter12 from "./chapters/chapter12/App"

export default function App() {
  const [activeChapter, setActiveChapter] = useState(null);

  const chapters = [
    { id: 1, name: "Chapter 1", component: <Chapter1 /> },
    { id: 2, name: "Chapter 2", component: <Chapter2 /> },
    { id: 3, name: "Chapter 3", component: <Chapter3 /> },
    { id: 4, name: "Chapter 4", component: <Chapter4 /> },
    { id: 5, name: "Chapter 5", component: <Chapter5 /> },
    { id: 6, name: "Chapter 6", component: <Chapter6 /> },
    { id: 7, name: "Chapter 7", component: <Chapter7 /> },
    { id: 8, name: "Chapter 8", component: <Chapter8 /> },
    { id: 9, name: "Chapter 9", component: <Chapter9 /> },
    { id: 10, name: "Chapter 10", component: <Chapter10 /> },
    { id: 11, name: "Chapter 11", component: <Chapter11 /> },
    { id: 12, name: "Chapter 12", component: <Chapter12 /> },
  ]

  return (
    <div className="main-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-title">📘 React Lessons</h2>
        {chapters.map((ch) => (
          <button
            key={ch.id}
            className={`chapter-btn ${
              activeChapter === ch.id ? "active" : ""
            }`}
            onClick={() => setActiveChapter(ch.id)}
          >
            {ch.name}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="chapter-content">
        {activeChapter ? (
          <div className="chapter-box">
            {chapters.find((ch) => ch.id === activeChapter).component}
          </div>
        ) : (
          <div className="placeholder">
            <p>👈 Choose a chapter to start learning</p>
          </div>
        )}
      </div>
    </div>
  );
}
