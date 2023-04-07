import React from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom"
import DashboardEmployees from "./Pages/DashboardEmployees/DashboardEmployees";
import DashboardFinances from "./Pages/DashboardFinance/DashboardFinances";
import Sidebar from "./Components/Sidebar/Sidebar";

export default function App() {
  return (
    <>
        <Sidebar />
      <Routes>
        <Route path='/' element={<DashboardFinances/>} />
        <Route path='/dashboardEmployees' element={<DashboardEmployees/>} />
      </Routes>
    </>
  );
}
