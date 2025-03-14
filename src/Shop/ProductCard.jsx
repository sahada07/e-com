import React from 'react'
import { Link } from 'react-router-dom'
import Ratting from '../components/Ratting'

const ProductCard = ({GridList, products}) => {
    
  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`}>
        {
            products.map((product) => (
                <div key={product.id} className={`col-lg-4 col-md-6 ${GridList ? "col-md-12" : "col-12"}`}>
                    {GridList ? (
                        <div className='product-item'>
                            <div className='product-thumb'>
                                <div className='pro-thumb'>
                                    <img src={product.img} alt={product.name} />
                                </div>

                                {/* product action link */}
                                <div className='product-action-link'>
                                    <Link to={`/shop/${product.id}`}><i className='icofont-eye'></i></Link>
                                    <a href="#">
                                        <i className='icofont-heart'></i>
                                    </a>
                                    <Link to="/cart-page"><i className='icofont-cart-alt'></i></Link>
                                </div>
                            </div>

                            {/* product content */}
                            <div className='product-content'>
                                <h5>
                                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                </h5>
                                <p className='productRating'>
                                    <Ratting/>
                                </p>
                                <h6>${product.price}</h6>
                            </div>
                        </div>
                    ) : (
                        <div className='product-list-item'>
                            <div className='product-thumb'>
                                <div className='pro-thumb'>
                                    <img src={product.img} alt={product.name} />
                                </div>

                                {/* product action link */}
                                <div className='product-action-link'>
                                    <Link to={`/shop/${product.id}`}><i className='icofont-eye'></i></Link>
                                    <a href="#">
                                        <i className='icofont-heart'></i>
                                    </a>
                                    <Link to="/cart-page-alt"><i className='icofont-cart-alt'></i></Link>
                                </div>
                            </div>

                            {/* product content */}
                            <div className='product-content'>
                                <h5>
                                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                </h5>
                                <p className='productRating'>
                                    <Ratting/>
                                </p>
                                <h6>${product.price}</h6>
                            </div>
                        </div>
                    )}
                </div>
            ))
        }
    </div>
  )
}

export default ProductCard