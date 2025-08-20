import React from "react";
import Layout from "./common/Layout";
import ProductImg from "../assets/images/Mens/eleven.jpg";
import ProductTowImg from "../assets/images/Mens/eight.jpg";
import ProductThreeImg from "../assets/images/Mens/five.jpg";
import ProductFourImg from "../assets/images/Mens/six.jpg";
import ProductCard from "./common/Product/ProductCard";

function Shop() {
  const products = [
    {
      id: 1,
      title: "Red Check Shirt For Men",
      img: ProductImg,
      price: 50,
      oldPrice: 80,
    },
    {
      id: 2,
      title: "Blue Denim Jacket",
      img: ProductTowImg,
      price: 70,
      oldPrice: 100,
    },
    {
      id: 3,
      title: "Classic White T-shirt",
      img: ProductThreeImg,
      price: 30,
      oldPrice: 50,
    },
    {
      id: 4,
      title: "Black Formal Shirt",
      img: ProductFourImg,
      price: 60,
      oldPrice: 90,
    },
    {
      id: 5,
      title: "Red Check Shirt For Men",
      img: ProductImg,
      price: 50,
      oldPrice: 80,
    },
    {
      id: 6,
      title: "Blue Denim Jacket",
      img: ProductTowImg,
      price: 70,
      oldPrice: 100,
    },
    {
      id: 7,
      title: "Classic White T-shirt",
      img: ProductThreeImg,
      price: 30,
      oldPrice: 50,
    },
    {
      id: 8,
      title: "Black Formal Shirt",
      img: ProductFourImg,
      price: 60,
      oldPrice: 90,
    },
  ];

  return (
    <Layout>
      <div className="container">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="py-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Shop
            </li>
          </ol>
        </nav>

        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3">
            <div className="card shadow border-0 mb-3">
              <div className="card-body p-4">
                <h3 className="mb-3">Categories</h3>
                <ul>
                  <li className="mb-2">
                    <input type="checkbox" id="kids" />
                    <label htmlFor="kids" className="ps-2">
                      Kids
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" id="men" />
                    <label htmlFor="men" className="ps-2">
                      Men
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" id="women" />
                    <label htmlFor="women" className="ps-2">
                      Women
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card shadow border-0 mb-3">
              <div className="card-body p-4">
                <h3 className="mb-3">Brand</h3>
                <ul>
                  <li className="mb-2">
                    <input type="checkbox" id="puma" />
                    <label htmlFor="puma" className="ps-2">
                      Puma
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" id="aron" />
                    <label htmlFor="aron" className="ps-2">
                      Aron
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" id="icons" />
                    <label htmlFor="icons" className="ps-2">
                      Icons
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="col-md-9">
            <div className="row">
              {products.map((product) => (
                
                  <ProductCard {...product} />
                
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Shop;
