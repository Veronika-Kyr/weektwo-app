import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './Page.css';
import PropTypes from 'prop-types';

export default function Page() {
    Header.defaultProps = {
        title: "Header title"
    };
    Header.propTypes = {
        title: PropTypes.string
    };
    Footer.defaultProps = {
        title: "Footer title"
    };
    Footer.propTypes = {
        title: PropTypes.string
    };

    return (
        <div className='page'>
            <Header title="Header title">Hello</Header>
            <Main />
            <Footer title="Footer title" />
        </div>
    )
}