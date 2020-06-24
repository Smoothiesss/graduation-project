import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header style={{
                    height: 50,
                    paddingLeft: 50
                }} className="header-page">
                    <div style={{
                        display: 'flex',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        paddingRight: 15,
                        paddingLeft: 15
                    }}>
                         <div className="menubar">
                            <a className={'box-menu'} href="#">
                                <i className="fa fa-home"></i>
                                <span>Trang chủ</span>
                            </a>
                        </div>
                    </div>

                </header>
            </div>



        );
    }
}

export default Header;