import React from "react";
import ProductCard from "./ProductCard";
import ProductImg from '../../../assets/images/Mens/eleven.jpg';
import ProductTowImg from '../../../assets/images/Mens/eight.jpg';
import ProductThreeImg from '../../../assets/images/Mens/five.jpg';
import ProductFourImg from '../../../assets/images/Mens/six.jpg';

export default function ProductList() {
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
  ];

  return (
    <div className="row mt-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
