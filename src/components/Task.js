import React from "react";

function Task({text, category, onDelete}) {
  function handleClick(){
    onDelete(text)
  }

  return (
    <div className="task">
      <div className="label" value={text}>{category}</div>
      <div className="text" value={text}>{text}</div>
      <button value={text} onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
