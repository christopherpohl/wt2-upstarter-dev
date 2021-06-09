import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'


class Product {
  constructor(id, shortName, description) {
    this.id = id;
    this.shortName = shortName;
    this.description = description;
  }
}

function Details(props) {
  return (
    <div className="info">
      ID: {props.product.id}<br />
      Short Name: {props.product.shortName}<br />
      Description: {props.product.description}<br />
    </div>
  )
}

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /*products: [
        "EBook Muster",
        "Book Muster"
      ]*/ // bis Übung 6
      products: [
        new Product(1, "EBook", "Dies ist ein EBook Muster."),
        new Product(2, "Buch", "Das Buch dient ebenfalls als Muster.")
      ]
    }
  }
  render() {

    return (
      <div className="products">
        The products are listed here.
        <BrowserRouter>
          <ul>
            {
              this.state.products.map((value) => (
                <li key={value.id}><Link to={`${this.props.match.url}/${value.id}`} >{value.shortName}</Link></li>
              ))
            }
          </ul>
          <Route path={`${this.props.match.path}/:productID`} render={(props) => (
            <Details product={this.state.products.find(p => p.id == props.match.params.productID)} />
          )} />

        </BrowserRouter>
      </div>
    )
  }

  // render-Methode nach Übung 3
  /*
  render() {
    return (
      <div className="products">
        The products are listed here.
        <ul>
          {
            this.state.products.map((value) => (
              <li key={value}>{value}</li>
            ))
          }
        </ul>
      </div>
    )
  }
  */

}


export default Products;