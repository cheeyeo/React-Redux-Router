import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render(){
    return(
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
          <ul>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/users" activeClassName="active">Users</Link></li>
            <li><Link to="widgets" activeClassName="active">Widgets</Link></li>
          </ul>
        </aside>
        {this.props.children}
      </div>
    );
  }
});
