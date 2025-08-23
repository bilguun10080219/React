// Энгийн, гадны сангүй code block
 function CodeBlock({ label, children }) {
  return (
    <div className="lr-code">
      {label && <div className="lr-code__label">{label}</div>}
      <pre><code>{children}</code></pre>
    </div>
  );
}
export default CodeBlock