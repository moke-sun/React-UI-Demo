import React, { Component } from 'react'
import FooterTpl from 'COMPONENTS/Footer/Footer.jsx'

export default class Footer extends Component {
  render() {
    return FooterTpl.call(this);
  }
}