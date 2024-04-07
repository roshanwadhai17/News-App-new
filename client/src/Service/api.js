import axios from 'axios';

// const Url = 'http://localhost:3003/users';
const Url = 'http://localhost:8000';

export const getNews = async (id) => {
    id = id || '';
    return await axios.get(`${Url}/all`);
}

export const addNews = async (news) => {
    return await axios.post(`${Url}/add`, news);
    console.log(news);
}

// export const deleteUser = async (id) => {
//     return await axios.delete(`${Url}/${id}`);
// }

// export const editUser = async (id, user) => {
//     return await axios.put(`${Url}/${id}`, user)
// }