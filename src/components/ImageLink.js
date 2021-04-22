import React from "react";
import "./ImageLink.css";

function ImageLink({ onImageLink , onButtonClick}) {
  return (
    <div>
      <p className="center">Paste your image Link here</p>
      <div className="form center pa4 br3 shadow-5">
        <input
          type="text"
          className="f4 pa2 w-70 center"
          onChange={onImageLink}
        ></input>
        <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple " onClick={onButtonClick}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default ImageLink;
