/**
 * Created by sunkj on 11/25/2016.
 */
import React, { Component } from 'react'

export default class WorkerFilter extends Component {

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.randomClick = this.randomClick.bind(this);
  }

  randomClick() {
    console.log(1);
  }

  render() {
    return (
      <div className="bg-success b-b wrapper-md m-t-xxl">
        <div className="row">
          <div className="col-md-10 b-r">
            <div className="row">
              <div className="col-md-1 text-muted">工种</div>
              <div className="col-md-11">
                <ul className="list-job">
                  <li className="list-job-item active bg-warning"><a>月嫂</a></li>
                  <li className="list-job-item"><a>育婴</a></li>
                </ul>
              </div>
            </div>
            <div className="row m-t">
              <div className="col-md-1 text-muted">省份</div>
              <div className="col-md-11">
                <ul className="list-job">
                  <li className="list-job-item"><a>广东</a></li>
                  <li className="list-job-item"><a>广西</a></li>
                  <li className="list-job-item"><a>北京</a></li>
                  <li className="list-job-item"><a>上海</a></li>
                </ul>
              </div>
            </div>
            <div className="row m-t">
              <div className="col-md-1 text-muted">工资</div>
              <div className="col-md-11">
                <ul className="list-job">
                  <li className="list-job-item active bg-warning"><a>3000左右</a></li>
                  <li className="list-job-item"><a>4000左右</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="text-center m-t-xl">
              <a onClick={this.randomClick}>换一批</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}