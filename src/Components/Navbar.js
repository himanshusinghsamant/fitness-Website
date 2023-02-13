import React from "react";
import "./Navbarstyle.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import react, {useState} from "react"


const Navbar = () => {
  const [click, setclick] = useState(false)
  const handleclick =()=> setclick(!click)

  const [color, setcolor] = useState(false)
  const changeColor=()=>{
    if(window.scrollY >=100){
      setcolor(true);
    }
    else{
      setcolor(false);
    }
  }
  window.addEventListener("scroll",changeColor);
  return (
    <div className={color ? "nav-items nav-items-bg" : "nav-items"}>
      <div className="web-title">
        <h2 className="neon" data-text="Fit / BODY">Fit / BODY</h2>
        {/* <h1>BODY</h1> */}
      </div>
      <div className= {click ? "nav-tags.active": "nav-tags"}>
        <div className="cross" onClick={handleclick}>
        <FaTimes size={20} sttyle={{ color: "white" }} />
        </div>
        <Link to={"/"}>Home</Link>
        <Link to={"/videos"}>Videos</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/workout"}>Workouts</Link>
        <Link to={"/contact"}>Contact</Link>
        
      </div>
      <div className="tags">
        <span>
          <Link to={"/cart"}><i className="fa-solid fa-bag-shopping"></i></Link>
        </span>
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span> 
      </div>
      <div className="hamburger" onClick={handleclick}>
          <FaBars size={20} sttyle={{ color: "white" }} />
         
        </div>
    </div>
  );
};

export default Navbar;
