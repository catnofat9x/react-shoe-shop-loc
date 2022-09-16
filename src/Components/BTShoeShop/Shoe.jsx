import React, { Component } from 'react'

export default class Shoe extends Component {
  render() {
    console.log(this.props.product)
    // destructuring
    const { product, handleShoeDefault } = this.props
    return (
      <div className="card">
        <img src={product.image} alt="..." />
        <div className="card-body text-left">
          <p>{product.name}</p>
          <p>{product.price} $</p>
          <div className="row d-flex justify-content-center">
            <button
              className="btn btn-dark"
            >
              add to carts  <i class="fa-solid fa-cart-arrow-down"></i>
            </button>
            <button className='btn btn-success ml-3' data-toggle="modal" data-target="#exampleModal"
            onClick={() => handleShoeDefault(product)}>Xem chi tiết</button>
          </div>
        </div>
      </div>
    )
  }
}
