import { Routes, Route } from "react-router-dom";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
//import Login from "./Components/Login/Login";
//import Merge from "./Pages/ManageLaboratory/Merge";
//import CreateLaboratory from "./Pages/CreateLaboratory/CreateLaboratory";
//import ManageLaboratory from "./Pages/ManageLaboratory/ManageLaboratory";
//import Sidebar from "./Components/Sidebar/Sidebar";
//import StaffManage from "./Pages/StaffManage/StaffManage";
import Dashbord from "./Pages/Dashbord/Dashbord";
import PatientRegistation from "./Pages/PatientRegistation/PatientRegistation";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<ManageLaboratory />} />

    //   <Route path="createLaboratory" element={<CreateLaboratory />} />

    //   <Route path="/staffManage" element={<StaffManage />} />
    // </Routes>

    <Routes>
        <Route path="/" element={<Dashbord/>}/>

        <Route path="patientregistation" element={<PatientRegistation/>}/>
    </Routes>
    
  );
}

export default App;
