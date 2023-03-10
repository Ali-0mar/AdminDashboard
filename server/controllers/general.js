import User from '../models/User.js';

export const getUser = async (req, res) => {
    console.log("Here")
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getUsers = async (req, res) => {
    try{
        const { id } = req.params;
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}