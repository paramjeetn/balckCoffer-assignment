import React, { useEffect, useState } from 'react';
import RadarChart from './Radar.jsx';
import { pestleData } from './pestle.js';
import { fetchUrl } from '../fetch.js';

const RadarHold = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async() => {
        const data = await fetchUrl('radarData');
    setData(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {/* <h1>Main Component</h1> */}
      <RadarChart pestleData={data} />
    </div>
  );
};

export default RadarHold;
