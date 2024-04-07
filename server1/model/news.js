import mongoose from 'mongoose';
import mongooseSequence from 'mongoose-sequence';

const newsSchema = mongoose.Schema({
    title: String,
    desc: String,
    url: String,
    web: String,
    iurl: String
});

// Apply the mongoose-sequence plugin
newsSchema.plugin(mongooseSequence(mongoose), { inc_field: 'newsId' });

// Create the model
const postNews = mongoose.model('news', newsSchema);

export default postNews;
