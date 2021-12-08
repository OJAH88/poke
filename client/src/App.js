// import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Feed from "./components/feed/Feed"
import Topbar from "./components/topbar/Topbar"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react'
import React, { useHistory, useParams } from "react-router"



function App() {

  // return (
  // <BrowserRouter>
  //   <div className="App">
  //     <Topbar />
  //     <div className="content">
  //       <Routes>
  //         <Route path="/" element={<Feed />} />
  //         <Route path="/signup" element={<Register />} />
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/me" element={<Profile />} />
  //       </Routes>
  //       </div>
  //       </div>
  // </BrowserRouter>
  // )}

  return <Profile />
}

export default App;
