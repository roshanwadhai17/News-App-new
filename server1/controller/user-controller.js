import News from '../model/news.js';




// Get all news
export const getNews = async (request, response) => {
    try{
        const news = await News.find();
        response.status(200).json(news);
    }catch( error ){

        response.status(404).json({ message: error.message })
    }
}

// Save data of the user in database
export const addNews = async (request, response) => {
    const news = request.body;
    
    const newNews = new News(news);
    try{
        await newNews.save();
        response.status(201).json(newNews);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
    console.log(news);
}

// Get a user by id
// export const getUserById = async (request, response) => {
//     try{
//         const user = await News.findById(request.params.id);
//         response.status(200).json(user);
//     }catch( error ){
//         response.status(404).json({ message: error.message })
//     }
// }

// // Save data of edited user in the database
// export const editUser = async (request, response) => {
//     let user = request.body;

//     const editUser = new News(user);
//     try{
//         await News.updateOne({_id: request.params.id}, editUser);
//         response.status(201).json(editUser);
//     } catch (error){
//         response.status(409).json({ message: error.message});     
//     }
// }

// // deleting data of user from the database
// export const deleteUser = async (request, response) => {
//     try{
//         await News.deleteOne({_id: request.params.id});
//         response.status(201).json("News deleted Successfully");
//     } catch (error){
//         response.status(409).json({ message: error.message});     
//     }
// }