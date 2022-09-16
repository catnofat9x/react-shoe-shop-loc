import React, { Component } from 'react'

export default class ShoeDetail extends Component {
  render() {
    const { shoe } = this.props
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <img style={{ width: '100%' }} src={shoe.image} alt="" />
          </div>
          <div className="col-12 text-left">
            <h1>{shoe.name}</h1>
            <p className='display-4'>{shoe.price} $</p>
            <span>{shoe.description}</span>
          </div>
        </div>
      </div>
    )
  }
}
