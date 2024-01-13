import './Dashboard.css';
import NavBar from './NavBar.jsx';
import Charts from './Charts.jsx';
import NewsHolder from './NewsHolder.jsx';


const Dashboard = () => {
    
  return (
    <div className="container-fluid cont-sty">
       <NavBar />

       <section id='charts'>
       <div className="charts">
         
         <div className='head'>
            <a href="#charts" style={{textDecoration : 'none', color : 'inherit'}}><strong className="txt-str" style={{fontSize : '2.3rem', fontWeight : '400', fontFamily : 'poppins'}}>Dashboard<span style={{opacity : '0.7', fontSize : '2.4rem'}}> /</span></strong></a>
            <small className="txt-sml" style={{opacity : '.5', fontSize : '1rem', fontWeight : '400', fontFamily : 'lato', wordSpacing : '.1rem'}}>See insights across diverse sectors on your dashboard</small>
            <hr />
         </div>

         <Charts />
         
       </div>
       </section>

       <section id='news'>
            <div className="news">
                    <div className='head'>
                        <a href="#news" style={{textDecoration : 'none', color : 'inherit'}}><strong className="txt-str" style={{fontSize : '2.3rem', fontWeight : '400', fontFamily : 'poppins'}}>Headlines<span style={{opacity : '0.7', fontSize : '2.4rem'}}> /</span></strong></a>
                        <small className="txt-sml" style={{opacity : '.5', fontSize : '1rem', fontWeight : '400', fontFamily : 'lato', wordSpacing : '.1rem'}}>A curated selection of the latest news and top stories making waves around the world</small>
                        <hr />
                    </div>

             <NewsHolder />
        </div>
       
       </section>
    </div>
  );
}

export default Dashboard;
