import React from "react";

export default function EditandSave({
  saveChanges,
  handelTextEdit,
  isEditTextAreaEmpty
}) {
  return (
    <>
      <textarea
        className="editTask"
        onChange={(event) => handelTextEdit(event.target.value)}
      ></textarea>
      <button
        className="saveTask"
        disabled={!isEditTextAreaEmpty}
        onClick={saveChanges}
      >
        Save
      </button>
    </>
  );
}
