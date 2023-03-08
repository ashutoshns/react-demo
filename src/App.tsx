import { useState } from "react";
import "./styles.css";
import Input from "./Input";
import List from "./List";
import Task from "./task.model";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <div className="App">
      <h1>JUST DO IT</h1>
      <Input tasks={tasks} setTasks={setTasks}></Input>
      <br />
      <List tasks={tasks} setTasks={setTasks}></List>
    </div>
  );
}
