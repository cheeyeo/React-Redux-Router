import React from 'react';

export default React.createClass({
  render(){
    return (
      <h1>User Profile for userId: {this.props.params.userId}</h1>
    );
  }
});
