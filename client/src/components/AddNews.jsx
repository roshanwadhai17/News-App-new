import styles from "./styles.module.css";
import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addNews } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    title: '',
    desc: '',
    url: '',
    web: '',
    iurl: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
    }
`;

const AddNews = () => {
    const [news, setnews] = useState(initialValue);
    const { title, desc, web, url, iurl } = news;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setnews({...news, [e.target.name]: e.target.value})
    }

    const addNewsDetails = async () => {
        await addNews(news);
        navigate('/all');
    }

    return (
        <>
            <header className={styles.header}>
                <img src="/logo.png" width="200px" className={styles.logo} alt="Your company logo" />
                <h1>Provide News</h1>
                <nav className={styles.desktop}>
                    <ul>
                        {/* Add the "Return" button */}
                        <li>
                            <Button variant="contained" color="primary" onClick={() => navigate('/all')}>Return</Button>
                        </li>
                    </ul>
                </nav>
            </header>
        
            <Container>
                <Typography variant="h4">Add News Here</Typography>
                <FormControl>
                    <InputLabel htmlFor="my-input">Title</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='title' value={title} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Website Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='web' value={web} id="my-input" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">News url</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='url' value={url} id="my-input"/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Thumbnail url</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='iurl' value={iurl} id="my-input"/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Description of News</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='desc' value={desc} id="my-input" />
                </FormControl>
                <FormControl>
                    <Button variant="contained" color="primary" onClick={() => addNewsDetails()}>Add News</Button>
                </FormControl>
            </Container>
        </>
    )
}

export default AddNews;
