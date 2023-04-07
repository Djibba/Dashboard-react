import React, {useState, useContext} from "react";
import './DashboardFinance.css'
import BarChart from "../../Components/AllChart/BarChart";
import {DashboardContext} from "../../context/DashboardContext";

function DashboardFinances () {

    const {changeYear, dataChart, yearData} = useContext(DashboardContext)

    console.log(dataChart, changeYear, yearData)

    return (
        <div className="global-container">
            <h1>Les résultats de l'année : {yearData}</h1>

            <form >
                <label htmlFor="year">Choisissez une année</label>
                <select onClick={changeYear} id="year">
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                </select>
            </form>

            <div className="dashboard-container">
                <BarChart data={dataChart.chart1} name={'Chiffres bimestriles'}  />
            </div>
        </div>
    )
}

export default DashboardFinances