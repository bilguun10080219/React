import React from "react";
import CodeBlock from "../../components/CodeBlock";
import Explain from "../../components/Explain";
import "../../learn.css";
//import chapter3ig from "./assets/chapter3ig.jpg";

function Chapter3() {
  return (
    <div>
      <h2>Functional Programming with JavaScript</h2>


      <div className="lr-section">
        <CodeBlock label="What It Means to Be Functional">
          {`// Functional style: pure functions, no side effects
            function add(a, b) {
              return a + b;
            }
            const result = add(2, 3); // 5`}
          <Explain variant="info">
            Функционал гэдэг нь: **мэдээлэл өөрчлөхгүй**, **pure function** ашиглах, 
            **side effect** үүсгэхгүйгээр асуудлыг шийдэхийг хэлдэг.
          </Explain>
        </CodeBlock>
      </div>


      <div className="lr-section">
        <CodeBlock label="Imperative vs Declarative">
          {`// Imperative: алхам бүрийг тодорхой зааж өгнө
            let numbers = [1, 2, 3];
            let doubled = [];
            for (let i = 0; i < numbers.length; i++) {
              doubled.push(numbers[i] * 2);
            }

            // Declarative: юу хийхийг л хэлнэ
            const doubled2 = numbers.map(n => n * 2);`}
          <Explain variant="info">
            **Imperative** нь "яаж" хийхийг заадаг бол  
            **Declarative** нь "юу" хийхийг илэрхийлдэг.
          </Explain>
        </CodeBlock>
      </div>


      <div className="lr-section">
        <CodeBlock label="Immutability">
          {`const arr = [1, 2, 3];
            // Муу (mutable): шууд өөрчлөх
            // arr.push(4);

            // Сайн (immutable): шинэ массив үүсгэж буцаах
            const newArr = [...arr, 4];`}
          <Explain variant="info">
            **Immutability**: өгөгдлийг шууд өөрчлөхгүй, харин шинэ хувьсагч/объект үүсгэнэ.
          </Explain>
        </CodeBlock>
      </div>


      <div className="lr-section">
        <CodeBlock label="Pure Functions">
          {`// Pure: зөвхөн оролтоосоо хамаардаг
            function square(x) {
              return x * x;
            }

            // Impure: гадна орчноос хамаардаг
            let factor = 2;
            function multiply(x) {
              return x * factor; // гаднах хувьсагчаас хамаарлаа
            }`}
          <Explain variant="info">
            **Pure function** нь үргэлж нэг ижил оролтод нэг ижил үр дүн өгдөг.
          </Explain>
        </CodeBlock>
      </div>


      <div className="lr-section">
        <CodeBlock label="Data Transformations (map, filter, reduce)">
          {`const numbers = [1, 2, 3, 4, 5];
            const doubled = numbers.map(n => n * 2); // [2,4,6,8,10]
            const evens = numbers.filter(n => n % 2 === 0); // [2,4]
            const sum = numbers.reduce((acc, n) => acc + n, 0); // 15`}
          <Explain variant="info">
            **map, filter, reduce** зэрэг функцууд өгөгдлийг шинэчилж хувиргахад ашиглагдана.
          </Explain>
        </CodeBlock>
      </div>


      <div className="lr-section">
        <CodeBlock label="Higher-Order Functions">
          {`// Function that takes another function as argument
            function withLogging(fn) {
              return function(x) {
                console.log("Input:", x);
                return fn(x);
              };
            }

            const square = x => x * x;
            const loggedSquare = withLogging(square);

            loggedSquare(5); // Input: 5 -> 25`}
          <Explain variant="info">
            **Higher-order function** нь function-ыг параметр болгон авах эсвэл буцаадаг функц юм.
          </Explain>
        </CodeBlock>
      </div>


      <div className="lr-section">
        <CodeBlock label="Recursion">
          {`// Factorial recursive
            function fact(n) {
              if (n === 0) return 1;
              return n * fact(n - 1);
            }
            fact(5); // 120`}
          <Explain variant="info">
            **Recursion**: функц өөрийгөө дуудаж асуудлыг шийддэг.
          </Explain>
        </CodeBlock>
      </div>


      <div className="lr-section">
        <CodeBlock label="Composition">
          {`const double = x => x * 2;
            const increment = x => x + 1;

            // Compose functions manually
            const doubleThenIncrement = x => increment(double(x));

            doubleThenIncrement(3); // 7`}
          <Explain variant="info">
            **Function composition** нь жижиг функцийг нэгтгэж том логик бүтээдэг.
          </Explain>
        </CodeBlock>
      </div>


      <div className="lr-section">
        <CodeBlock label="Putting It All Together">
          {`// Жишээ: массивыг функцүүдээр боловсруулах
            const numbers = [1, 2, 3, 4, 5];
                      
            const result = numbers
              .map(n => n * 2)       // [2,4,6,8,10]
              .filter(n => n > 5)    // [6,8,10]
              .reduce((a, b) => a + b, 0); // 24
                      
            console.log(result);`}
          <Explain variant="info">
            Эцэст нь бүх санаануудыг нэгтгэж **map, filter, reduce**-ээр өгөгдлийг цэвэр функциональ байдлаар хувиргав.
          </Explain>
        </CodeBlock>
      </div>
     
    </div>
  );
}

export default Chapter3;
