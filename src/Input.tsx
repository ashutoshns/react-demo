import { Dispatch, SetStateAction, useState, useRef } from "react";
import "./styles.css";
import Task from "./task.model";

type Props = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

export default function Input({ tasks, setTasks }: Props) {
  const [newTask, setNewTask] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  function addTodo() {
    if (tasks.some((task) => task.description === newTask)) {
      return;
    }

    setTasks(
      tasks.concat({
        description: newTask,
        completed: false
      })
    );
    setNewTask("");

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div className="InputWrapper">
      <input
        className="Input"
        type="text"
        name="newTask"
        value={newTask}
        ref={inputRef}
        onKeyDown={(event) => (event.key === "Enter" ? addTodo() : () => {})}
        onChange={(event) => setNewTask(event.target.value)}
      ></input>
      <img
        className="Add"
        src="./circle-plus.svg"
        alt="Add"
        onClick={addTodo}
      ></img>
    </div>
  );
}
