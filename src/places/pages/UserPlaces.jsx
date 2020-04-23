import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';
import Shibuya from '../../image/shibuya-crossing.jpg';
import Gion from '../../image/gion.jpg'
const DUMMY_PLACES =[
    {
        id: 'p1',
        title: 'Shibuya Crossing',
        description: `World's most famous crossing`,
        imageUrl: Shibuya,
        address: '2 Chome-2-1 Dogenzaka, Shibuya City, Tokyo 150-0043, Japan',
        location: {
            lat: 35.6594666,
            lng: 139.7005536
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Gion',
        description: `Kyoto's famous street, where you may see Geisha`,
        imageUrl: Gion,
        address: 'Higashiyama Ward, Kyoto, Japan',
        location: {
            lat: 35.0044528,
            lng: 135.7701448
        },
        creator: 'u2'
    }
]

const UserPlaces = (props) =>{
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces;