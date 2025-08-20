import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ img, title, price, oldPrice }) {
  return (
    <div className="col-md-3 col-6">
      <div className="product card border-0">
        <Link to="/product">
          <div className="card-img">
            <img src={img} alt={title} className="w-100" />
          </div>
          <div className="card-body pt-3">
            <a href="#">{title}</a>
            <div className="price">
              ${price}{" "}
              <span className="text-decoration-line-through">${oldPrice}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
