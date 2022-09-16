// rcc
import React, { Component } from 'react'
import data from './data.json'
import Shoe from './Shoe'
import ShoeDetail from './ShoeDetail'

export default class BTShoeShop extends Component {
  state = {
    giay: {
      "id": 1,
      "name": "Adidas Prophere",
      "alias": "adidas-prophere",
      "price": 350,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 995,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    }
  }

  handleShoeDefault = (shoe) => {
    this.setState({
      giay: shoe,
    })
  }
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Shoes Shop</h2>
        {/* MODAL  */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Chi tiết sản phẩm</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {/* SHOE DETAIL  */}
                      <ShoeDetail shoe={this.state.giay} />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-dark">add to carts <i class="fa-solid fa-cart-arrow-down"></i></button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-2">
            <p>Home</p>
            <p>Shop</p>
          </div>
          <div className="col-md-10">
            <div className="row">
              {data.map((value) => {
                // console.log(value)
                return (
                  <div className="col-12 col-md-6 col-lg-4 mt-3" key={value.id}>
                    {/* SHOE LIST  */}
                    <Shoe product={value} handleShoeDefault={this.handleShoeDefault}/>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
