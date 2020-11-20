import React from "react";
import EditandSave from "./EditandSave";

export default function EnDButtons({
  elementIndex,
  handelEdit,
  handelDelete,
  displayEditTextArea,
  saveChanges,
  handelTextEdit,
  taskEtidValue
}) {
  return (
    <>
      {!displayEditTextArea && (
        <>
          <button className="edit" onClick={() => handelEdit(elementIndex)}>edit</button>
          <button className="delete" onClick={() => handelDelete(elementIndex)}>delete</button>
        </>
      )}

      {displayEditTextArea && (
        <EditandSave
          saveChanges={saveChanges}
          handelTextEdit={handelTextEdit}
          isEditTextAreaEmpty={taskEtidValue}
        />
      )}
    </>
  );
}
