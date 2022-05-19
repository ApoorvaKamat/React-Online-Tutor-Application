import React from 'react';

const Heart = (props) => {
    return (
      <a  onClick={()=>this.setState({ isCardView: !this.state.isCardView })}>
        { this.state.isCardView
          ? <span><i className="bi bi-heart"></i></span>
          : <span><i className="bi bi-heart-fill"></i></span>
        }
      </a>
    );
}
export default Heart;
  