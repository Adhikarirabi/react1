import React from "react";

function Todo(props) {
  return (
    <div className="Todo">
      <p className={props.completed ? "item completed" : "item"}>
        {props.item}
      </p>
      <button className="remove" onClick={props.removeSelf}>
        X
      </button>
      {!props.completed && (
        <button className="complete" onClick={props.completeSelf}>
          Complete
        </button>
      )}
    </div>
  );
}

export default Todo;
