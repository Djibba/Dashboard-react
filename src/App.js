import React from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom"
import DashboardEmployees from "./Pages/DashboardEmployees/DashboardEmployees";
import DashboardFinances from "./Pages/DashboardFinance/DashboardFinances";
import Sidebar from "./Components/Sidebar/Sidebar";
import DashboardContextProvider from "./context/DashboardContext"

export default function App() {
  return (
    <DashboardContextProvider>
        <Sidebar />
      <Routes>
        <Route path='/' element={<DashboardFinances/>} />
        <Route path='/dashboardEmployees' element={<DashboardEmployees/>} />
      </Routes>
    </DashboardContextProvider>
  );
}
