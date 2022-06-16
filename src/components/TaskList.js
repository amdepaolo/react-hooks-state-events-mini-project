import React from "react";
import Task from "./Task"

function TaskList({tasks, onDelete}) {
  return (
    <div className="tasks">
      {tasks.map(task => {
        return (
          <Task text={task.text} category={task.category} key={task.text} onDelete={onDelete}/>
        )
      })}
    </div>
  );
}

export default TaskList;
