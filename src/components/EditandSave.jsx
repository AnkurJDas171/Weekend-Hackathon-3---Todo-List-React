import React from "react";

export default function EditandSave({ saveChanges, handelTextEdit }) {
  return (
    <>
      <textarea
        className="editTask"
        onChange={(event) => handelTextEdit(event.target.value)}
      ></textarea>
      <button className="saveTask" onClick={saveChanges}>
        Save
      </button>
    </>
  );
}
