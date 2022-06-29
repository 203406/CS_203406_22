import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers, deleteUser } from '../services/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;


const AllUsers = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
       /* axios.delete('http://localhost:3001/api/user/delete')*/
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
       /* axios.get('http://localhost:3001/api/user/all_users_orm')*/
        let response = await getUsers();
       setUsers(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>lastName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Password</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.lastName}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.password}</TableCell>
                        <TableCell>{user.phone_number}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user.id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;