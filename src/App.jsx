import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  function addTask() {
    if (newTitle.trim() === "" ) return;

    setTasks([...tasks, { title: newTitle, desc: newDesc, done: false }]);
    setNewTitle("");
    setNewDesc("");
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function toggleDone(index) {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <div className="app">
      <h1>TO-DO</h1>
      <div className="container">
        <div className="add-box">
          <input
            className="title"
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            className="des"
            type="text"
            placeholder="Describe"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
          />
          <button className="btn-action" onClick={addTask}>
            Add
          </button>
        </div>
 
        <h5 className="task">Tasks</h5>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <Card
                title={task.title}
                desc={task.desc}
                done={task.done}
                onRemove={() => removeTask(index)}
                onToggle={() => toggleDone(index)}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default App;
