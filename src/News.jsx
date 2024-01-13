import './News.css'

const News = ({insight, url, title}) => {

    return(
        <>
                <div className="news-ele">
                    <div className="head-cont">
                    <h3 className='headText'>{insight}</h3>    
                    </div> 
                    <div className='hr'> </div>
                    <p className='text'>{title}</p> 
                    <div className="anc">
                    <a href={url} className='anchor'>--source--</a>      
                    </div>            
                </div>
        </>
    );
}

export default News;