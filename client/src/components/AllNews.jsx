import styles from "./styles.module.css";
import React, { useState, useEffect } from 'react';
import { getNews } from '../Service/api';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const AllNews = () => {
    const [news, setNews] = useState([]);
    
    useEffect(() => {
        getAllNews();
    }, []);

    const getAllNews = async () => {
        let response = await getNews();
        setNews(response.data);
    }

    return (
        <>
            <div>
                <header className={styles.header}>
                    <img src="/logo.png" width="200px" className={styles.logo} alt="Your company logo" />
                    <h1>Our News</h1>
                    <nav className={styles.desktop}>
                      
                        <ul>
                            
                            <li>
                                <Button component={Link} to="/add" variant="contained" color="primary">Contribute for Us</Button>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    {news.map((n, index) => (
                        <div key={index} className={`${styles.card} ${styles.box}`}>
                            <a href={n.url}>
                                <div>
                                    {n.iurl && <img src={n.iurl} alt={n.title} />}
                                </div>
                                <h4>{n.title}</h4>
                                
                                <div className={styles.publishByDate}>
                                    <hr />
                                    <p>{n.web}</p>
                                    <hr />
                                </div>
                                <div className={styles.desc}>{n.desc}</div>
                            </a>
                        </div>
                    ))}
                </main>
            </div>
        </>
    )
}

export default AllNews;
