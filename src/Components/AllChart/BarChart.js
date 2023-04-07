import React from "react";
import {Bar} from "react-chartjs-2";
import fulldata from "../../context/fulldata";

function BarChart(){
    return(
        <div className='chart-container'>
            <Bar
                redraw={true}
                data={{
                    labels: ["Jan/Feb", "Mar/Avr", "Mai/Juin", "Juil/Aout", "Sept/Oct", "Nov/Dec"]
                }}
            />
        </div>
    )
}

export default BarChart