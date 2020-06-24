import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/custom.scss';
import '../style/fontExt.css';
import '../style/grid.scss';
import '../style/index.scss';
import Footer from './Footer';
import Header from './Header';
import SideMenu from './SideMenu';
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.root.isAuthenticated,
        authData: state.root.authData,
        headerMenu: state.root.headerMenu
    };
};
class LayoutPage extends Component {
    render() {
        console.log('abc')
        return (
            this.props.isAuthenticated && <div className="layout-page">
                <SideMenu />
                <div style={{
                    flex: 1, display: 'flex', flexDirection: 'column',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        position: "relative"
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            flexDirection: 'column'

                        }}>
                                <Header />
                            <div style={{
                                flex: 1,
                                overflow: 'auto',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                    {/* <AppRoute /> */}
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>

            </div >
        );
    }
}

export default connect(mapStateToProps)(LayoutPage);