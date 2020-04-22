import React from 'react'
import Image from '../../image/avatar.jpg'

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS =[
        {
            id: 'u1', 
            name: 'Max', 
            image: Image, 
            places: 3 
        }
    ]
    return (
        <UsersList items={USERS} />
    )
        
    
}

export default Users;