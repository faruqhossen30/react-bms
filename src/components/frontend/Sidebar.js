import React from 'react'

const Sidebar = () => {
    return (
        <div className='hidden lg:block lg:col-span-3 bg-white border border-purple-300'>
            <div className="bg-purple-800">
                <h4 className="text-white font-bold p-1 text-center">Sports</h4>
            </div>
            <div className="flex flex-col space-y-1 divide-y divide-slate-200">
                <a href="#" className="flex space-x-1 pl-2 last:border-b-0 p-1 hover:bg-green-100 ">
                    <img src="./img/footbal.png" className="h-5" alt="" />
                    <span>All</span>
                </a>
                <a href="#" className="flex space-x-1 pl-2 last:border-b-0 p-1 hover:bg-green-100">
                    <img src="./img/cricket.png" className="h-5" alt="" />
                    <span>Cricket</span>
                </a>
                <a href="#" className="flex space-x-1 pl-2 last:border-b-0 p-1 hover:bg-green-100">
                    <img src="./img/footbal.png" className="h-5" alt="" />
                    <span>Football</span>
                </a>
                <a href="#" className="flex space-x-1 pl-2 last:border-b-0 p-1 hover:bg-green-100">
                    <img src="./img/cricket.png" className="h-5" alt="" />
                    <span>Cricket</span>
                </a>
            </div>
        </div>
    )
}

export default Sidebar