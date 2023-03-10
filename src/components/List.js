import React from "react";

export default function List(props) {
  return (
    <div>
      <li onClick={props.click}>{props.listItem}</li>
      <i
        className="fa-solid fa-trash trash"
        onClick={() => {
          props.onDelete(props.id);
        }}
      ></i>
    </div>
  );
}
