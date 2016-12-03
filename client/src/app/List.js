/**
 * Created by sunkj on 11/25/2016.
 */
import React, { Component } from 'react'
import WorkerFilter from 'COMPONENTS/WorkerFilter/WorkerFilter'
import WorkerList from 'COMPONENTS/WorkerList/WorkerList'

export default class List extends Component {
  render() {
    return (
      <div>
        <WorkerFilter></WorkerFilter>
        <div className="m-t m-b">
          匹配结果...
        </div>
        <WorkerList></WorkerList>
      </div>
    )
  }
}