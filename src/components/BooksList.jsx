import React from "react";
import "../App.css";
import { Button } from "@mui/material";
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from "./HomePage";

const BooksList=()=>
{
    const handleButtonClick=()=>
    {
{/* <NavLink to="/HomePage">Home Page</NavLink> */}
    }

return(<>
<div className="list">This is book list</div>
{/* <button  onClick={handleButtonClick}>Click me!</button> */}
<Button  onClick={handleButtonClick} variant="contained">Home Page</Button>
</>)
};
export default BooksList;