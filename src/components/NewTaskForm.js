import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [taskText, setText] = useState('');
  const [taskCat, setNewCat] = useState('Code');
  const newItem = {
    text: taskText,
    category: taskCat
  }

  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit(newItem);
    setText('')
    setNewCat('Code')
  }

  return (
    <form 
      className="new-task-form"
      onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          value={taskText}
          onChange={e => setText(e.target.value)} 
        />
      </label>
      <label>
        Category
        <select 
          onChange={e => setNewCat(e.target.value)}
          value ={taskCat}
          name="category"
        >
          {categories.map(category => {
            return(
              <option 
                value={category}
                key={category}>
                {category}
              </option>
            )
          })}
        </select>
      </label>
      <input type="submit" value={"Add task"} />
    </form>
  );
}

export default NewTaskForm;
