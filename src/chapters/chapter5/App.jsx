import React from "react";
import CodeBlock from "../../components/CodeBlock";
import Explain from "../../components/Explain";
import "../../learn.css"; 

function Chapter5() {
  return (
    <div>
      <h2>React with JSX</h2>

      <div className="lr-section">
        <CodeBlock label="React Elements as JSX">
          {`const element = <h1>Hello, JSX!</h1>;`}
          <Explain variant="info">
            React элементийг JSX ашиглан илэрхийлж болно. JSX нь JavaScript-ийн дотор HTML шиг харагддаг syntax юм.
          </Explain>
        </CodeBlock>
      </div>

      <div className="lr-section">
        <CodeBlock label="JSX Tips">
          {`const name = "Bilguun";
const greeting = <h1>Hello, {name}!</h1>;`}
          <Explain variant="info">
            JSX дотор {`{ }`} ашиглан JavaScript хувьсагч болон илэрхийлэл оруулах боломжтой.
          </Explain>
        </CodeBlock>
      </div>

      <div className="lr-section">
        <CodeBlock label="Mapping Arrays with JSX">
          {`const fruits = ["Apple", "Banana", "Cherry"];

const fruitList = (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);`}
          <Explain variant="info">
            Array-ийн элементүүдийг `map` функцээр давтаж JSX дотор list болгох боломжтой.
          </Explain>
        </CodeBlock>
      </div>

      <div className="lr-section">
        <CodeBlock label="Babel">
          {`// JSX кодыг Babel дараах хэлбэрт хөрвүүлдэг:
const element = <h1>Hello</h1>;
// => React.createElement("h1", null, "Hello")`}
          <Explain variant="info">
            Browser шууд JSX ойлгодоггүй тул Babel ашиглан жирийн JavaScript болгон хөрвүүлдэг.
          </Explain>
        </CodeBlock>
      </div>

      <div className="lr-section">
        <CodeBlock label="Recipes as JSX">
          {`const recipes = [
  { id: 1, name: "Цуйван" },
  { id: 2, name: "Бууз" },
  { id: 3, name: "Банштай шөл" },
];

function RecipeList() {
  return (
    <div>
      {recipes.map((r) => (
        <p key={r.id}>{r.name}</p>
      ))}
    </div>
  );
}`}
          <Explain variant="info">
            Жагсаалтыг динамикаар JSX дотор үүсгэж болно.
          </Explain>
        </CodeBlock>
      </div>

      <div className="lr-section">
        <CodeBlock label="React Fragments">
          {`function FragmentExample() {
  return (
    <>
      <h2>Title</h2>
      <p>Fragment нь илүү div хэрэглэхгүйгээр олон элемент буцаана.</p>
    </>
  );
}`}
          <Explain variant="info">
            Fragment ашигласнаар олон элементийг илүү `div` ашиглахгүйгээр бүлэглэж буцаадаг.
          </Explain>
        </CodeBlock>
      </div>

      <div className="lr-section">
        <CodeBlock label="Intro to Webpack & Create React App">
          {`// Шинэ React project эхлүүлэх
npx create-react-app my-app
cd my-app
npm start`}
          <Explain variant="info">
            Webpack нь кодыг нэгтгэж багцалдаг бол Create React App нь Webpack болон Babel-г автоматаар тохируулж өгдөг.
          </Explain>
        </CodeBlock>
      </div>

      <div className="lr-section">
        <CodeBlock label="ALL">
          {`import React from "react";

// === JSX Element ===
const element = <h1>Hello JSX</h1>;

// === JSX Tips ===
const name = "Andaa";
const greeting = <p>Hello, {name}!</p>;

// === Array Mapping ===
const fruits = ["Apple", "Banana", "Cherry"];
const fruitList = (
  <ul>
    {fruits.map((f, i) => <li key={i}>{f}</li>)}
  </ul>
);

// === Fragment ===
const FragmentExample = () => (
  <>
    <h2>Fragment Example</h2>
    <p>No extra div!</p>
  </>
);

function App() {
  return (
    <div>
      <h1>React with JSX Demo</h1>
      {element}
      {greeting}
      {fruitList}
      <FragmentExample />
    </div>
  );
}

export default App;`}
        </CodeBlock>
      </div>
    </div>
  );
}

export default Chapter5;
