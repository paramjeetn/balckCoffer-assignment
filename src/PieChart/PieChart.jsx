import React from 'react';
import Chart from 'chart.js/auto';
import {useEffect, useState} from 'react';
import './PieChart.css';

const PieChart = ({ topicVal }) => {
//   const [cat1, setCat1] = useState({});
//   const [cat2, setCat2] = useState({});
//   const [cat3, setCat3] = useState({});
  const [selectedCat1, setSelectedCat1] = useState('');
  const [selectedCat2, setSelectedCat2] = useState('');
  const [selectedCat3, setSelectedCat3] = useState('');

  const data = {
    labels: [selectedCat1, selectedCat2, selectedCat3],
    datasets: [{
      data: [topicVal[selectedCat1], topicVal[selectedCat2], topicVal[selectedCat3]],
      backgroundColor: [
        'rgba(233, 215, 88, 0.2)',
        'rgba(41, 115, 115, 0.2)',
        'rgba(255, 133, 82, 0.2)'
      ],
      borderColor: [
        'rgb(233, 215, 88)',
        'rgb(41, 115, 115)',
        'rgb(255, 133, 82)'
      ],
      hoverOffset: 4
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
  };

  useEffect(() => {
    const filterred = Object.keys(topicVal);
    setSelectedCat1(filterred[0]);
    setSelectedCat2(filterred[1]);
    setSelectedCat3(filterred[2]);
  }, [topicVal]);

    useEffect(() => {
   
    const ctx1 = document.getElementById('myPieChart').getContext('2d');

    if (ctx1 && data && options) {
        console.log('Creating chart with:', ctx1, data, options);
    
        const myPieChart = new Chart(ctx1, {
          type: 'doughnut',
          data: data,
          options: options,
        });

        return () => {
            myPieChart.destroy();
          };
    }
  
  }, [data, options, topicVal, selectedCat1, selectedCat2, selectedCat3]);

  const handleCat1Change = (e) => {
    setSelectedCat1(e.target.value);
  };

  const handleCat2Change = (e) => {
    setSelectedCat2(e.target.value);
  };

  const handleCat3Change = (e) => {
    setSelectedCat3(e.target.value);
  };

  return (
    <>
      <canvas id="myPieChart"></canvas>
      <div className="select-hold">
        <select className="form-select select-dropdown select " aria-label="Default select example" name='cat1' value={selectedCat1} onChange={handleCat1Change} style={{height : '1.5rem', width : '5rem', fontSize : '.9rem', backgroundColor : 'transparent', color : '#fff'}}>
          {Object.keys(topicVal).filter(key => key !== selectedCat2 && key !== selectedCat3).map((key) => (
            <option value={key} key={key}>{key}</option>
          ))}
        </select>

        <select className="form-select select-dropdown select" aria-label="Default select example" name='cat2' value={selectedCat2} onChange={handleCat2Change} style={{height : '1.5rem', width : '5rem', fontSize : '.9rem', backgroundColor : 'transparent', color : '#fff'}}>
          {Object.keys(topicVal).filter(key => key !== selectedCat1 && key !== selectedCat3).map((key) => (
            <option value={key} key={key}>{key}</option>
          ))}
        </select>

        <select className="form-select  select-dropdown select" aria-label="Default select example" name='cat3' value={selectedCat3} onChange={handleCat3Change} style={{height : '1.5rem', width : '5rem', fontSize : '.9rem', backgroundColor : 'transparent', color : '#fff'}}>
          {Object.keys(topicVal).filter(key => key !== selectedCat1 && key !== selectedCat2).map((key) => (
            <option value={key} key={key}>{key}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default PieChart;
