import React from 'react'
import Navbar from './Header/Navbar'
import Banner from './Home/Hero/Banner'
import ProductPage from './Home/Products/Productspage'
import ProductCard from "./Home/Products/ProductsCard";
import Footer from './Home/Footer';


function Home() {
  return (
    <div>
        <Banner/>
        <ProductCard/>
    </div>
  )
}

export default Home