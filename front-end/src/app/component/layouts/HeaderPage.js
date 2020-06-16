import 'antd/dist/antd.css';
import _ from 'lodash';
import React from "react";
import { connect } from 'react-redux';
import Entypo from '../images/entypo_news.svg';
import EntypoV2 from '../images/entypo_newsV2.svg';
import Home from '../images/home.svg';
import Homev2 from '../images/home_v2.svg';
import GioiThieu from '../images/icon_gioithieu.svg';
import GioiThieuv2 from '../images/icon_gioithieu_v2.svg';
import Person from '../images/icon_person.svg';
import Personv2 from '../images/icon_person_v2.svg';
import ThongTin from '../images/icon_thongtin.svg';
import ThongTinv2 from '../images/icon_thongtin_v2.svg';
import logo from '../images/logo.png';
import '../style/header.scss';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.root.isAuthenticated,
        authData: state.root.authData,
    };
};

class HeaderPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            altActived: this.props.altActived ? this.props.altActived : ""
        }
        console.log(this.props)
    }


    componentWillReceiveProps(nextProps) {
        let altActived = ''
        if (_.get(this.props.location, 'pathname') != _.get(nextProps.location, 'pathname')) {
            switch (_.get(nextProps.location, 'pathname')) {
                case '/dashboard':
                    altActived = 'trang-chu'
                    break;
                case '/gioi-thieu':
                    altActived = 'gioi-thieu'
                    break;
                case '/thong-tin-chia-se':
                    altActived = 'thong-tin'
                    break;
                case '/tin-tuc':
                    altActived = 'tin-tuc'
                    break;
                case '/login':
                    altActived = 'login'
                    break;
                default:
                    altActived = '';
            }
            this.setState({
                altActived: altActived ? altActived : ''
            })
        }
    }

    componentDidMount() {
        let altActived = ''
        switch (_.get(this.props.location, 'pathname')) {
            case '/dashboard':
                altActived = 'trang-chu'
                break;
            case '/gioi-thieu':
                altActived = 'gioi-thieu'
                break;
            case '/thong-tin-chia-se':
                altActived = 'thong-tin'
                break;
            case '/tin-tuc':
                altActived = 'tin-tuc'
                break;
            case '/login':
                altActived = 'login'
                break;
            default:
                altActived = '';
        }
        this.setState({
            altActived: altActived ? altActived : ''
        })
    }

    renderLogo = () => {
        return (<div style={{ padding: '0px 0px 0px 0px', paddingBottom: 0 }}>
            <div
                className="side-menu-title"
                style={{
                    textAlign: 'left',
                    fontSize: 24,
                    whiteSpace: "nowrap",
                    height: 71
                }}>
                <span className="header-side-bar-logo" style={{ cursor: 'pointer' }}
                    onClick={() => { window.open('#/', "_self") }}>
                    <img className="header-image" src={logo}
                        style={{ position: 'absolute', top: 10, left: 10, height: 50, width: 46, cursor: 'pointer' }}
                        alt="LOGO" />
                    <span className="header-text" >Ánh Dương</span>
                    <span className="header-text-backgroud" >Ánh Dương</span>
                </span>

            </div>
        </div>);
    };

    logoMenu(title, src, src2, alt, href, index) {
        const { altActived } = this.state;
        const element = href.startsWith("http") ? <a key={index} className={'box-menu-trang-chu ' + (altActived === alt ? 'actived' : '')}
            href={this.generateRoute(href)} onClick={() => { this.setState({ altActived: alt }) }}
            target="_blank"
        >
            <div>
                <img className={"img-blue"} src={src} alt={alt} />
                <img className={"img-white"} src={src2} alt={alt} />
                <span className={"title"}>{title} </span>
            </div>
        </a> : <a key={index} className={'box-menu-trang-chu ' + (altActived === alt ? 'actived' : '')} href={`/#${href}`} onClick={() => { this.setState({ altActived: alt }) }}>
                <div>
                    <img className={"img-blue"} src={src} alt={alt} />
                    <img className={"img-white"} src={src2} alt={alt} />
                    <span className={"title"}>{title} </span>
                </div>
            </a>

        return element;
    }

    handleClickLogin() {
        this.setState({
            altActived: 'login'
        })
    }

    render() {
        console.log(window.localStorage.getItem('jwt'))
        return (
            <div className="header-content">
                <div style={{
                    display: 'flex',
                    flex: 1,
                    alignItems: 'left',
                    width: 1170,
                    margin: 'auto',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                }}
                >
                    <div className="logo" >
                        {this.renderLogo()}
                    </div>
                    <div className="menubar" style={{ position: "relative" }}>

                        {this.logoMenu("Trang chủ", Home, Homev2, "trang-chu", "#")}
                        {this.logoMenu("Giới thiệu", GioiThieu, GioiThieuv2, "gioi-thieu", "/gioi-thieu")}
                        {this.logoMenu("Chia sẻ", ThongTin, ThongTinv2, "thong-tin", "/thong-tin-chia-se")}
                        {this.logoMenu("Tin tức", Entypo, EntypoV2, "tin-tuc", "/tin-tuc")}

                        {/* {
                            this.props.headerMenu.map((item, index) => {
                                let element = '';
                                if (item.isShowHeader) {
                                    if (svgList[item.domain]) {
                                        element = this.logoMenu(item.text, svgList[item.domain].hover, svgList[item.domain].active, item.text, item.routeDefault, index)
                                    }
                                    return element;
                                }
                            })
                        } */}
                        {
                            !this.props.isAuthenticated &&
                            <a className={'box-menu-trang-chu ' + (this.state.altActived === 'login' ? 'actived' : '')}
                                onClick={() => this.handleClickLogin()}
                                href="#/login"
                                style={{
                                    position: 'absolute',
                                    right: '1px',
                                    alignSelf: 'center',
                                    marginRight: 5
                                }}
                                title="Đăng nhập"
                            >
                                <div >

                                    <img className={"img-blue"} src={Person} alt="123"
                                        style={{
                                            height: '22px',
                                            width: '22px'
                                        }}
                                    />
                                    <img className={"img-white"} src={Personv2} alt="123"
                                        style={{
                                            height: '22px',
                                            width: '22px'
                                        }}
                                    />
                                    <span className={'title'} style={{ marginLeft: 5 }}>Đăng nhập</span>
                                </div>
                            </a>
                        }
                        {
                            this.props.isAuthenticated &&
                            <a className={`logo-user`}
                                style={{
                                    position: 'absolute',
                                    right: '1px',
                                    alignSelf: 'center',
                                    marginRight: 5
                                }}
                                title="Đăng xuất"
                            >
                                <div
                                    onClick={() => this.onLogout()}
                                    style={{
                                        width: '100%',
                                        color: '#0094E8',
                                        fontSize: '22px'
                                    }}>
                                    <span className={'title'} style={{ marginRight: 5, fontSize: 20}}>{this.props.authData.authData.displayName}</span>
                                    <i className="fa fa-sign-in" style={{}}></i>
                                </div>
                            </a>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(HeaderPage);