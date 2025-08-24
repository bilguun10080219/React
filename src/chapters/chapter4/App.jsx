import React from "react";

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
function Chapter4() {
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

export default Chapter4
