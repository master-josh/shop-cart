import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Home";
import Lists from "./Components/ProductLists/Lists";
import Footer from "./Components/Home/Footer";
import Loading from "./Components/Loading";
import { motion, useScroll, useSpring } from "framer-motion";
import LoginForm from "./Components/Users/LoginForm";
import SignupForm from "./Components/Users/SignupForm";
import CartPage from "./Components/Cart/Cartpage";
import toast, { Toaster } from 'react-hot-toast'
import ProductPage from "./Components/Home/Products/Productspage";

function App() {
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <MainLayout scaleX={scaleX} />
    </BrowserRouter>
  );
}

const MainLayout = ({ scaleX }) => {
  const location = useLocation();
  const noNavbarPaths = ['/shop','/login','/signup']; 
  const shouldShowNavbar = !noNavbarPaths.includes(location.pathname);

  return (
    <div>
      <motion.div
        className="progress-bar h-2 z-50 fixed top-0 left-0 right-0 bg-green-600 origin-left"
        style={{ scaleX }}
      />
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/shop" element={<Lists />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
