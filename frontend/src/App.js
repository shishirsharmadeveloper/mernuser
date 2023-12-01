import React from "react";
import GetUser from "./components/GetUser";
import UserRegister from "./components/UserRegister.js";
import {Routes, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="container">
    <div className="row">
    <Routes>
      <Route path="/" element={<GetUser/>}/>
      <Route path="userregister" element={<UserRegister/>}/>
    </Routes>    
    </div>
    </div>
  );
}

export default App;
