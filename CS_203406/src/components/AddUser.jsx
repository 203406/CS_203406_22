import React from 'react';
import react, { useState } from 'react';
import axios from 'axios';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

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
        margin-top: 20px;
`;

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, lastName, email, password, phone_number} = user;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
       await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">lastName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lastName' value={lastName} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='password' value={password} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone_number' value={phone_number} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;