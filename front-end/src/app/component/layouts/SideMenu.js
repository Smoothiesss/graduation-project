import { Layout, Menu } from 'antd';
import React, { Component } from 'react';
import Line from './Line';
import { connect } from 'react-redux';
import store from '../../../AppStore';
import { onToggleSider } from "../../../application/actions/appAction";

const mapStateToProps = (state) => {
    return {
        siderCollapsed: state.root.siderCollapsed
    };
};
const { Sider } = Layout;
class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            siderCollapsed: localStorage.getItem('collapsedSideMenu') === "true" ? true :  this.props.siderCollapsed 
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            siderCollapsed: nextProps.siderCollapsed
        })
    }

    renderLogo = () => {
        return (<div style={{ padding: 10, paddingBottom: 0 }}>
            <div
                className="side-menu-title"
                style={{
                    textAlign: 'center',
                    fontSize: 24,
                    whiteSpace: "nowrap"
                }}>
                <span className="header-side-bar">
                    {/* <img className="header-image" src={favicon}
                        style={{ height: 'atuo', width: 38, cursor: 'pointer' }}
                        alt="LOGO" /> */}
                    <span className="header-text" style={{ left: 55 }} >AD</span>
                    <span className="header-text-backgroud" >AD</span>
                </span>

            </div>
        </div>);
    };

    renderCollapsedButton = () => {
        return (
            <div >
                <div
                    className="wrap-button-menu"
                    style={{
                        height: 50,
                        width: 50
                    }}
                >
                    <button
                        className="button-menu"
                        onClick={this.toggle}
                        style={{
                            height: 50 - 16 || 36,
                            width: 50 - 16 || 36,
                            background: 'rgba(255, 255, 255, 0.2)',
                            border: 'none'
                        }}
                    >
                        <i className="fa fa-bars" />
                    </button>
                </div>
            </div>

        );
    };

    toggle = () => {
        localStorage.setItem('collapsedSideMenu', !this.state.siderCollapsed);
        store.dispatch(onToggleSider())
    };

    render() {
        const firstMenu = {}
        return (
            <Sider
                trigger={null}
                collapsed={this.state.siderCollapsed}
                width={260}
                collapsedWidth={0}
                className="side-menu-page custom-menu-page"
                style={{
                    position: 'relative'
                }}
            >
                <div style={{ height: 68 }}>
                    {this.renderCollapsedButton()}
                    {this.renderLogo()}
                    <Line collapsed={this.state.siderCollapsed} color={'red'} />

                </div>
                <div style={{
                    overflow: 'auto',
                    height: 'calc(100vh - 72px)'
                }}>
                    <div
                        ref={component => this.Container = component} style={{ height: '100%' }}>
                        {/* <AppMenu
                            collapsed={false}
                        /> */}
                    </div>
                </div>

            </Sider>
        );
    }
}


 

export default connect(mapStateToProps)(SideMenu);