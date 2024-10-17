import React from 'react'
import Xiaomi from '../../../../public/phoneloog.png'
import Realme from '../../../../public/realme.png'
import Apple from '../../../../public/apple.png'
import Iphone from '../../../../public/phones/Iphone.png'
import Realmephone from '../../../../public/phones/Realme.png'
import Xiaomiphone from '../../../../public/phones/Xiaomi.png'
import { motion, useScroll, useSpring } from "framer-motion"

function Topbrands() {
    // const Cards = [
    //     {
    //         id: 1,
    //         name: 'Iphone',
    //         logo: null,
    //         image: null,
    //         color: "bg-gray-800"
    //     },
    //     {
    //         id: 2,
    //         name: 'Realme',
    //         logo: 'https://seeklogo.com/images/R/realme-logo-8D20880530-seeklogo.com.png',
    //         image: null,
    //         color: "bg-yellow-200"
    //     },
    //     {
    //         id: 3,
    //         name: 'Xiaomi',
    //         logo: null,
    //         image: null,
    //         color: "bg-orange-200"
    //     },
    // ]
    return (
        <div>
            <div className="container mx-auto px-4">
                <span className='text-4xl font-semibold'>Top <span className='text-green-600'>Electronics Brands</span></span>
                <hr className="w-[23rem] border-green-700 border mt-3" />
                <div className="flex flex-wrap justify-center gap-6 w-full py-16 border-2 border-gray-300/100">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1, transition: 0.1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className={`border-2 w-[23rem] h-[14rem] rounded-2xl relative overflow-hidden bg-[#000000]/90 text-white`}>
                        <div className='bg-[#fefefe]/10 h-[14rem] w-[14rem] rounded-full absolute -right-9 -top-14 '></div>
                        <img src={Iphone} alt="" className='w-32 float-right relative mr-5 mt-4' />
                        <div className='absolute bottom-1 ml-3'>
                            <div className='bg-[#fefefe]/20 w-32 h-12 rounded-lg flex items-center justify-center uppercase font-bold text-[#fefefe]/80'>Iphone</div>
                            <img src={Apple} alt="" className='w-20 rounded-3xl mt-3 mb-3' />
                            <span className='font-semibold text-2xl'>Up to 60% OFF</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1 , transition: 0.1}}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className={`border-2 w-[23rem] h-[14rem] rounded-2xl relative overflow-hidden bg-[#fec917]/50 text-white `}>
                        <div className='bg-[#fec917]/70 h-[14rem] w-[14rem] rounded-full absolute -right-9 -top-14 '></div>
                        <img src={Realmephone} alt="" className='w-44 h-44 float-right mr-1 relative mt-10' />
                        <div className='absolute bottom-1 ml-3'>
                            <div className='bg-[#fec917]/60 w-32 h-12 rounded-lg flex items-center justify-center uppercase font-bold text-black'>Realme</div>
                            <img src={Realme} alt="" className='w-40  mt-3 mb-3' />
                            <span className='font-semibold text-2xl text-gray-950/90'>Up to 70% OFF</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1, transition: 0.1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className={`border-2 w-[23rem] h-[14rem] rounded-2xl relative overflow-hidden bg-[#ff6801]/20 text-white`}>
                        <div className='bg-[#ff6801]/40 h-[14rem] w-[14rem] rounded-full absolute -right-9 -top-14 '></div>
                        <img src={Xiaomiphone} alt="" className='w-32 float-right relative mr-7 mt-7' />
                        <div className='absolute bottom-1 ml-3'>
                            <div className='bg-[#ff6801]/30 w-32 h-12 rounded-lg flex items-center justify-center uppercase font-bold text-black'>Xiaomi</div>
                            <img src={Xiaomi} alt="" className='w-20 rounded-3xl mt-3 mb-3' />
                            <span className='font-semibold text-2xl text-gray-950/90'>Up to 40% OFF</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Topbrands
