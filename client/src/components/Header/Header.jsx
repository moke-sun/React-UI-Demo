
import React from 'react'
import { Link } from 'react-router'

export default function () {
  return (
    <div className="app-header navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand hidden-sm">React Demo</a>
        </div>
        <div className="navbar-collapse collapse" role="navigation">
          <ul className="nav navbar-nav">
            <li className="font-bold"><Link to="/">Home</Link></li>
            <li><Link to="/list">Worker</Link></li>
            <li><Link to="/react">React</Link></li>
            <li><a href="#">Webpack</a></li>
            <li><a href="#">Gulp</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right hidden-sm">
            <li><a href="#">关于</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
