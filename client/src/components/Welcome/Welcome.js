/**
 * Created by sunkj on 11/25/2016.
 */
import React, { Component } from 'react'
import HomeTpl from 'COMPONENTS/Welcome/Welcome.jsx'

export default class Home extends Component {
  render() {
    return HomeTpl.call(this);
  }
}