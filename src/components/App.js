import React from "react";
import "./../styles/App.css";
import Button from "./Button";
import TextArea from "./TextArea";
import List from "./List";

export default function App() {
  const [listItemEntry, setListItemEntry] = React.useState("");
  const [taskList, setTaskList] = React.useState([]);

  const handelSaveButton = () => {
    let listItemEntryCopy = listItemEntry;
    if (listItemEntryCopy === "") {
      return;
    }

    //console.log("button called");

    const listCopy = [...taskList];
    const elementObj = { task: "", edit: false, editValue: "" };

    elementObj.task = listItemEntryCopy;
    listItemEntryCopy = "";
    listCopy.push(elementObj);

    setListItemEntry(listItemEntryCopy);
    setTaskList(listCopy);
    //console.log(listItemEntry, listItemEntryCopy);
  };

  const handelListEntry = (value) => {
    //let listItemEntryCopy = listItemEntry;
    if (value === " ") {
      return;
    }
    let listItemEntryCopy = value;
    setListItemEntry(listItemEntryCopy);
  };

  const handelElementDelete = (elementIndex) => {
    console.log(elementIndex);
    const taskListCopy = taskList.filter((elemets, index) => {
      return index !== elementIndex;
    });

    setTaskList(taskListCopy);
    console.log(taskListCopy, taskList);
  };

  const handelElementEdit = (index) => {
    const taskListCopy = [...taskList];
    taskListCopy[index].edit = true;
    setTaskList(taskListCopy);
    console.log(taskList, index);
  };

  const handelSaveEdit = (index) => {
    const taskListCopy = [...taskList];
    if (taskListCopy[index].editValue === "") {
      //taskListCopy[index].edit = false;
      return;
    }
    taskListCopy[index].task = taskListCopy[index].editValue;
    taskListCopy[index].editValue = "";
    taskListCopy[index].edit = false;
    setTaskList(taskListCopy);
  };
  const handelTextEdit = (index, value) => {
    console.log(value);
    const taskListCopy = [...taskList];
    taskListCopy[index].editValue = value;
    setTaskList(taskListCopy);
  };
  return (
    <div id="main">
      {/* //Do not alter main div
	//Please do not alter the functional component as tests depend on the type of component. */}
      <TextArea
        id="task"
        handelText={handelListEntry}
        displayText={listItemEntry}
      />
      <Button id="btn" handelClick={handelSaveButton} />
      <List
        taskList={taskList}
        displayText={listItemEntry.value}
        handelEdit={handelElementEdit}
        handelDelete={handelElementDelete}
        //handelTextEdit={editTextEntry}
        saveEdit={handelSaveEdit}
        textChange={handelTextEdit}
      />
    </div>
  );
}
