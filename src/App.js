import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
import Footer from "./components/Footer";

export default function App() {
  const [listItems, setList] = React.useState([]);
  const [isDone, setIsDone] = React.useState(false);
  function add(inputText) {
    if (inputText !== "") {
      setList((prevState) => {
        return [...prevState, inputText];
      });
    } else {
      alert("Text field cannot be empty");
    }
  }

  function done(event) {
    setIsDone((prevState) => !prevState);
    const liEl = event.target;
    if (isDone) {
      liEl.style.textDecoration = `line-through`;
    } else {
      liEl.style.textDecoration = `none`;
    }
  }

  function deleteList(id) {
    console.log("clicked");
    setList((prevState) => {
      return prevState.filter((item, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <Input addItem={add} />
      <ul className="list">
        {listItems.map((item, index) => {
          return (
            <List
              key={index}
              id={index}
              listItem={item}
              click={done}
              onDelete={deleteList}
            />
          );
        })}
      </ul>
      <Footer />
    </div>
  );
}
