import React from "react";

export default function Button({isTextAreaEmpty,handelClick}){

return (

  <>
    <button id="btn" disabled={!isTextAreaEmpty} onClick={handelClick}>Save</button>
  </>

);

}