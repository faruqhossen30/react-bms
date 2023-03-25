import React from 'react'
import { FaGamepad } from 'react-icons/fa'

const CardStatus = () => {
    return (
        <div className='col-span-6 md:col-span-4 shadow-lg border p-3'>
            <div className='flex items-center justify-between'>
                <div className='flex'>
                    <FaGamepad className="border rounded-full h-12 w-12 p-1 text-lg" />
                    <div className='flex flex-col ml-2 text-left'>
                        <span className='text-xs text-gray-500'>Toatal</span>
                        <span>Match</span>
                    </div>
                </div>
                <div>
                    <span className=' font-semibold'>10</span>
                </div>
            </div>
        </div>
    )
}

export default CardStatus