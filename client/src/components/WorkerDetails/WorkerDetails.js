/**
 * Created by sunkj on 11/25/2016.
 */

import React, { Component } from 'react'
import WorkerService from 'COMPONENTS/Services/WorkerService'


export default class WorkerDetails extends Component {

  constructor(props) {
    super(props);

    this.state = { Booked: {}, IdCard: {} };

  }

  componentDidMount() {
    console.log(123);
    WorkerService.getDetails(this.props.id)
      .then(res => {
        this.setState({IdCard: res.IdCard});
        this.setState({Booked: res.Booked});
      }, err => {
        console.log('获取详情信息错误：', err);
      });
  }

  render() {
    return (
      <div className="b-b wrapper m-t-xxl">
        <div className="row">
          <div className="col-md-10">
            <div className="panel-body pull-in b-light">
              <a className="thumb-lg pull-left m-r">
                <img src={'http://121.40.125.50:88/' + this.state.Booked.Avatar} className="img-circle" />
              </a>
              <div className="clear">
                <a href="#" className="text-primary block m-t m-b-xs h2">{this.state.IdCard.Name}</a>
                <a href="#" className="text-muted block m-b-xs">{this.state.IdCard.Age}岁 | {this.state.Booked.Homtown}</a>
                <a href="#" className="text-muted block m-b-xs">{this.state.Booked.ServiceTypes}</a>
                <a href="#" className="text-muted block m-b-xs">{this.state.Booked.Status}</a>
                <a href="#" className="text-muted block m-b-xs">期望工资： {this.state.Booked.SalaryRequirement} 元</a>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="m-t-xl">
              <p><span className="text-muted">编号： </span><span className="text-danger font-bold h4">{this.state.Booked.Id}</span></p>
              <p><a href="#" className="btn btn-default text-info h4">修改</a></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="m-b text-muted">基本信息</div>
          <div className="">
            <span className="label m-l-sm bg-primary">{this.state.IdCard.Sex}</span>
            <span className="label m-l-sm bg-success">{this.state.IdCard.Nation}</span>
            <span className="label m-l-sm bg-info">{this.state.IdCard.Zodiac}</span>
            <span className="label m-l-sm bg-danger">{this.state.IdCard.Constellation}</span>
            <span className="label m-l-sm bg-black">{this.state.Booked.Marrage}</span>
          </div>
        </div>
      </div>
    )
  }
}