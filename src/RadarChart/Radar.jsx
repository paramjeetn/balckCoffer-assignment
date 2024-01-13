import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import './Radar.css';

const RadarChart = ({ pestleData }) => {
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartInstance) {
      // If chartInstance exists, destroy it before creating a new one
      chartInstance.destroy();
    }

    // Initialize the chart when the component mounts
    const ctx = document.getElementById('myRadarChart').getContext('2d');
    const newChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: Object.keys(pestleData),
          datasets: [
            {
              label: 'PESTLE Analysis',
              data: Object.values(pestleData),
              backgroundColor: 'rgba(201,223,138,0.2)', // Transparent white background
              borderColor: 'rgba(201,223,138,1)', // White line color
              pointBackgroundColor: 'rgba(201,223,138,1)', // White point color
              pointBorderColor: 'rgba(255, 255, 255, 1)', // White point border color
            },
          ],
        },
        options: {
          scales: {
            r: {
              ticks : {
                color : '#fff',
                backdropColor : '#191c1f',
                stepSize: 70, // Adjust the step size here
              },  
              angleLines: {
                color: 'rgba(255, 255, 255, 0.5)', // Color of the angle lines
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.5)', // Color of the grid lines
              },
              pointLabels: {
                color: '#fff', // Color of the labels
              },
            },
          },
          legend: {
            labels: {
              fontColor: 'rgba(55, 255, 255, 1)', // Color of the legend labels
            },
          },
          plugins: {
            legend: {
                  labels: {
                          color: 'white' // Set the color of the legend text
                  },
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
    }
      });
  

    // Set the new chart instance to state
    setChartInstance(newChartInstance);

    // Cleanup: Destroy the chart when the component unmounts
    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [pestleData]);

  return (

    <>
       <canvas id="myRadarChart"></canvas>
    </>
  );
};

export default RadarChart;
