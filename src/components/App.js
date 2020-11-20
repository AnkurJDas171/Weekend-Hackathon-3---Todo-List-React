import React from "react";
import "./../styles/App.css";
import Button from "./Button";
import TextArea from "./TextArea";
import List from "./List";

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



  // const [listItemEntry, setListItemEntry] = React.useState("");
  // const [taskList, setTaskList] = React.useState([]);

  // const handelSaveButton = () => {
  //   let listItemEntryCopy = listItemEntry;
  //   if (listItemEntryCopy === "") {
  //     return;
  //   }

  //   //console.log("button called");

  //   const listCopy = [...taskList];
  //   const elementObj = { task: "", edit: false, editValue: "" };

  //   elementObj.task = listItemEntryCopy;
  //   listItemEntryCopy = "";
  //   listCopy.push(elementObj);

  //   setListItemEntry(listItemEntryCopy);
  //   setTaskList(listCopy);
  //   //console.log(listItemEntry, listItemEntryCopy);
  // };

  // const handelListEntry = (value) => {
  // // const handelListEntry = () => {
  // //   let value = document.getElementById("task").value;
  //   //let listItemEntryCopy = listItemEntry;
  //   if (value === " ") {
  //     return;
  //   }
  //   let listItemEntryCopy = value;
  //   setListItemEntry(listItemEntryCopy);
  // };

  // const handelElementDelete = (elementIndex) => {
  //   console.log(elementIndex);
  //   const taskListCopy = taskList.filter((elemets, index) => {
  //     return index !== elementIndex;
  //   });

  //   setTaskList(taskListCopy);
  //   console.log(taskListCopy, taskList);
  // };

  // const handelElementEdit = (index) => {
  //   const taskListCopy = [...taskList];
  //   taskListCopy[index].edit = true;
  //   setTaskList(taskListCopy);
  //   console.log(taskList, index);
  // };

  // const handelSaveEdit = (index) => {
  //   const taskListCopy = [...taskList];
  //   if (taskListCopy[index].editValue === "") {
  //     //taskListCopy[index].edit = false;
  //     return;
  //   }
  //   taskListCopy[index].task = taskListCopy[index].editValue;
  //   taskListCopy[index].editValue = "";
  //   taskListCopy[index].edit = false;
  //   setTaskList(taskListCopy);
  // };
  // const handelTextEdit = (index, value) => {
  //   console.log(value);
  //   const taskListCopy = [...taskList];
  //   taskListCopy[index].editValue = value;
  //   setTaskList(taskListCopy);
  // };
  return (
    <div id="main">
      {/* //Do not alter main div
	//Please do not alter the functional component as tests depend on the type of component. */}
    
    
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
    
    
    
    {/* <TextArea
        id="task"
        handelText={handelListEntry}
        displayText={listItemEntry}
      />
      <Button id="btn" isTextAreaEmpty={listItemEntry} handelClick={handelSaveButton} />
      <List
        taskList={taskList}
        displayText={listItemEntry.value}
        handelEdit={handelElementEdit}
        handelDelete={handelElementDelete}
        //handelTextEdit={editTextEntry}
        saveEdit={handelSaveEdit}
        textChange={handelTextEdit}
      /> */}
    </div>
  );
}
