/**
 * Created by sunkj on 11/25/2016.
 */
import React, { Component } from 'react'
import WorkerDetails from 'COMPONENTS/WorkerDetails/WorkerDetails'

export default class Details extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.params.id);
  }

  render() {
    return (
      <div>
        <WorkerDetails id={this.props.params.id}></WorkerDetails>
        <div className="m-t m-b">
          您可能感兴趣...
        </div>
      </div>
    )
  }
}