import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Users from "./Page/User";

export default function RouterApp () {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Users/>}/>
        <Route exact path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}