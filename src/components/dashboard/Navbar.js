import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-10 flex justify-between items-center px-3 py-1 text-gray-900 bg-white shadow-md'>
            {/* Left */}
            <div className='flex items-center'>
              <div className='cursor-pointer md:hidden'>
                <span onClick={toggleSidebar}><FaBars /></span>
              </div>
              <div className="ml-4 relative">
                <div className="cursor-pointer flex items-center text-gray-500 space-x-1">
                  <FaPlusCircle />
                  <span className='  font-semibold text-sm'>Create New</span>
                </div>
                <div id="dropdown_content" className="hidden absolute z-50 mt-2 rounded-md shadow-lg w-48 right-0 py-1 bg-white">
                  <div className="px-4 py-2 text-xs text-gray-400">
                    Manage Account
                  </div>
                  <a href="#"
                    className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 transition">Profile</a>
                  <a href="#" className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 transition">Logout</a>
                </div>
              </div>
            </div>
            {/* Right */}
            <div>
              <div className="ml-auto flex items-center">
                <div>
                  <FaRegBell />
                </div>
                <div className="ml-4 relative">
                  <div className="cursor-pointer">
                    <img onClick={toggleClass} className="h-8 w-8 rounded-full object-cover" src="https://ui-avatars.com/api/?name=Faruq+Hossen" alt="" />
                  </div>
                  <div className={`${isToggle && "hidden"} absolute z-50 mt-2 rounded-md shadow-lg w-48 right-0 py-1 bg-white`}>
                    <div className="px-4 py-2 text-xs text-gray-400">
                      Manage Account
                    </div>
                    <a href="#"
                      className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 transition">Profile</a>
                    <a href="#" className=" block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 transition">Logout</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
  )
}

export default Navbar