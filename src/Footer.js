import React from 'react';
import PropTypes from 'prop-types';


export default function Footer(props) {

    // example of style using variable:

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

Footer.propTypes = {
    title: PropTypes.string
};

