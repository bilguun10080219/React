import React from "react";
import CodeBlock from "../../components/CodeBlock";
import Explain from "../../components/Explain";
import "../../learn.css"; // эсвэл MainApp.css дотор @import хийсэн бол хэрэггүй

 function Chapter4() {
  return (
    <div>
      <h2>Welcome to React</h2>

     <div className="lr-section">
  <CodeBlock label="HTML болон ReactDOM-ын анхны setup">
{`<!DOCTYPE html>
<html lang="mn">
<head>
  <meta charset="UTF-8">
  <title>Pure React Example</title>
</head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script>
    const element = React.createElement(
      'h1',
      null,
      'Сайн уу, Pure React!'
    );
    ReactDOM.render(element, document.getElementById('root'));
  </script>
</body>
</html>`}

  <Explain variant="info">
    Энэ код нь **JSX ашиглалгүй React элемент бүтээж,** шууд `React.createElement()` ашиглан DOM-д залах жишээ юм — **JSX ямар ард ажиллаж байгааг харуулдаг “behind the scenes” аргачлал** юм.
  </Explain>
  </CodeBlock>
</div>


     <div className="lr-section">
  <CodeBlock label="React.createElement нь юу хийдэг вэ?">
{`// React.createElement(tag, props, children...)
// Жишээ:
const item = React.createElement(
  'li',
  { className: 'menu-item' },
  'Home'
);`}

  <Explain variant="info">
    Энд `item` нь React-ийн **виртуал DOM элемэнт** бөгөөд, дараа нь `ReactDOM.render()`-ээр бодит DOM-д хувирган залах боломжтой. Энэ нь JSX-ийг бидний бичсэн хэл рүү хөрвүүлэгчийн ард ажилдаг бүтэц юм.
  </Explain>
  </CodeBlock>
</div>
<div className="lr-section">
  <CodeBlock label="Нэг React элемент дотор nested бүтэц">
{`const nav = React.createElement(
  'ul',
  null,
  React.createElement('li', null, 'Home'),
  React.createElement('li', null, 'About'),
  React.createElement('li', null, 'Contact')
);

ReactDOM.render(nav, document.getElementById('root'));`}

  <Explain variant="info">
    JSX-ээр бичвэл `<ul><li>Home</li>...</ul>` болдог логик бүтэц яг адилхан энэ React.createElement ашигласан nested бүтэцтэй юм. Энэ нь JSX-ийг ойлгоход тусладаг “нууц” юм.
  </Explain>
  </CodeBlock>
</div>
<div className="lr-section">
  <CodeBlock label="JSX vs Pure React">
{`// JSX хэлбэр:
const jsxElement = <h2 className="greeting">Сайн уу, JSX!</h2>;

// Pure React хэлбэр:
const pureElement = React.createElement(
  'h2',
  { className: 'greeting' },
  'Сайн уу, JSX!'
);`}

<Explain variant="info">
  JSX бол React.createElement тушаалыг бидэнд илүү ойлгомжтой, HTML шиг бичих боломж олгодог синтакс юм. Гэхдээ цаад бодит ажил — `React.createElement()` л юм.
</Explain>
</CodeBlock>
</div>



    </div>
  );
}
export default Chapter4