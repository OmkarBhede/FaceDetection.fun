import React from "react";
import "./ImageFromLink.css";

function ImageFormLink({ imageURL }) {
  return (
    <div>
      <img id="inputImage" className="imageDiv" src={imageURL} alt=""></img>
    </div>
  );
}

export default ImageFormLink;
