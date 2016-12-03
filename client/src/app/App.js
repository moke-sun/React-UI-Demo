/**
 * Created by sunkj on 11/25/2016.
 */
import React, { Component } from 'react'
import Header from 'COMPONENTS/Header/Header'
import Footer from 'COMPONENTS/Footer/Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container">
          {this.props.children}
        </div>
        <Footer></Footer>
      </div>
    )
  }
}