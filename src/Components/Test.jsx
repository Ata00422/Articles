import React, { useEffect, useState } from 'react';

export default function Articles() {
    const [newsApiArticle, setNewsApiArticle] = useState([]);
    const [newYorkArticle, setNewYorkArticle] = useState([]);
    const [keyWord, setKeyWord] = useState("");
    const [source, setSource] = useState("");
    const [category, setCategory] = useState("");

    const getNews = async () => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${keyWord}&sources=${source}&apiKey=c960ff417a7449a6af430cb5b6b2c49a`);
        const data = await res.json();
        setNewsApiArticle(data.articles);
    };

    const getNew = async () => {
        const res = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=0XAhGIEARUrsVX2rjjSy2b6xF46cre2E&source=${source}&category=${category}`);
        const data = await res.json();
        setNewYorkArticle(data.results);
    };

    useEffect(() => {
        getNews();
        getNew();
    }, [keyWord, source, category]);

    return (
        <div>
            {/* Dropdowns for customization */}
            <div className="row justify-content-between py-3">
                <div className="col-md-3">
                    <input type="text" className='form-control' placeholder='Search By Keyword' onChange={(e) => setKeyWord(e.target.value)} />
                </div>
                <div className="col-md-3">
                    <input type="text" className='form-control' placeholder='Filter By Source' onChange={(e) => setSource(e.target.value)} />
                </div>
                <div className="col-md-3">
                    <input type="text" className='form-control' placeholder='Filter By Category' onChange={(e) => setCategory(e.target.value)} />
                </div>
            </div>
            {/* Render articles from both APIs */}
