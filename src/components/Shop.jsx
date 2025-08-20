import React from 'react'
import Layout from './common/Layout'
import Hero from './common/Hero'
import ProductImg from '../assets/images/Mens/eight.jpg'
function Shop() {
  return (
    <>
    <Layout>
      <div>
        <div className="container">
        <nav aria-label="breadcrumb" className='py-4'>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Shop</li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-md-3">
            <div className="card shadow border-0 mb-3">
              <div className="card-body p-4">
                <h3 className='mb-3'>Categories</h3>
                <ul>
                  <li className='mb-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className='ps-2'>Kids</label>
                  </li>
                  <li className='mb-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className='ps-2'>Mans</label>
                  </li>
                  <li className='mb-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className='ps-2'>Kids</label>
                  </li>
                </ul>
              </div>

            </div>
            <div className="card shadow border-0 mb-3">
              <div className="card-body p-4">
                <h3 className='mb-3'>Brand</h3>
                <ul>
                  <li className='mb-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className='ps-2'>Puma</label>
                  </li>
                  <li className='mb-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className='ps-2'>Aron</label>
                  </li>
                  <li className='mb-2'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className='ps-2'>Icons</label>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          <div className="col-md-9">
          <div className="row">
              <div className="col-md-3 col-6 mt-2">
                          <div className="product card border-0">
                            <div className="card-img">
                              <img 
                              src={ProductImg} 
                              alt="" 
                              className='w-100'
                              />
                            </div>
                            <div className="card-body pt-3">
                              <a href="">Red Check Shirt For Men</a>
                              <div className="price">
                                $50 <span className='text-decoration-line-through'>$80</span>
              
                              </div>
                            </div>
                              
                          </div>
              </div>
              <div className="col-md-3 col-6 mt-2">
                          <div className="product card border-0">
                            <div className="card-img">
                              <img 
                              src={ProductImg} 
                              alt="" 
                              className='w-100'
                              />
                            </div>
                            <div className="card-body pt-3">
                              <a href="">Red Check Shirt For Men</a>
                              <div className="price">
                                $50 <span className='text-decoration-line-through'>$80</span>
              
                              </div>
                            </div>
                              
                          </div>
                </div>
                <div className="col-md-3 col-6 mt-2">
                            <div className="product card border-0">
                              <div className="card-img">
                                <img 
                                src={ProductImg} 
                                alt="" 
                                className='w-100'
                                />
                              </div>
                              <div className="card-body pt-3">
                                <a href="">Red Check Shirt For Men</a>
                                <div className="price">
                                  $50 <span className='text-decoration-line-through'>$80</span>
                
                                </div>
                              </div>
                                
                            </div>
                          </div>
            <div className="col-md-3 col-6 mt-2">
                        <div className="product card border-0">
                          <div className="card-img">
                            <img 
                            src={ProductImg} 
                            alt="" 
                            className='w-100'
                            />
                          </div>
                          <div className="card-body pt-3">
                            <a href="">Red Check Shirt For Men</a>
                            <div className="price">
                              $50 <span className='text-decoration-line-through'>$80</span>
            
                            </div>
                          </div>
                            
                        </div>
                      </div>
            <div className="col-md-3 col-6 mt-2">
                        <div className="product card border-0">
                          <div className="card-img">
                            <img 
                            src={ProductImg} 
                            alt="" 
                            className='w-100'
                            />
                          </div>
                          <div className="card-body pt-3">
                            <a href="">Red Check Shirt For Men</a>
                            <div className="price">
                              $50 <span className='text-decoration-line-through'>$80</span>
            
                            </div>
                          </div>
                            
                        </div>
                      </div>
            
                      <div className="col-md-3 col-6 mt-2">
                        <div className="product card border-0">
                          <div className="card-img">
                            <img 
                            src={ProductImg} 
                            alt="" 
                            className='w-100'
                            />
                          </div>
                          <div className="card-body pt-3">
                            <a href="">Red Check Shirt For Men</a>
                            <div className="price">
                              $50 <span className='text-decoration-line-through'>$80</span>
            
                            </div>
                          </div>
                            
                        </div>
              </div>
              <div className="col-md-3 col-6 mt-2">
                        <div className="product card border-0">
                          <div className="card-img">
                            <img 
                            src={ProductImg} 
                            alt="" 
                            className='w-100'
                            />
                          </div>
                          <div className="card-body pt-3">
                            <a href="">Red Check Shirt For Men</a>
                            <div className="price">
                              $50 <span className='text-decoration-line-through'>$80</span>
            
                            </div>
                          </div>
                            
                        </div>
              </div>
              <div className="col-md-3 col-6 mt-2">
                        <div className="product card border-0">
                          <div className="card-img">
                            <img 
                            src={ProductImg} 
                            alt="" 
                            className='w-100'
                            />
                          </div>
                          <div className="card-body pt-3">
                            <a href="">Red Check Shirt For Men</a>
                            <div className="price">
                              $50 <span className='text-decoration-line-through'>$80</span>
            
                            </div>
                          </div>
                            
                        </div>
              </div>
            </div>
          </div>
        </div>

     
        </div>
      </div>
    </Layout>
    </>
  )
}

export default Shop
