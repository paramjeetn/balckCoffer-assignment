import { useEffect, useState } from 'react';
import Bar from './Bar.jsx';
import { getTopSector } from './getTopSector';
import { fetchUrl } from '../fetch.js';

const BarHolder = () => {

  const [labels, setLabels] = useState([]);
  const [val, setVal] = useState([]);

  const dataUpdate = (sectorData) => {
    console.log(sectorData)
    const topSector = getTopSector(sectorData);
    const labels = Object.keys(topSector);
    const val = Object.values(topSector);

    return [labels, val];
  };

  useEffect(() => {
    const fetchData = async () => {

        const data = await fetchUrl('barData');
        // console.log('bar data', data)

      const [labels, val] = dataUpdate(data);
    //   console.log(labels);
    //   console.log(val);
      setLabels(labels);
      setVal(val);
    };

    fetchData();
  }, []);

  return (
    <>
      {labels.length > 0 && val.length > 0 && <Bar graphlabels={labels} graphdata={val} />}
    </>
  );
};

export default BarHolder;
