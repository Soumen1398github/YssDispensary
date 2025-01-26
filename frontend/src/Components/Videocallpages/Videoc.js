import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./videocall.css";
import Afterbar from "../Navbar/Afterbar";
import Afterdctrnav from "../Navbar/Afterdctrnav";

function Videoc() {
  const [value, setValue] = useState();
  const [name,setName] = useState("")
  const navigate = useNavigate();
const [dctr,setDctr] = useState("")
  const handleJoinRoom = useCallback(() => {
    navigate(`/Videoc/Room/${value}`);
  }, [navigate, value]);
  useEffect(()=>{
    const isDctr = localStorage.getItem("dctr")
    const name = localStorage.getItem("name")
    setDctr(isDctr)
    setName(name)
  },[])
  return (
    <>
    {dctr==="doctor" ? <Afterdctrnav name={name}/> : <Afterbar name={name}/>}
      
      <div className="vid_call">
        <div className="vid_container">
          <h1 className="vid_heading1">Video Calling Page</h1>

          <input
            className="vid_input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Enter Room Code"
          />
          <button className="vid_button" onClick={handleJoinRoom}>
            Join
          </button>
        </div>
      </div>
    </>
  );
}

export default Videoc;
