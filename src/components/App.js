import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [statefulTasks, setTasks] = useState(TASKS)
  const [selectedCategory, setCategory] = useState('All')

  function removeTask(deleteText){
    const updatedTasks = statefulTasks.filter(task =>
      task.text !== deleteText)
    setTasks(updatedTasks)
  }

  function addTask(newTask){
    const updatedTasks = [...statefulTasks, newTask];
    setTasks(updatedTasks);
  }

  const displayTasks = statefulTasks.filter(task =>{
      if(selectedCategory === 'All') return true;
      return task.category === selectedCategory;
    })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onCatSelect={setCategory} />
      <NewTaskForm categories={CATEGORIES.filter(category => category !== "All")} onTaskFormSubmit={addTask} />
      <TaskList tasks={displayTasks} onDelete={removeTask}/>
    </div>
  );
}

export default App;
