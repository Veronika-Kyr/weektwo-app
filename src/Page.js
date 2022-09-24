import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './Page.css';


export default function Page() {
    Header.defaultProps = {
        title: "Header title"
    };
    Footer.defaultProps = {
        title: "Footer title"
    };

    return (
        <div className='page'>
            <Header title="Header title">Hello</Header>
            <Main />
            <Footer title="Footer title" />
        </div>
    )
}