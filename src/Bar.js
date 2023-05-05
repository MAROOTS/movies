import React, { useEffect, useState } from "react";
import "./bar.css";
import pic from "./images/img22.png";
import pic1 from "./images/img33.jpg";

const Bar = () => {
  const [show,handleshow]=useState(false);
    useEffect(()=>{
      window.addEventListener("scroll",()=>{
        if(window.screenY >100){
          handleshow(true)
        }else handleshow(false);
      });
      return()=>{
        window.removeEventListener("scroll");
      };
    },[]);
  return (
    <div className={`bar ${show && "bar_bg"}`}>
      <img className="bar_logo" src={pic} alt="Movie logo" />
      <img className="bar_avatar" src={pic1} alt="Movie logo" />
    </div>
  );
};

export default Bar;
