import React from "react";
import "./../styles/App.css";


export default function App() {


  const [taskName, setTaskName] = React.useState("");
  const [taskList, setTaskList] = React.useState([]);

  const handelChange = (value) => {
    if (value === " ") {
      return;
    }

    setTaskName(value);
  };

  const handelClick = () => {
    if (taskName === "") {
      return;
    }

    let taskListCopy = [...taskList];
    let newTaskObject = { task: "", edit: false, editValue: "" };
    newTaskObject.task = taskName;

    taskListCopy.push(newTaskObject);
    setTaskName("");
    setTaskList(taskListCopy);
  };

  const handelEdit = (elementIndex) => {
    //console.log(elementIndex);
    let taskListCopy = [...taskList];
    taskListCopy[elementIndex].edit = true;
    //console.log(taskListCopy);
    setTaskList(taskListCopy);
  };

  const handelDelete = (elementIndex) => {
    let taskListCopy = [...taskList];
    taskListCopy.splice(elementIndex, 1);
    setTaskList(taskListCopy);
  };

  const handelEditSave = (elementIndex) => {
    if (taskList[elementIndex].editValue === "") {
      return;
    }
    let taskListCopy = [...taskList];
    taskListCopy[elementIndex].task = taskListCopy[elementIndex].editValue;
    taskListCopy[elementIndex].editValue = "";
    taskListCopy[elementIndex].edit = false;

    setTaskList(taskListCopy);
  };

  const handelEditChanges = (elementIndex, value) => {
    //editValue
    if (value === " ") {
      return;
    }
    let taskListCopy = [...taskList];
    taskListCopy[elementIndex].editValue = value;
    setTaskList(taskListCopy);
  };



  return (
    <div id="main">
    
    
    <textarea
        id="task"
        name="task"
        value={taskName}
        onChange={(event) => handelChange(event.target.value)}
      ></textarea>

      <button id="btn" disabled={!taskName} onClick={handelClick}>
        save
      </button>
      <ul>
        {taskList.map((element, index) => (
          <>
            <li className="list" key={element.task}>
              {element.task}
            </li>
            {!element.edit && (
              <>
                <button className="edit" onClick={() => handelEdit(index)}>
                  edit
                </button>
                <button className="delete" onClick={() => handelDelete(index)}>
                  delete
                </button>
              </>
            )}

            {element.edit && (
              <>
                <textarea
                  className="editTask"
                  value={element.editValue}
                  onChange={(event) =>
                    handelEditChanges(index, event.target.value)
                  }
                ></textarea>
                <button
                  className="saveTask"
                  disabled={!element.editValue}
                  onClick={() => handelEditSave(index)}
                >
                  save
                </button>
              </>
            )}
          </>
        ))}
      </ul>
    
    
    
    
    </div>
  );
}
