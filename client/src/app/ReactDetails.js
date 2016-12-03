/**
 * Created by sunkj on 12/2/2016.
 */
import React, { Component } from 'react'

export default class ReactDetails extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.params.id);
  }

  render() {
    return (
      <div>
        <h3>React 详情</h3>
        <div>
          Fackbook
        </div>
      </div>
    )
  }
}