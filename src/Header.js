import React from 'react';
import PropTypes from 'prop-types';


export default function Header(props) {
    return (
        // fragment in short syntax:
        <>

            {/* example of inline style: */}

            <h1 style={{ margin: 0, color: "blue" }}>{props.title}</h1>

            {/* example of prop children: */}

            <p>{props.children}</p>
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string
};

