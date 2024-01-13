import { topicData } from './topic.js';
import PieChart from './PieChart';
import { useState, useEffect } from 'react';
import { fetchUrl } from '../fetch.js';

const PieChartHolder = () => {

    const entries = Object.entries(topicData);
    const filteredEntries = entries.filter(([key]) => key !== '');
    filteredEntries.sort((a, b) => b[1] - a[1]);
    const finalObj = Object.fromEntries(filteredEntries);

    const [topic, setTopic] = useState({});

    useEffect(() => {
        const fetchData = async () => {
         
            const data = await fetchUrl('pieData');
        //   console.log(labels);
        //   console.log(val);
          setTopic(data);
        };
    
        fetchData();
      }, []);

    return(

        <>
             <PieChart topicVal={topic}/>
        </>
    );
}

export default PieChartHolder;