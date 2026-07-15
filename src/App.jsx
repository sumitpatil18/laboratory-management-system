import {Routes, Route} from "react-router-dom";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
//import Login from "./Components/Login/Login";
//import Sidebar from './Components/Sidebar/Sidebar'
//import Merge from "./Pages/ManageLaboratory/Merge";
import CreateLaboratory from "./Pages/CreateLaboratory/CreateLaboratory";
//import Card from "./Components/Card/Card";  
//import Button from "./Components/Button/Button";
//import Inputfield from "./Components/InputField/Inputfield";

function App() {
  return (
    <Routes>
        <Route
        path="/"
        element={<CreateLaboratory/>}
       />

    </Routes>

  );
}


export default App
