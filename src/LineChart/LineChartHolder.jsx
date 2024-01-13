import { useEffect, useState } from "react";
import LineChart from "./LineChart.jsx";
import { fetchUrl } from "../fetch.js";

const LineChartHolder = () => {

    const [year, setYear] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchUrl('lineData');
        setYear(data);
      }

      fetchData();
    }, []);

    return (
        <>
          <LineChart yearObj={year} />
        </>
    );
}

export default LineChartHolder;