import React from "react";
import CodeBlock from "../../components/CodeBlock";
import Explain from "../../components/Explain";
import "../../learn.css"; // эсвэл MainApp.css дотор @import хийсэн бол хэрэггүй

// Chapter3.js
function Greeting({ name }) {
  return <p className="text-green-600">Сайн уу, {name}! 👋</p>;
}

 function Chapter3() {
  return (
    <div>
    <div className="p-4 border rounded-xl shadow-md w-64 bg-white">
      <h2 className="text-lg font-bold">Chapter 3: Props</h2>
      <Greeting name="Билгүүн" />
      <Greeting name="React суралцагч" />
    </div>
          <h2>Functional Programming with JavaScript</h2>

      <div className="lr-section">
  <CodeBlock label="Imperative vs Declarative">
{`// Imperative
let url = "";
for (let char of str) {
  url += char === " " ? "-" : char;
}

// Declarative
const urlFriendly = str.replace(/ /g, "-")`}
<Explain variant="info">
  <b>Imperative</b> код нь хэрхэн хийхийг (how) заадаг—шуд давталт, нөхцөл зэрэгтэй. Харин <b>Declarative</b> код нь юу хийхийг (what) илэрхийлж, ойлгоход амар, цэвэр.
</Explain>
  </CodeBlock>
</div>

<div className="lr-section">
  <CodeBlock label="Immutability & Pure Function">
{`const selfEducate = person => ({
  ...person,
  canRead: true,
  canWrite: true
});`}
<Explain variant="info">
  Энэ функц нь эх объектыг өөрчлөлгүйгээр (uneffected), шинэ объект үүсгэнэ. Энэ нь <b>pure function</b> бөгөөд өгөгдлийг задалж, үр дүнд нь шинээр объект үүсгэж өгнө.
</Explain>
  </CodeBlock>
</div>

<div className="lr-section">
  <CodeBlock label="Map / Filter / Reduce">
{`const names = users.map(u => u.name);
const active = items.filter(i => i.active);
const sum = numbers.reduce((total, n) => total + n, 0);`}
<Explain variant="info">
  Эдгээр нь functional трансформацууд бөгөөд массивийг шинэ массив болгон боловсруулна. Код нь илүү ойлгомжтой, уншихад энгийн.
</Explain>
  </CodeBlock>
</div>

<div className="lr-section">
  <CodeBlock label="Higher-order Function">
{`const withLogging = fn => (...args) => {
  console.log("Called with", args);
  return fn(...args);
};`}
<Explain variant="info">
  Энэ нь <b>higher-order function</b> буюу функцыг аргумент болон үр дүн болгоно. Ингэснээр логик сайжрах, код дахин ашиглах боломж нэмэгдэнэ.
</Explain>
  </CodeBlock>
</div>
    </div>
  );
}

export default Chapter3