/**
 * Created by sunkj on 11/25/2016.
 */
import React, { Component } from 'react'
import HeaderTpl from 'COMPONENTS/Header/Header.jsx'

export default class Header extends Component {
  render() {
    return HeaderTpl.call(this);
  }
}