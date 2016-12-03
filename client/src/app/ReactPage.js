/**
 * Created by sunkj on 12/2/2016.
 */
import React, { Component } from 'react'
import {Link} from 'react-router';

export default class ReactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {workers:[]};
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="wrapper-md m-t-xxl">
        <h1>React 介绍</h1>
        <div>
          {this.props.children}
        </div>
        <div>
          <Link to="/react/desc">React Desc</Link>
          <br/>
          <Link to="/react/6">React Details</Link>
        </div>
      </div>
    )
  }
}