import React from "react";
import CodeBlock from "../../components/CodeBlock";
import Explain from "../../components/Explain";
import "../../learn.css"; 
//import chapter4ig from './assets/chapter4ig.jpg'

 function Chapter4() {
  return (
    <div>
      <h2>How React Works</h2>

     <div className="lr-section">
        <CodeBlock label="Page Setup">
            {`<!DOCTYPE html>
            <html>
            <head>
            <meta charset="utf-8" />
            <title>React Samples</title>
            </head>
            <body>
            <!-- Target container -->
            <div id="root"></div>
            <!-- React library & ReactDOM (Development Version)-->
            <script
            src="https://unpkg.com/react@16/umd/react.development.js">
            </script>
            <script
            src="https://unpkg.com/react-dom@16/umd/react-dom.development.js">
            </script>
            <script>
            // Энэ <script> тагын дотор JavaScript болон React-ийн код бичигдэнэ
            </script>
            </body>
            </html>`}
          <Explain variant="info">
            Энэ код нь React програмын энгийн загвар бөгөөд вэб хуудсанд React-ийн тусламжтайгаар динамик контент харуулана.
          </Explain>
        </CodeBlock>
      </div>

     <div className="lr-section">
        <CodeBlock label="React Element">
            {`// React.createElement(tag, props, children...)
            // Жишээ:
            const element = <h1>Hello, world!</h1>;`}      
         <Explain variant="info">
          React элемент гэдэг нь UI-г дүрсэлдэг хамгийн жижиг нэгж /JavaScript объект/
          </Explain>
        </CodeBlock>
      </div>

      <div className="lr-section">
        <CodeBlock label="ReactDOM">
            {`import React from "react";
            import ReactDOM from "react-dom/client";
            
            const element = <h1>Hello, React!</h1>;
            
            ReactDOM.createRoot(document.getElementById("root")).render(element);`}
          <Explain variant="info">
            React-ийн элементийг browser дээр буулгах (render хийх) үүрэгтэй.
          </Explain>
        </CodeBlock>
      </div>

      <div className="lr-section">
        <CodeBlock label="Children">
          {`const WithChildren = () => {
            return (
              <div>
                <h2>2. Children Example</h2>
                <p>This is a child element inside div</p>
              </div>
            );
          };`}
        <Explain variant="info">
          Энэ жишээ нь JSX ашиглан return хийдэг children элемент агуулсан
        </Explain>
      </CodeBlock>
      </div>

      <div className="lr-section">
        <CodeBlock label="React Components">
          {`function Welcome(props) {
              return <h1>Hello, {props.name}</h1>;
            }
                      
            function App() {
              return (
                <div>
                  <Welcome name="Bilguun" />
                  <Welcome name="Andaa" />
                </div>
              );
            }
                      
            export default App;`}
        <Explain variant="info">
          Компонент гэдэг нь UI хэсгийг дахин ашиглах боломжтой функц эсвэл класс
        </Explain>
      </CodeBlock>
      </div>

      <div className="lr-section">
        <CodeBlock label="React Components: A Historical Tour">
          {`//Class Component
          import React from "react";

            class Welcome extends React.Component {
              render() {
                return <h1>Hello, {this.props.name}</h1>;
              }
            }

            //Function Component

            function Welcome({ name }) {
              return <h1>Hello, {name}</h1>;
            }`}
        <Explain variant="info">
          Өмнө нь React нь class component дээр төвлөрч байсан.
          Одоо function component + hooks хамгийн түгээмэл.
        </Explain>
      </CodeBlock>
      </div>

      <div className="lr-section">
        <CodeBlock label="ALL">
          {`import React from "react";

          // === React Element ===
          const element = <h2>1. This is a React Element</h2>;

          // === Function Component ===
          function Welcome({ name }) {
            return <h3>Hello, {name}!</h3>;
          }

          // === Class Component (хуучны арга) ===
          class OldWelcome extends React.Component {
            render() {
              return <h3>Old Style: Hello, {this.props.name}!</h3>;
            }
          }

          // === Children жишээ ===
          const WithChildren = () => {
            return (
              <div>
                <h2>2. Children Example</h2>
                <p>This is a child element inside div</p>
              </div>
            );
          };

          // === App Component (гол хэсэг) ===
          function App() {
            return (
              <div>
                <h1>How React Works Demo</h1>

                {/* React Element */}
                {element}

                {/* Children Example */}
                <WithChildren />

                {/* Function Components */}
                <h2>3. Function Components</h2>
                <Welcome name="Bilguun" />
                <Welcome name="Andaa" />

                {/* Class Component */}
                <h2>4. Class Component</h2>
                <OldWelcome name="Friend" />
              </div>
            );
          }

          export default App;
          `}
         </CodeBlock>
         
      </div>

    </div>
  );
}
export default Chapter4