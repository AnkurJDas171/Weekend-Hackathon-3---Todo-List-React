import React from "react";

export default function TextArea({ handelText, displayText }) {
  //console.log(`displaytext ${displayText}`);
  return (
    <>
      <textarea
        id="task"
        name="task"
        value={displayText}
        onChange={(event) => {
          handelText(event.target.value);
        }}
      ></textarea>
    </>
  );
}
