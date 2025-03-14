import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import  Data from "../products.json"
import ProductCard from './ProductCard'
import Pagination from './Pagination'

const showResults=" Showing 01 - 12 of 139 results"



const Shop = () => {
    const [GridList , setGridList] = useState(true)
    const [products, setproducts] = useState(Data)
    // pagination
    const [currentPage,setCurrentPage]=useState(1);
    const productsPerPage = 12;

    const indexOfLastProduct = currentPage + productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct , indexOfLastProduct);

    //function to chance the current page
    const paginate =(pageNumber)=>{
        setCurrentPage(pageNumber)
    }
  return (
    <div>   
        <PageHeader title='Our Shop Page' curPage='shop'/>
        <div className='shop-page padding-tb'>
            <div className="container">
                
                    <div className='row justify-content-center'>
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className='shop-title d-flex flex-warp justify-content-between'>
                                    <p>{showResults}</p>
                                    <div>
                                        <div className={`product-view-mode ${GridList ? "gridAcive": "listActive"}`}>
                                            <a className='grid' onClick={()=>setGridList(!GridList)}>
                                                <i className='icofont-ghost'></i>
                                            </a>
                                            <a className='list' onClick={()=>setGridList(!GridList)}>
                                                <i className='icofont-listine-dots'></i>
                                            </a>
                                        </div>
                                    </div>

                               
                               
                                </div>

                                <div>
                                <ProductCard GridList={GridList} products={currentProducts}/>
                                </div>
                                <Pagination 
                                productsPerPage = {productsPerPage}
                                totalProducts={products.length}
                                paginate={paginate}
                                activePage={currentPage}/>
                            </article>
                        </div>

                        <div className='col-lg-4 col-12'>
                        Right side
                        </div>

                    </div>
                </div>
            </div>
        </div>

  )
}

export default Shop