import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'

export default function MyProvider({ children }) {
    // states variabls
    const [newsApiArticle, setNewsApiArticle] = useState([])
    const [newYorkArticle, setnewYorkArticle] = useState([])
    const [keyWord, setKeyWord] = useState("")
    const [source, setSource] = useState("")
    const [Personalsource, setPersonalSource] = useState("")
    const [category, setCategory] = useState("")
    // get from local storage
    useEffect(() => {
        const storedCategory = JSON.parse(localStorage.getItem("category"))
        if (storedCategory) {
            setCategory(storedCategory)
        }
        const storedSource = JSON.parse(localStorage.getItem("source"))
        if (storedSource) {
            setPersonalSource(storedSource)
        }
    }, [])
    // store in local storage
    useEffect(() => {
        localStorage.setItem("category", JSON.stringify(category))
        localStorage.setItem("source", JSON.stringify(Personalsource))
    }, [category, Personalsource])

    const getNews = async () => {
        let url;
        if (category) {
            url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=dba822bf20e84d61b6037dfa29da4373`
        } else if (Personalsource) {
            url = `https://newsapi.org/v2/top-headlines?sources=${Personalsource}&apiKey=dba822bf20e84d61b6037dfa29da4373`
        } else if (category.length<1 || source.length<1) {
            url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=dba822bf20e84d61b6037dfa29da4373"
        }
        const res = await fetch(url, {
            method: "GET"
        })
        const data = await res.json()
        console.log(data.articles)
        setNewsApiArticle(data.articles)
    }
    const getNew = async () => {
        let url;
        if (category) {
            url = `https://api.nytimes.com/svc/news/v3/content/all/${category}.json?api-key=0XAhGIEARUrsVX2rjjSy2b6xF46cre2E`
        } else {
            url = "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=0XAhGIEARUrsVX2rjjSy2b6xF46cre2E"
        }
        const res = await fetch(url)
        const data = await res.json()
        console.log(data.results)
        setnewYorkArticle(data.results)
    }

    const newsAPiArticles = newsApiArticle && newsApiArticle.filter(article => article.description !== "[Removed]" && article.description !== null).filter((article) => article.title.toLowerCase().includes(keyWord.toLowerCase())).filter(article => article.source.name.toLowerCase().includes(source.toLowerCase()))
    const newYorkArticles = newYorkArticle && newYorkArticle.filter((article) => article.title.toLowerCase().includes(keyWord)).filter(article => article.source.toLowerCase().includes(source.toLowerCase()))

    useEffect(() => {
        getNews()
        getNew()
    }, [category, Personalsource])
    return (
        <MyContext.Provider value={{ setCategory, setPersonalSource, setSource, setKeyWord, newsAPiArticles, newYorkArticles, category, Personalsource }}>
            {children}
        </MyContext.Provider>
    )
}
