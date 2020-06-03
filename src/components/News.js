import React, { useEffect, useState } from 'react';

import '../styles/news.css';
import newsImg from '../assets/news/news.svg';

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function News() {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNews();
    }, []);


    const fetchNews = async () => {
        const token = '';
        const newsURL = `https://gnews.io/api/v3/top-news?lang=pl&max=3&token=${token}`;
        try {
            const fetchData = await fetch(newsURL);
            const data = await fetchData.json();
            setNews(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }


    if (loading) {
        return (
            <div id="news">
                <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
            </div>
        );
    };

    if ("errors" in news) {
        return (
            <div id="news">
                <h1>{news.errors[0]} </h1>
            </div>
        );
    }


    return (
        <div id="news">
            <div id="news-title">
                <h1>News</h1>
                <img src={newsImg} alt="news icon" title="News" />
            </div>
            {
                news.articles.map((article, index) => (
                    <div key={index} className="article">
                        <h2><a href={article.url} target="blank">{article.title}</a></h2>
                        <p>{article.publishedAt}</p>
                    </div>
                ))
            }
        </div>
    );



}

export default News;
