import React from "react";
import './Searchbox.css';

const Searchbox =({change})=>{
   return (
    <div className="searchbar">
        <input type="search" onChange={change} placeholder="Search Song"></input>
    </div>
   );
}

export default Searchbox;