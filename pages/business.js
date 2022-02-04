import React,{useState} from 'react';
import Header from '../components/Header';
import "../styles/business.css"
const Axios = require('axios');

const Business = () => {
    const [news, setNews] = useState([])
    
    Axios.get("https://cryptolize.herokuapp.com/stocknews").then((response) => {
        let newsData = response.data;
setNews(newsData)
    })
    
    return (
        <main id="news-holder">
            <Header/>
            {news.map((val) => {
                const { date, headLine, subHeadline, newsLink, headlineImage } = val
                return (
                  <section id='news-components'>
                    <span>{date}</span>
                
                      <img id="imageHolder" src={headlineImage} alt='' />
                    <h1>{headLine}</h1>
                    <p id="subheading">{subHeadline}</p>
                    <a id="link" href={newsLink}>Read more... </a>
                  </section>
                );
   }).slice(0,25)}
</main>
    )
}
export default Business;