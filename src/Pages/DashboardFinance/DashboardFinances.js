import React, {useState, useContext} from "react";
import './DashboardFinance.css'
import BarChart from "../../Components/AllChart/BarChart";

function DashboardFinances () {
    return (
        <div className="global-container">
            <h1>Les résultats de l'année : 2020</h1>

            <form >
                <label htmlFor="year">Choisissez une année</label>
                <select id="year">
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                </select>
            </form>

            <div className="dashboard-container">
                <BarChart />
            </div>
        </div>
    )
}

export default DashboardFinances