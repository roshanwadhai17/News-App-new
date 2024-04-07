import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@news.wtdj3cd.mongodb.net/?retryWrites=true&w=majority&appName=News`;

    try {
        await mongoose.connect(process.env.DB, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Successfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;
