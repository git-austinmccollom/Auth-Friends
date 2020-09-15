import React from 'react';

export default function Friend(props) {
    const { data } = props;
    return(
        <div className={'friend'}>
            <h2>{data.name}</h2>
            <h3>{data.age}</h3>
            <h3>{data.email}</h3>
        </div>
    )
}