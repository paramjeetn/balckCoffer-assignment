import BarHolder from './BarGraphs/BarHolder.jsx';
import PieChartHolder from './PieChart/PieChartHolder.jsx';
import LineChartHolder from './LineChart/LineChartHolder';
import RadarHold from './RadarChart/RadarHold.jsx';
import './Dashboard.css';

const Charts = () => {

    return(
        <>
           <div className="ele-cont">
            <div className="ele">
                <LineChartHolder />
            </div>
            <div className="ele">
               <BarHolder />
            </div>
            <div className="ele">
                <PieChartHolder />
            </div>
            <div className="ele ele-last">
                <RadarHold />
            </div>
            {/* <div className="ele">

            </div> */}

         </div>
        </>
    );
}

export default Charts;