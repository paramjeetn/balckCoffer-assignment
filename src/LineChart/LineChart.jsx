import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ yearObj }) => {
    const [lineLab, setLineLab] = useState([]);
    const [lineDat, setLineDat] = useState([]);

    useEffect(() => {
        if (yearObj) {
            const keys = Object.keys(yearObj);
            const values = Object.values(yearObj);
            setLineLab(keys);
            setLineDat(values);
        }
    }, [yearObj]);

    useEffect(() => {
        const ctx = document.getElementById('myLineChart').getContext('2d');

        if (lineLab.length > 0 && lineDat.length > 0) {
            const myLineChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: lineLab,
                    datasets: [
                        {
                            label: 'Year Data',
                            data: lineDat,
                            fill: false,
                            borderColor: 'rgba(75,192,192,1)',
                            pointRadius: 5,            // Set pointRadius
                            pointHoverRadius: 4,
                            lineTension: 0,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            grid: {
                                color : 'rgba(255, 255, 255, 0.2)',
                            },
                            ticks: {
                                color: '#ffffff'
                            }
                        },
                        y: {
                            grid: {
                                color : 'rgba(255, 255, 255, 0.2)',
                            },
                            ticks: {
                                color: '#ffffff'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: '#ffffff'
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
                    }
                }
            });

            return () => {
                myLineChart.destroy();
            };
        }
    }, [lineLab, lineDat]);

    return (
        <>
            <canvas id="myLineChart"></canvas>
        </>
    );
};

export default LineChart;
