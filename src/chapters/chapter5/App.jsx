import CodeBlock from "../../components/CodeBlock";
import Explain from "../../components/Explain";
import "../../learn.css"; 

 function Chapter5() {
  return (
    <div>
      <h2>React with JSX</h2>
      <div className="lr-section">
  <CodeBlock label="JSX ба React.createElement харьцуулалт">
{`// JSX хувилбар
const element = <h1 className="title">Сайн уу, JSX!</h1>

// Pure React хувилбар
const element = React.createElement(
  "h1",
  { className: "title" },
  "Сайн уу, JSX!"
)`}

  <Explain variant="info">
    <p>
      JSX нь HTML шиг харагддаг боловч ард талдаа <b>React.createElement</b>-д хөрвөнө.
      Ингэснээр код илүү цэвэрхэн бөгөөд уншихад ойлгомжтой болно.
    </p>
    <p>
      Үнэндээ React-д JSX заавал шаардлагатай биш, гэхдээ ихэнх төсөл дээр илүү уншигдахуйц тул
      стандарт сонголт болсон.
    </p>
  </Explain>
  </CodeBlock>
</div>

<div className="lr-section">
  <CodeBlock label="JSX дотор динамик утга">
{`const name = "Bilguun"
const element = <h2>Сайн уу, {name}!</h2>`}

  <Explain variant="info">
    <p>
      JSX дотор <code>{}</code> хаалт ашиглан JavaScript-ийн хувьсагч, функцийн
      үр дүнг оруулж болно.
    </p>
    <p>
      Энэ нь компонент дотор динамик мэдээлэл харуулах үндсэн арга юм.
    </p>
  </Explain>
  </CodeBlock>
</div>
  <div className="lr-section">
  <CodeBlock label="Props дамжуулах">
{`function Greeting({ name }) {
  return <h3>Сайн уу, {name}!</h3>
}

<Greeting name="React" />`}

  <Explain variant="info">
    <p>
      Компонентод утга дамжуулахдаа <b>props</b> ашиглана. JSX дээр атрибут шиг бичээд
      функцийн аргументаар хүлээн авдаг.
    </p>
    <p>
      Ингэснээр нэг кодыг дахин ашиглах, өөр өөр өгөгдлөөр дуудах боломжтой.
    </p>
  </Explain>
  </CodeBlock>
</div>
<div className="lr-section">
  <CodeBlock label="Children ашиглах">
{`function Layout({ children }) {
  return <div className="box">{children}</div>
}

<Layout>
  <p>Энэ бол контент хэсэг.</p>
</Layout>`}

  <Explain variant="info">
    <p>
      <b>children</b> prop нь JSX таг доторх агуулгыг төлөөлнө.
    </p>
    <p>
      Энэ нь олон элементийг компонент дотор уян хатан оруулах боломж олгодог.
    </p>
  </Explain>
  </CodeBlock>
</div>
<div className="lr-section">
  <CodeBlock label="JSX дотор style ба className">
{`const element = (
  <h2 style={{ color: "blue", fontSize: "20px" }}>
    Inline style жишээ
  </h2>
)`}

  <Explain variant="info">
    <p>
      JSX-д <b>class</b> атрибутыг <b>className</b> гэж бичдэг.
    </p>
    <p>
      Мөн inline style-г <b>JavaScript объект</b> байдлаар дамжуулна. 
      Энэ нь CSS-ийн camelCase бичлэг шаарддаг (жишээ нь <code>fontSize</code>).
    </p>
  </Explain>
  </CodeBlock>
</div>

    </div>
  );
}
export default Chapter5