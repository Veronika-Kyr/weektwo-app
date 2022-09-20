import React from 'react';

export default function Header(props) {
    return (
        <div >
            <h1 style={{ margin: 0, color: "blue" }}>{props.title}</h1>
            <p>{props.children}</p>
        </div>
    )
}