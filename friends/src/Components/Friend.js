import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


export default function Friend(props) {
    const { data } = props;

    const deleteFriend = () => {
        console.log(`http://localhost:5000/api/friends/${data.id}`)
        axiosWithAuth()
        .delete(`http://localhost:5000/api/friends/${data.id}`);
        props.getFriends();
    }
    return(
        <div className={'friend'}>
            <h2>{data.name}</h2>
            <h3>{data.age}</h3>
            <h3>{data.email}</h3>
            <button onClick={deleteFriend}>Delete</button>
        </div>
    )
}