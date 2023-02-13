import React from "react";
import VideoPlayer from "react-player";

const Vdo_box = (props) =>{
  return (
    <div>
      <div className="box-videos">
        <VideoPlayer controls url={props.vdo.video} />
      </div>
    </div>
  );
};

export default Vdo_box;
