import React, { useContext, useEffect } from 'react'
import MyContext from '../ContextApi/MyContext'
import newsImg from "../img/Latest-news.jpg"
import news from "../img/news-img.png"
export default function Articles() {
    const { setCategory, setPersonalSource, newsAPiArticles, newYorkArticles, category, Personalsource } = useContext(MyContext)

    const RemoveCategory = () => {
        localStorage.removeItem("category")
        setCategory("")
    }
    const RemoveSource = () => {
        localStorage.removeItem("source")
        setPersonalSource("")
    }
    return (
        <div>

            <div className='bg-header'>
                <div className="header-overlay">
                    <div className="container">
                        <div className="row py-6 align-items-center">
                            <div className="col-md-5">
                                <h1 className='text-white'>Empowering Your World with Information</h1>
                                <p>Stay informed with the latest headlines, breaking news, and insightful analysis from around the world. Explore a diverse range of topics including politics, technology, business, sports, entertainment, and more.</p>
                            </div>
                            <div className="col-md-7">
                                <img className='img-fluid' src={news} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid">
                <h1>{Personalsource}</h1>
                <div className="row">
                    <div className="row justify-content-between py-5">
                        <div className="col-md-3">
                            <h3 className='text-danger'>Personalized News Feed</h3>
                            <select className='form-control' type="text" placeholder='Select Category' onChange={(e) => setCategory(e.target.value)} >
                                <option value="">Select Category</option>
                                <option value="business">Business</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="general">General</option>
                                <option value="science">Science</option>
                                <option value="arts">Arts</option>
                                <option value="automobiles">Automobiles</option>
                                <option value="business">Business</option>
                                <option value="fashion">Fashion</option>
                                <option value="food">Food</option>
                                <option value="health">Health</option>
                                <option value="home">Home</option>
                                <option value="insider">Insider</option>
                                <option value="magazine">Magazine</option>
                                <option value="movies">Movies</option>
                                <option value="nyregion">Nyregion</option>
                                <option value="obituaries">Obituaries</option>
                                <option value="opinion">Opinion</option>
                                <option value="politics">Politics</option>
                                <option value="realestate">Realestate</option>
                                <option value="science">Science</option>
                                <option value="sports">Sports</option>
                                <option value="sundayreview">Sundayreview</option>
                                <option value="technology">Technology</option>
                                <option value="theater">Theater</option>
                                <option value="t-magazine">T-magazine</option>
                                <option value="travel">Travel</option>
                                <option value="upshot">Upshot</option>
                                <option value="us">us</option>
                                <option value="world">World</option>
                            </select>
                            <select className='form-control mt-3' type="text" placeholder='Select Source' onChange={(e) => setPersonalSource(e.target.value)} >
                                <option value="">Select Source</option>
                                <option value="new york times">New York Times</option>
                                <option value="bbc-news">BBC-News</option>
                                <option value="times">Times</option>
                                <option value="cnn">CNN</option>
                                <option value="the guardian">The Guardian</option>
                            </select>

                            <h5 className='text-danger mt-3'>Selected Category</h5>
                            <h1>{category}</h1>
                            <h5 className='text-danger mt-3'>Selected Source</h5>
                            <h1>{Personalsource}</h1>
                            <button className='btn btn-danger mt-3' onClick={RemoveCategory}>Remove Selected Category</button>
                            <button className='btn btn-danger mt-3' onClick={RemoveSource}>Remove Selected Source</button>
                        </div>
                        <div className="col-md-9">
                            <h3 className='text-center text-danger'>Top Headlines</h3>
                            <div className="row">

                                {newsAPiArticles && newsAPiArticles.map((article) => {
                                    return <div className="col-md-4 g-3">
                                        <a href={article.url} target='blank' style={{ textDecoration: "none", color: "initial" }}> <div className="card">
                                            <img src={article.urlToImage === null ? newsImg : article.urlToImage} style={{ height: "200px" }} alt="" />
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <h3>{article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title}</h3>
                                                </div>
                                                <p>{article.description && article.description.length >= 90 ? article.description.slice(0, 90) + "..." : article.description}</p>
                                                <div className="row">
                                                    <div className="col-md-12">{article.author}</div>
                                                    <div className="col-md-12">{article.publishedAt}</div>
                                                </div>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                })}
                                {newYorkArticles && newYorkArticles.map((article) => {
                                    return <div className="col-md-4 g-3">
                                        <a href={article.url} target='blank' style={{ textDecoration: "none", color: "initial" }}> <div className="card">
                                            {article.multimedia && article.multimedia.length >= 2 && (
                                                <img src={article.multimedia[2].url} style={{ height: "200px" }} alt="" />
                                            )}
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <h3>{article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title}</h3>
                                                </div>
                                                <p>{article.abstract && article.abstract.length >= 90 ? article.abstract.slice(0, 90) + "..." : article.abstract}</p>
                                                <div className="row">
                                                    <div className="col-md-12">{article.byline}</div>
                                                    <div className="col-md-12">{article.published_date}</div>
                                                </div>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                })}
                            </div>

                        </div>

                    </div>


                </div>
            </div>

        </div >
    )
}
