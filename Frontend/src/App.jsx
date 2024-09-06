import Signup from "./Components/Signup";
import Courses from "./Courses/Courses";
import Home from "./Home/Home";
import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/AuthorizationProvider";
export default function App() {
  const[authUser,setauthUser] = useAuth();
    console.log(authUser);
  return (<>
  {/* <Home />
  <Course /> */}
    <div className='dark:bg-slate-900 dark:text-white'>

  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element = {authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path="/signup" element = {<Signup/>}/>
      
  </Routes>
  <Toaster />
  </div>

  </>
  );
}



