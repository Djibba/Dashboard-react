import React, {useContext, useState} from "react";
import {DashboardContext} from "../../context/DashboardContext";
import PieChart from "../../Components/AllChart/PieChart";
import './DashboardEmployees.css'

function DashboardEmployees () {

    
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
                <PieChart data={dataChart.chart5} labels={['Marketing', 'Securite', 'Infos']}  />
                <PieChart data={dataChart.chart6} labels={['Marketing', 'Securite', 'Infos']} />
                <PieChart data={dataChart.chart7} labels={['Marketing', 'Securite', 'Infos']} />
                <PieChart data={dataChart.chart8} labels={['Marketing', 'Securite', 'Infos']}  />
            </div>
        </div>
    )
}

export default DashboardEmployees