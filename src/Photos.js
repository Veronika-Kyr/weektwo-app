import React from 'react';
import './Photos.css';


export default function Photos(props) {
    return (
        <div className='photos'>
            <ul style={{ listStyle: "none" }}>
                {props.data.slice(0, 10).map(function (photo) {
                    return (
                        <li key={photo.id}>
                            <p className='photoName'>{photo.title} </p>
                            <img className='picture' src={photo.url} alt={photo.title} /></li>
                    )
                })}
            </ul>
        </div>
    )
}