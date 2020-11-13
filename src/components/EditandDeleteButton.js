import React from "react";
import EditandSave from "./EditandSave";

export default function EnDButtons({
  elementIndex,
  handelEdit,
  handelDelete,
  displayEditTextArea,
  saveChanges,
  handelTextEdit
}) {
  return (
    <>
      {!displayEditTextArea && (
        <>
          <button onClick={() => handelEdit(elementIndex)}>edit</button>
          <button onClick={() => handelDelete(elementIndex)}>delete</button>
        </>
      )}

      {displayEditTextArea && (
        <EditandSave
          saveChanges={saveChanges}
          handelTextEdit={handelTextEdit}
        />
      )}
    </>
  );
}
