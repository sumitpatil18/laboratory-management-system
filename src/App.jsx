import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login/Login";

import ManageLaboratory from "./Pages/ManageLaboratory/ManageLaboratory";

import CreateLaboratory from "./Pages/CreateLaboratory/CreateLaboratory"

import Dashbord from "./Pages/Dashbord/Dashbord";

import PatientRegistation from "./Pages/PatientRegistation/PatientRegistration"

function App() {
  return (
    <Routes>
      {/* Login Page */}

      <Route path="/" element={<Login />} />

      {/* Admin Page */}

      <Route path="/admin/managelaboratory" element={<ManageLaboratory />} />

      <Route path="/admin/createLaboratory" element={<CreateLaboratory/>}/>

      {/* Laboratory User Page */}

      <Route path="/laboratory/dashboard" element={<Dashbord />} />

      <Route path="/laboratory/patientRegistration" element={<PatientRegistation/>}/>

    </Routes>
  );
}

export default App;
