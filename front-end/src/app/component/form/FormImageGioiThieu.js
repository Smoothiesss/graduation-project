import React from 'react';
import '../style/intro.scss';

export default class FormImageGioiThieu extends React.Component {    

    render() {
        const { image } = this.props;
        return (
            <div className="popup-gioi-thieu" style={{ width: "70%", height: '95%', textAlign: 'center', margin:'auto' }}>
                <img style={{maxWidth: 1000}} src={image} alt="gioiThieu" />
            </div>
        );
    }
}
