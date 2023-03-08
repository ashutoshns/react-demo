import { Dispatch, SetStateAction } from "react";
import Task from "./task.model";

type Props = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

export default function List({ tasks, setTasks }: Props) {
  function removeTask(task: Task) {
    setTasks(tasks.filter((item) => item.description !== task.description));
  }

  function toggleCheckbox(task: Task) {
    setTasks(
      tasks
        .filter((item) => item.description !== task.description)
        .concat({ description: task.description, completed: !task.completed })
    );
  }

  return (
    <div>
      <ul>
        {tasks.map((item: Task) => (
          <li>
            <span className="taskName">
              {item?.description}
              <img
                className="Check"
                src={
                  !item?.completed
                    ? "./circle-check-normal.svg"
                    : "./circle-check-solid.svg"
                }
                alt="check"
                onClick={() => toggleCheckbox(item)}
              ></img>
              <img
                className="Remove"
                src="./circle-minus.svg"
                alt="remove"
                onClick={() => removeTask(item)}
              ></img>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
