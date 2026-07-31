import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login/Login";

import ManageLaboratory from "./Pages/ManageLaboratory/ManageLaboratory";

import Dashbord from "./Pages/Dashbord/Dashbord";

function App() {
  return (
    <Routes>
      {/* Login Page */}

      <Route path="/" element={<Login />} />

      {/* Admin Page */}

      <Route path="/admin/managelaboratory" element={<ManageLaboratory />} />

      {/* Laboratory User Page */}

      <Route path="/laboratory/dashboard" element={<Dashbord />} />
    </Routes>
  );
}

export default App;
