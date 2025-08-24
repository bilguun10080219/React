import React from "react";
import CodeBlock from "../../components/CodeBlock";
import Explain from "../../components/Explain";
import "../../learn.css"; 

 function Chapter6() {
  return (
    <div>
      <h2>Welcome to React</h2>

    <div className="lr-section">
  <CodeBlock label="1. Stateful Root Component">
{`class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
    this.addColor = this.addColor.bind(this);
  }

  addColor(title, color) {
    const newColor = { id: Date.now(), title, color, rating: 0 };
    this.setState(prev => ({
      colors: [...prev.colors, newColor]
    }));
  }

  render() {
    return (
      <div className="app">
        <AddColorForm onNewColor={this.addColor} />
        <ColorList colors={this.state.colors} />
      </div>
    );
  }
}`}
  <Explain variant="info">
    <p>
      Энэ нь state-тэй "үг явдаг" root компонент юм. `colors` массив нь root-д хадгалагдах data source бөгөөд:
    </p>
    <ul>
      <li>
        <code>addColor</code> нь шинэ өнгө нэмэх функц бөгөөд spread ашиглан state-ийг шинэчилдэг.
      </li>
      <li>
        `AddColorForm` → `onNewColor` callback-аар root компонент руу өгөгдлийг буцааж явуулна.
      </li>
      <li>
        `ColorList` компонент-д state-ийг props-аар дамжилт хийж харуулна.
      </li>
    </ul>
  </Explain>
  </CodeBlock>
</div>


      <div className="lr-section">
  <CodeBlock label="2. Stateless Child: ColorList → Color">
{`const ColorList = ({ colors = [] }) =>
  <div className="color-list">
    {colors.length === 0 ? (
      <p>No Colors Listed. (Add a Color)</p>
    ) : (
      colors.map(c =>
        <Color key={c.id} {...c} />
      )
    )}
  </div>`}

  <Explain variant="info">
    <p>
      Энэ нь **presentational component** бөгөөд state-гүй. Colors массивыг props-аар авч, `Color` компонентуудад дамжуулан харуулдаг.
    </p>
    <p>
      Spread syntax нь өнгийн объектын шинжүүдийг дангаараа props болгон дамжуулж байгааг харуулна.
    </p>
  </Explain>
  </CodeBlock>
</div>

<div className="lr-section">
  <CodeBlock label="3. Callback Props: Rating & Removing">
{`const Color = ({ id, title, color, rating = 0, onRate = f => f, onRemove = f => f }) =>
  <section className="color">
    <h1>{title}</h1>
    <button onClick={() => onRemove(id)}>X</button>
    <div className="color" style={{ backgroundColor: color }}></div>
    <StarRating starsSelected={rating} onRate={newRating => onRate(id, newRating)} />
  </section>`}

  <Explain variant="info">
    <p>
      `Color` нь стэйтгүй child component бөгөөд:
    </p>
    <ul>
      <li>
        Distinct callback props (`onRate`, `onRemove`) дамжуулж state-ийг root компонент руу буцаан илгээдэг.
      </li>
      <li>
        `StarRating` компонент руу rating-ийг controlled байдлаар props-аар дамжуулж, event-ийг callback-ээр root руу явуулдаг.
      </li>
    </ul>
  </Explain>
  </CodeBlock>
</div>

<div className="lr-section">
  <CodeBlock label="4. PropTypes and defaultProps">
{`const Summary = ({ ingredients=0, steps=0, title='[recipe]' }) => (
  <div className="summary">
    <h1>{title}</h1>
    <p>{ingredients} Ingredients | {steps} Steps</p>
  </div>
);

Summary.propTypes = {
  ingredients: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
  title: PropTypes.string
};`}

  <Explain variant="info">
    <p>
      Энэ нь props validation ба default props-ын жишээ:
    </p>
    <ul>
      <li><strong>defaultProps</strong>: `ingredients` болон `steps`-ийг анхны утгатай болгоно.</li>
      <li><strong>propTypes</strong>: props-ийн төрөл, шаардагдах байдал (isRequired)-г тодорхойлон алдаа мэдэгдэнэ.</li>
    </ul>
  </Explain>
  </CodeBlock>
</div>


    </div>
  );
}
export default Chapter6