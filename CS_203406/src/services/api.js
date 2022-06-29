import axios from 'axios';

const usersUrl = 'http://localhost:3001/api/user';


export const getUsers = async (id) => {
    id = id || '';
    try {
        return await axios.get(`http://localhost:3001/api/user/all_users_orm`);
    } catch (error) {
        console.log('Error while calling getUsers api ', error);
    }
}

export const addUser = async (user) => {
    return await axios.post(`http://localhost:3001/api/user/insert`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`http://localhost:3001/api/user/delete`);
}

export const editUser = async (id, user) => {
    return await axios.put(`http://localhost:3001/api/users/update_user_orm`, user)
}