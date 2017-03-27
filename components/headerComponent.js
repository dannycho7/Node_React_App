import React from 'react';

class Header extends React.Component {
  render(){
    return (
      <h1>{this.props.text}</h1>
    )
  }
}

Header.defaultProps = {
  text: "Defaulted Property"
}

Header.propTypes = {
  text: React.PropTypes.string.isRequired
}

export default Header;
