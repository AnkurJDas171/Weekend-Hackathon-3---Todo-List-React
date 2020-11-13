import React from "react";
import EnDButtons from "./EditandDeleteButton";

export default function List({ taskList,handelEdit,handelDelete,saveEdit,textChange }) {
  
  

  return (
    <>
      <ul>
        {taskList.map((element, index) => (
          <li className="list" key={element.task}>
            {element.task}
            <EnDButtons
              elementIndex={index}
              handelEdit={handelEdit}
              handelDelete={handelDelete}
              displayEditTextArea={element.edit}
              saveChanges={()=>saveEdit(index)}
              handelTextEdit={(value)=>textChange(index,value)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
