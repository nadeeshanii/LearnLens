import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Students from "../pages/Students";
import Prediction from "../pages/Prediction";
import AppShell from "../components/AppShell";


const AppRoutes = () => {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route element={<AppShell />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/students" element={<Students />} />

          <Route path="/prediction" element={<Prediction />} />

        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />


      </Routes>

    </BrowserRouter>

  );

};


export default AppRoutes;