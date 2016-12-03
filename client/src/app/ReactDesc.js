/**
 * Created by sunkj on 12/2/2016.
 */
import React, { Component } from 'react'

export default class ReactDesc extends Component {
  render() {
    return (
      <div>
        <h3>React 详情</h3>
        <div>
          acebook认为MVC无法满足他们的扩展需求，由于他们非常巨大的代码库和庞大的组织，使得MVC很快变得非常复复杂，每当需要添加一项新的功能或特性时，系统的复杂度就成级数增长，致使代码变得脆弱和不可预测，结果导致他们的MVC正在土崩瓦解。认为MVC不适合大规模应用，当系统中有很多的模型和相应的视图时，其复杂度就会迅速扩大，非常难以理解和调试，特别是模型和视图间可能存在的双向数据流动。
        </div>
      </div>
    )
  }
}