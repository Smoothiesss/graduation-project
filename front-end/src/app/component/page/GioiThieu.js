import React, { Component } from 'react';
import gioiThieu from '../images/intro.PNG';
import FormImageGioiThieu from '../form/FormImageGioiThieu';
export default class GioiThieu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chinhSachAT: true
        }
    }

    render() {
        return (
            <div className="content-intro-view"
                style={{
                    height: '100%',
                    width: 1160,
                    margin: 'auto'
                }}
            >
                <div className="content-page" style={{ left: "15px", top: "5px", right: "15px" }}>
                    <div className="body-content" style={{
                        flex: 1,
                        padding: '15px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        background: '#fff',
                        width: '100%',
                        overflow: 'overlay'
                    }}>

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="title intro"
                                style={{ cursor: "auto" }}
                            >
                                <span style={{ color: '#fff', position: 'absolute', left: 55, top: 3 }}>Giới thiệu</span>
                            </div>
                            <div className="button">
                                <button className="btn btn-success" onClick={window.print}><i className="fa fa-print" /> Print </button>
                            </div>
                        </div>
                        <div
                            style={{ flex: 1 }}
                        >
                            <FormImageGioiThieu image={gioiThieu} />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}