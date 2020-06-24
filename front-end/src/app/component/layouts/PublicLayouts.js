import React, { Component } from 'react';
import FrontEndRoute from '../../../FrontEndRoute';
import Footer from './Footer';
import Header from './HeaderPage';

const PublicLayouts = (props) => {
    return (
        <div style={{
            flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden',
        }}>
            <div style={{
                flex: 1, display: 'block', background: '#fff'
            }} />
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column'
            }}>
                <Header {...props} />
                <div style={{
                    flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column'
                }}>
                    <FrontEndRoute  {...props} />
                </div>
                <Footer />
            </div>
        </div>
    )
}


export default PublicLayouts;