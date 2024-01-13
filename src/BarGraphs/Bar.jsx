import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './Bar.css';
// import { getTopSector } from './getTopSector';
// import { sectorData } from './sector';


const BarGraph = ({graphlabels, graphdata}) => {

  const [labels, setLabels] = useState([]);
  const [val, setVal] = useState([]);
  const [bar, setBar] = useState(7);

  // Sample data for the bar chart
  const data = {
    labels: labels,
    datasets: [{
      label: 'Events',
      data: val,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1,
      hoverOffset: 10
    }]
  };

  // Configuration options for the chart
  const options = {
    scales: {
      x:{
        beginAtZero: true,
        grid : {
            color : 'rgba(255, 255, 255, 0.2)',
        },
        ticks : {
            color : '#ffffff'
        },
        
        },
      y: {
        beginAtZero: true,
        grid : {
            color : 'rgba(255, 255, 255, 0.2)',
        },
        ticks : {
            color : '#ffffff',
            // padding : '.11rem'
        },
       
      },
    },
    plugins: {
        legend: {
            display: true, // Set display property to false to hide the legend
            labels : {
                boxWidth : 0,
                boxHeight : 0,
                color : '#ffffff'
            }
          },
      tooltip: {
        enabled: true,
        mode: 'index',
        callbacks: {
          title: (context) => context[0].formattedValue + ' events',
          beforeTitle: (context) => context[0].label + ' :- ',
          label: () => null,
        },
      },
    },
    
  };

  useEffect(() => {
     setLabels((prevValue) => {
        // const finalObj = getTopSector(graphlabels);
        return graphlabels;
     });

     setVal((prevValue) => {
        // const finalObj = getTopSector(graphdata);
        return graphdata;
     });
  }, []);

  useEffect(() => {
    // Get the canvas element
    const ctx = document.getElementById('myBarChart').getContext('2d');

    // Create the bar chart
    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    // Cleanup: Destroy the chart when the component is unmounted
    return () => {
      myBarChart.destroy();
    };
  }, [data, options]);

 const updateBar = (event) => {
    const val = event.target.value;
    // console.log(val);

    setBar((prevValue) => val);
 
    setLabels(graphlabels.slice(0, val));
    setVal(graphdata.slice(0, val))
 }

  return (
    <>
      {/* Create a canvas element to render the chart */}
        <div className="sel">
        {/* <select name="selectOption" id="select" value = "" >
            <option value="top5">Top 5</option>
            <option value="top6">Top 6</option>
            <option value="top7">Top 7</option>
        </select> */}

  <select className="form-select select" aria-label="Default select example" style={{height : '1.5rem', width : '5rem', fontSize : '.9rem', backgroundColor : 'transparent', color : '#fff'}} onChange={updateBar} value={bar}>
  <option defaultChecked value="7">Top :- 7</option>
  <option value="6">Top :- 6</option>
  <option value="5">Top :- 5</option>
  <option value="4">Top :- 4</option>
  </select>
        </div>
      <canvas id="myBarChart"></canvas>
    </>
  );
};

export default BarGraph;
