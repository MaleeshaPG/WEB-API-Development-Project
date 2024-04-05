const userRepository =require('../repositories/userRepository')

const getAllUsers = async () => {
    return await userRepository.getUsers();
};

const createUser = async (userData) => {
    
    return await userRepository.createUser(userData);
};

module.exports={getAllUsers,createUser}