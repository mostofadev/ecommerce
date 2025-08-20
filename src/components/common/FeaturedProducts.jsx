import React from "react";
import ProductList from "./Product/ProductList";

export default function FeaturedProducts() {
  return (
    <section className="section-2 py-5">
      <div className="container">
        <h2>New Arrivals</h2>
        <ProductList />
      </div>
    </section>
  );
}
