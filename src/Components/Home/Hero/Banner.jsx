// // import React from 'react'
// // import Bannerimage1 from '../../../../public/Banner-imgs/cyber-monday-celebration.jpg'

// // function Banner() {
// //     return (
// //         <section>
// //             <div className='container'>
// //                <div className='border-2 py-52 rounded-xl mt-4'>
// //                 <img src={Bannerimage1} alt="" className='x' />
// //                </div>
// //             </div>
// //         </section>
// //     )
// // }

// // export default Banner

// import React from 'react';
// import { Autoplay, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/controller';
// import Bannerimage1 from '../../../../public/Banner-imgs/cyber-monday-celebration.jpg'
// import Bannerimage2 from '../../../../public/Banner-imgs/Oppo.jpeg'
// import Bannerimage3 from '../../../../public/Banner-imgs/vivo IQOO 3.jpeg'

// function Banner() {
//     const images = [
//         Bannerimage1,
//     ];

//     return (
//         <section className='container mt-7'>
//             <Swiper
//                 modules={[Autoplay, A11y]}
//                 spaceBetween={30} // Adjust the spacing as needed
//                 slidesPerView={1} // Show only one slide by default
//                 autoplay
//             >
//                 {images.map((img, index) => (
//                     <SwiperSlide key={index}>
//                         <a href='/#'>
//                             <img
//                                 src={img}
//                                 alt={`slide-${index + 1}`}
//                                 className='w-full h-[400px] object-cover mx-auto select-none' // Changed w-fit to w-full
//                             />
//                         </a>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </section>
//     );
// }

// export default Banner;

import React from "react";
import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div>
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <section
            className="relative bg-cover bg-center h-[30rem]"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/shiny-headphones-illuminate-nightclub-modern-entertainment-generated-by-ai_188544-25756.jpg?t=st=1728387706~exp=1728391306~hmac=dd338e4d5d16acc3b09492e205d0caa2a7f273ffe6524cd2956f0606b53c1158&w=826')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
              <h1 className="text-4xl font-bold">
                Discover Premium Audio Gear
              </h1>
              <p className="mt-4 text-lg">
                Unmatched Quality, Exclusive Discounts.
              </p>
              <Link to='/shop'>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.4 }}
                className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
              >
                Shop Now
              </motion.button>
              </Link>
            </div>
          </section>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <section
            className="relative bg-cover bg-center h-[30rem]"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/portrait-young-adult-listening-radio-transmission_23-2151063325.jpg?t=st=1728387841~exp=1728391441~hmac=e3534f908301849a74e5bb721399ca677e4018373bd4623fe52c892cedf54b80&w=740')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
              <h1 className="text-4xl font-bold">Unleash Superior Sound</h1>
              <p className="mt-4 text-lg">Get the Latest Deals on Headphones</p>
              <Link to='/shop'>
                <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                  Shop Now
                </button>
              </Link>
            </div>
          </section>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <section
            className="relative bg-cover bg-center h-[30rem]"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/brown-retro-electronic-speakers-device_23-2151002774.jpg?t=st=1728387997~exp=1728391597~hmac=531fa8ada0c96d6ad669360776d8fd80f51c0135d4ff49288d5b8d051952a6c4&w=826')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
              <h1 className="text-4xl font-bold">
                Exclusive Discounts on Speakers
              </h1>
              <p className="mt-4 text-lg">Upgrade Your Home Audio Experience</p>
              <Link to='/shop'>
              <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                Shop Now
              </button>
              </Link>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
