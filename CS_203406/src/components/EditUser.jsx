import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../services/api';

const initialValue = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    phone_number: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;


const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, lastName, email, password, phone_number } = user;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
         const response = await getUsers(id);
         setUser(response.data);
    }

    const editUserDetails = async() => {
         const response = await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Container>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">lastName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lastName' value={lastName} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='password' value={password} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone_number} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;