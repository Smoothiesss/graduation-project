import React, {Component} from 'react';


class Line extends Component {
    render() {
        if (this.props.collapsed) {
            return (<div
                className="side-menu-line"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0px 16px'
                }}>
                <span
                    style={{
                        height: 1,
                        flex: 1,
                        display: 'inline-block'
                    }}
                />
            </div>)
        }
        return (
            <div
                className="side-menu-line"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0px 72px'
                }}>
                <span
                    style={{
                        height: 1,
                        flex: 1,
                        display: 'inline-block',
                        marginRight: 5
                    }}
                />
                <i className="fa fa-star-o" style={{ fontSize: 12 }} />
                <i className="fa fa-star-o" style={{ fontSize: 12 }} />
                <i className="fa fa-star-o" style={{ fontSize: 12 }} />
                <span
                    style={{
                        height: 1,
                        flex: 1,
                        display: 'inline-block',
                        marginLeft: 5
                    }}
                />
            </div>
        );
    }
}

export default Line;