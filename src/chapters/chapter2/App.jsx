import CodeBlock from "../../components/CodeBlock";
import Explain from "../../components/Explain";
import "../../learn.css";
function Chapter2() {
  return (
   <div>
      <h2>Emerging JavaScript</h2>

        <div className="lr-section">
           <CodeBlock label="let / const">
                {`let a = 10
                a = 20 // зөв
                
                const b = 30
                // b = 40 ❌ (алдаа)`}
           
           <Explain variant="info">React-д: ихэнхдээ <b>const</b>-ыг ашигладаг. Учир нь хувьсагчийн утга дахин өөрчлөгдөхгүй. <b>let</b>-ийг state бусад түр хадгалах зүйлд ашиглаж болно.</Explain>
           
                {`const AppTitle = "My React App"

                function Header() {
                  return <h1>{AppTitle}</h1>}`}
           </CodeBlock>
        </div>


        <div className="lr-section">
            <CodeBlock label="Arrow Functions">
                {`const add = (x, y) => x + y
                console.log(add(2, 3)) // 5`}

            <Explain variant="info">React-д: arrow function-ууд нь <b>this</b>-ийн хүрээг автоматаар хадгалдаг тул event handler болон жижиг компонент бичихэд тохиромжтой.</Explain>
                
                {`const Button = () => <button>Click me</button>`}
            </CodeBlock>
        </div>


        <div className="lr-section">
          <CodeBlock label="Template Literals">
                {`const name = "Bilguun"
                console.log(\`Сайн уу, \${name}!\`)`}

            <Explain variant="info">React-д: динамик утгыг мөрөнд оруулах, className-ийг нөхцөлтэй холбох зэрэгт ашиглана.</Explain>
                
                {`function Greeting({ name }) {
                  return <p>{\`Сайн уу, \${name}!\`}</p>}`}
          </CodeBlock>
        </div>


        <div className="lr-section">
          <CodeBlock label="Object Literal Shorthand & Computed Keys">
                {`const age = 25
                const person = { name: "Bilguun", age } // товчилсон бичиглэл`}

            <Explain variant="info">React-д: объектын утгуудыг props болгон дамжуулахад богино бичлэг болж өгнө. Мөн dynamic key буюу хувьсагчаас түлхүүрийн нэр үүсгэж болно.</Explain>
                
                {`function Profile({ name, age }) {
                  return <p>{name} — {age}</p>
                }
                
                const user = { name: "Bilguun", age: 25 }
                <Profile {...user} />`}
          </CodeBlock>
        </div>


        <div className="lr-section">
          <CodeBlock label="Destructuring">
                {`const user = { name: "Bilguun", age: 25 }
                const { name, age } = user
                console.log(name, age)`}

                <Explain variant="info">React-д: props эсвэл state дотроос шууд утгуудыг задлаж авахад хамгийн тохиромжтой. Кодыг илүү цэвэр болгож өгдөг.</Explain>
                
                {`function Profile({ name, age }) {
                  return <p>{name} нас: {age}</p>
                }`}
          </CodeBlock>
        </div>
        
        
        <div className="lr-section">
          <CodeBlock label="Rest / Spread">
                {`const numbers = [1, 2, 3]
                const newNumbers = [...numbers, 4, 5] // [1,2,3,4,5]`}
        
            <Explain variant="info">React-д: props дамжуулах, массив/объектын хуучин өгөгдлийг хуулж авч шинэ утгууд нэмэхэд ашиглана. State шинэчлэхэд маш чухал.</Explain>
                
                {`function List({ items }) {
                  return <ul>{items.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                }
                
                const data = ["React", "Odoo", "ERP"]
                <List items={[...data, "AI"]} />`}
          </CodeBlock>
        </div>
        
        
        <div className="lr-section">
          <CodeBlock label="Default Parameters">
                {`function greet(name = "Хэрэглэгч") {
                  return \`Сайн уу, \${name}\`
                }
                console.log(greet()) // Сайн уу, Хэрэглэгч`}

            <Explain variant="info">React-д: компонентын <b>default props</b>-той адилхан зарчим. 
                Хэрэв хэрэглэгчээс props ирэхгүй бол автоматаар анхны утга авна.</Explain>
                
                {`function Greeting({ name = "Зочин" }) {
                  return <h2>Сайн уу, {name}!</h2>
                }`}
          </CodeBlock>
        </div>
                
                
        <div className="lr-section">
          <CodeBlock label="Modules (import/export)">
                {`// math.js
                export const add = (x, y) => x + y
                
                // app.js
                import { add } from "./math.js"
                console.log(add(2, 3))`}

            <Explain variant="info">React-д: бүх компонент, util функцуудыг тусад нь файлд хадгалж <b>import/export</b> ашиглан кодоо цэгцтэй зохион байгуулдаг.</Explain>
                
                {`// Button.js
                export default function Button() {
                  return <button>Click</button>
                }
                
                // App.js
                import Button from "./Button"`}
          </CodeBlock>
        </div>
        
        
        <div className="lr-section">
          <CodeBlock label="Class">
            {`class Person {
              constructor(name) {
                this.name = name
              }
              greet() {
                return \`Сайн уу, \${this.name}\`
              }
            }`}

        <Explain variant="info">React хуучин үед class-компонент ашигладаг байсан. Одоо голчлон <b>function component + hooks</b> ашигладаг ч class ойлголт нь JavaScript-д чухал хэвээр.</Explain>
          </CodeBlock>
        </div>
        
        
        <div className="lr-section">
          <CodeBlock label="Promises / async-await">
            {`async function fetchData() {
              const res = await fetch("https://jsonplaceholder.typicode.com/users")
              const data = await res.json()
              console.log(data)
            }
            fetchData()`}

        <Explain variant="info">React-д: серверээс өгөгдөл татахдаа хамгийн түгээмэл ашигладаг. <b>useEffect</b>-тэй хослуулан API дуудахдаа хэрэглэнэ.</Explain>
        
            {`import { useEffect, useState } from "react"
    
            function Users() {
              const [users, setUsers] = useState([])
            
              useEffect(() => {
                async function load() {
                  const res = await fetch("https://jsonplaceholder.typicode.com/users")
                  const data = await res.json()
                  setUsers(data)
                }
                load()
              }, [])
    
              return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
            }`}
          </CodeBlock>
        </div>

    </div>
  );
}

export default Chapter2;
