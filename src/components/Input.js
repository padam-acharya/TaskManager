import React from "react";

export default function Input(props) {
  const [text, setText] = React.useState("");

  function handleChange(event) {
    const { value } = event.target;
    setText(value);
  }
  return (
    <div className="container">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Your task for today"
        value={text}
      />
      <button
        onClick={() => {
          props.addItem(text);
          setText("");
        }}
        className="btn"
      >
        Add
      </button>
    </div>
  );
}
