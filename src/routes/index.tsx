import Login from "../modules/login/views/Login";
import Dashboard from "../modules/dashboard/views/Dashboard";
import { Routes, Route } from "react-router-dom";

function index() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default index;
