/**
 * Created by sunkj on 11/25/2016.
 */

import React, { Component } from 'react'
import { Link } from 'react-router'
import WorkerService from 'COMPONENTS/Services/WorkerService'

export default class WorkerList extends Component {

  constructor(props) {
    super(props);
    this.state = {workers:[]};
  }

  componentDidMount() {
    WorkerService.getList('', 0, 16)
      .then(res => {
        this.setState({workers: res.hits});
      }, err => {
        console.log('获取列表错误：', err);
      });
  }

  render() {

    let listItems = this.state.workers.map(function (worker) {
      return (
        <div className="result-item tl-content panel padder b-a w-md w-auto-xs" key={worker._source.Booked.Id}>
          <span className="pull-up"></span>
          <div className="text-lt m-b-sm">{worker._source.Booked.ServiceTypes.join(',') || '保姆'}<span className="text-danger pull-right">工资：￥{worker._source.Booked.SalaryRequirement || '待定'}</span></div>
          <div className="panel-body pull-in b-t b-light">
            <Link to={`/list/details/${worker._source.Booked.Id}`}>
              <div className="thumb pull-left m-l m-t-xs m-r avatar">
                <img src={'http://121.40.125.50:88/' + worker._source.Booked.Avatar} alt="..." />
                <i className="on md b-white bottom"></i>
              </div>
              <div className="clear">
                <span className="text-primary block m-t m-b-xs">{worker._source.IdCard.Name} <i className="icon-twitter"></i></span>
                <span className="text-muted block m-b-xs">{worker._source.IdCard.Age}岁 | {worker._source.Booked.Homtown} <i className="icon-twitter"></i></span>
              </div>
            </Link>
          </div>
        </div>
      )
    });

    return (
      <div className="result">
        {listItems}
      </div>
    )
  }
}