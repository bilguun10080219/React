import React from "react";
import CodeBlock from "../../components/CodeBlock";
import Explain from "../../components/Explain";
import "../../learn.css"; 

 function Chapter1() {
  return (
    <div>
      <h2>Welcome to React</h2>

      <div className="lr-section">
        <CodeBlock label="Terminal">
{`# Check Node.js
$ node -v

# Check npm
$ npm -v

# Update npm (macOS)
$ sudo npm update -g npm

# Update npm (Windows)
$ npm update -g npm`}
        </CodeBlock>

        <Explain variant="info">
          Энэ хэсэгт Node.js болон npm-ийн хувилбараа шалгана.
          <div className="lr-muted">💡 Node.js 18 дээш байвал Vite сайн ажиллана.</div>
        </Explain>
      </div>

      <div className="lr-section">
        <CodeBlock label="Create project (Vite)">
{`npm create vite@latest my-app
cd my-app
npm install
npm run dev`}
        </CodeBlock>

        <Explain variant="tip">
          Vite нь хурдан хөгжүүлэлтийн сервертэй тул сурахад илүү эвтэйхэн.
        </Explain>
      </div>
    </div>
  );
}
export default Chapter1