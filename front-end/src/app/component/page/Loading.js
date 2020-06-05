import React from 'react';
import './../style/loading.scss';

class Loading extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loading" style={Object.assign({ '--n': '5' }, this.props.style)}
      >
        <div className="dot" style={{ '--i': '0' }} />
        <div className="dot" style={{ '--i': '1' }} />
        <div className="dot" style={{ '--i': '2' }} />
        <div className="dot" style={{ '--i': '3' }} />
        <div className="dot" style={{ '--i': '4' }} />
      </div>
    );
  }
}

export default Loading;