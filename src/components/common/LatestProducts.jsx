import React from 'react'

import ProductImg from '../../assets/images/Mens/eight.jpg'
import ProductList from './Product/ProductList'
export default function LatestProducts() {
  return (
   <section className="section-2 py-5">
         <div className="container">
           <h2>Latest Arrivals</h2>
           <ProductList />
         </div>
       </section>
  )
}
