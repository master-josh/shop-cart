import React from 'react'

function Loading() {
    return (
        <div className='w-screen h-screen bg-white flex justify-center items-center'>
            <div className='w-20 h-20 border-t-4 border-b-4 border-green-600 rounded-full animate-spin'>
            </div>
            <div className='ml-7'>
                <h1 className='text-green-600 font-bold text-2xl'>Shopcart</h1>
            </div>
        </div>
    )
}

export default Loading
