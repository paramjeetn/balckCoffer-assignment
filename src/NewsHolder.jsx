import { useEffect, useState } from "react";
import News from './News.jsx';
import { fetchUrl } from "./fetch.js";

const NewsHolder = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const data = await fetchUrl('newsData');
            const refinedData = data.slice(0, 8);
            // console.log(refinedData)

            setNews(refinedData);
        }

        fetchData();
    }, []);

    return(
        <>
            <div className="news-cont">
            {
                news.map((key, index) => (
                <News key={index} insight={key.insight} title={key.title} url={key.url} />
                ))
            }
            </div>

        </>
    );
}

export default NewsHolder;