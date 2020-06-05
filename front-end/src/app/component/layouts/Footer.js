import React from 'react';
import PropTypes from 'prop-types';
import {FOOTER_HEIGHT} from '../../constants/constant';

export default class Footer extends React.Component {

  static propTypes = {
    textAlign: PropTypes.string
  };

  render() {
    return (
      <div style={{
        height: FOOTER_HEIGHT,
        textAlign: 'right',
        padding: '0px 15px',
        lineHeight: `${FOOTER_HEIGHT}px`
      }}>
        Bản quyền thuộc về công ty VLXD Ánh Dương
        </div>
    );
  }
}


