import React from 'react';

export default function Footer(props) {
    const h2Style = {
        color: 'red',
        margin: 0,
        paddingBottom: '20px'
    };
    return (
        <div className='footer'>
            <h2 style={h2Style}> {props.title}</h2>
        </div>
    )
}