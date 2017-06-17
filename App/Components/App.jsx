"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <h1>React SPA</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <Link to="/">Home</Link>
              </td>
              <td>
                <Link to="/profile">Profile</Link>
              </td>
              <td>
                <Link to="/contact">Contact</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <h1>Home Page</h1>
        {this.props.children}
      </div>
    )};
}
