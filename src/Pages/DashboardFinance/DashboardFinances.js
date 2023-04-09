import React, {useState, useContext} from "react";
import './DashboardFinance.css'
import BarChart from "../../Components/AllChart/BarChart";
import LineChart from "../../Components/AllChart/LineChart"
import {DashboardContext} from "../../context/DashboardContext";

function DashboardFinances () {

    const {changeYear, dataChart, yearData} = useContext(DashboardContext)
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
                <LineChart data={dataChart.chart2} name={'Nombres d\'abones'} />
                <LineChart data={dataChart.chart3} name={'Nombres de clients'} />
                <BarChart data={dataChart.chart4} name={'Budget Marketing'}  />
            </div>
        </div>
    )
}

export default DashboardFinances