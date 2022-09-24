import React from 'react';
// example of using importing CSS style:
import './Photos.css';
import PropTypes from 'prop-types';


export default function Photos(props) {
    const arrOFdata = props.data.slice(0, 10);
    return (
        <div className='photos'>
            <ul style={{ listStyle: "none" }}>
                {arrOFdata.map(function (photo) {
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
Photos.propTypes = {
    data: PropTypes.array
};
