import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

import styles from "./styles.module.css";

function Main() {
  const API_KEY = "af42c4ed74b14e52882a06c3ac93ec34";
  const url = "https://newsapi.org/v2/everything?q=";
  const localStorageKey = "fetchedArticles";

  const [articles, setArticles] = useState([]);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [navItems, setNavItems] = useState(["AI", "Cricket", "Tech", "Stocks", "Movies", "Business"]);

  const location = useLocation();

  useEffect(() => {
    const storedArticles = localStorage.getItem(localStorageKey);
    if (storedArticles) {
      setArticles(JSON.parse(storedArticles));
    } else {
      fetchData("all");
    }
  }, []);

  const fetchData = async (query) => {
    try {
      const res = await axios.get(`${url}${query}&apiKey=${API_KEY}`);
      setArticles(res.data.articles.filter((article) => !article.title.includes("Removed")));
      localStorage.setItem(localStorageKey, JSON.stringify(res.data.articles));
      setShowWelcomeMessage(false);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const search = (query) => {
    fetchData(query || searchQuery);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const {email} = useContext
  return (
    <div>
      <header className={styles.header}>
        <img src="/logo.png" width="200px" className={styles.logo} alt="Your company logo" />
        <div className={`${styles.inputSearch} ${styles.desktop}`}>
          <form onSubmit={(e) => { e.preventDefault(); search(); }}>
            <input type="text" placeholder="Type to search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <span> <i className="fas fa-search"></i></span>
          </form>
        </div>
        <nav className={styles.desktop}>
          <ul>
          <li>
              <Link to="/all">Our News</Link>
            </li>
            {navItems.map((item, index) => (
              <li key={index} onClick={() => search(item)}>{item}</li>
            ))}
            
            
          </ul>

          <button className={styles.white_btn} onClick={handleLogout}>
            Logout
          </button>
          
        </nav>
      </header>
      <main>
        <div className={styles.welcomeMessage} hidden={!showWelcomeMessage}>
          <h1>Welcome to The Times</h1>
          <p>Explore the latest news from around the world.</p>
        </div>
        {articles
          .filter((article) => !article.title.includes("Removed") && article.urlToImage)
          .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)) 
          .map((article, index) => (
            <div key={index} className={`${styles.card} ${styles.box}`}>
              <a href={article.url}>
                {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
                <h4>{article.title}</h4>
                
                <div className={styles.publishByDate}>
                  <hr />
                  <p>{article.source.name}</p>
                  <p>{new Date(article.publishedAt).toDateString()}</p>
                  <hr />
                </div>
                <div className={styles.desc}>{article.description}</div>
              </a>
            </div>
          ))}
      </main>
    </div>
  );
}

export default Main;
