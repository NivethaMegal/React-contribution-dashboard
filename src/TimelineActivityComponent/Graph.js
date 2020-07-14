import React from 'react'
import CanvasJSReact from "./Assets/Canvasjs.react";
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function Graph() {
    const options = {
        theme: "skyblue",
        animationEnabled: true,
        exportEnabled: true,
        data: [
        {
            type: "area",
            xValueFormatString: "DD/MM/YYYY",
            yValueFormatString: "Balance: $ #,##0.## ",
            dataPoints: [
                { x: new Date(2017, 0), y: 2.5},
                { x: new Date(2016, 1), y: 3.7},
                { x: new Date(2015, 5), y: 3.5},
                { x: new Date(2014, 8), y: 5.2},
                { x: new Date(2013, 9), y: 4.3},
                { x: new Date(2012, 5), y: 2.3},
                { x: new Date(2011, 8), y: 0}
            ]
        }
        ]
    }
    return (
        <div>
			<CanvasJSChart options = {options}/>
		</div>
    )
}
