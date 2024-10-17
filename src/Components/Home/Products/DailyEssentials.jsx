import React from 'react'
import Veg from '../../../../public/Daily/Veg.png'
import Mangos from '../../../../public/Daily/Mangos.png'
import Banana from '../../../../public/Daily/Banana.png'
import Basket from '../../../../public/Daily/Basket.png'
import { motion } from 'framer-motion'

function DailyEssentials() {
  const Products = [
    {
      id: 1,
      name: "Vegetables",
      discount: "20% OFF",
      image: (Veg)
    },
    {
      id: 2,
      name: "Mangos",
      discount: "50% OFF",
      image: (Mangos)
    },
    {
      id: 3,
      name: "Banana",
      discount: "70% OFF",
      image: (Banana)
    },
    {
      id: 4,
      name: "DailyEssentials",
      discount: "10% OFF",
      image: (Basket)
    },
    {
      id: 4,
      name: "DailyEssentials",
      discount: "10% OFF",
      image: (Basket)
    },
    {
      id: 4,
      name: "DailyEssentials",
      discount: "10% OFF",
      image: (Basket)
    },
  ]
  return (
    <div>
      <div className='container mx-auto'>
        <span className='text-4xl font-semibold'>Daily <span className='text-green-600'>Essentials</span></span>
        <hr className="w-[16rem] border-green-700 border mt-2" />
        <div className='start py-20 gap-8 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  md:border-2 border-gray-300/100 '>
          {Products.map((product) => (
            <motion.div
              whileHover={{ scale: [null, 1.1, 1.1] }}
              transition={{ duration: 0.3 }}
              whileTap={{scale: [null, 1.2, 1.4]}}
              className='flex flex-col justify-center items-center'>
              <div className='border-2 h-52 w-52 flex flex-col items-center justify-center rounded-lg bg-gray-400/20 hover:border-green-600'>
                <img src={product.image} alt="" className='w-36' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <span className='text-lg'>{product.name}</span>
                <span className='text-2xl font-semibold'>UP to {product.discount}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DailyEssentials
