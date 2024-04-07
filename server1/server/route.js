import express from 'express';
// import { getNews, addUser, getUserById, editUser, deleteUser } from '../controller/user-controller.js';
import {getNews, addNews } from '../controller/user-controller.js';

const router = express.Router();

router.get('/all', getNews);
router.post('/add', addNews);
// router.get('/:id', getUserById);
// router.put('/:id', editUser);
// router.delete('/:id', deleteUser);

export default router;