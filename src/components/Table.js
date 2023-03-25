import React from 'react'

const Table = () => {
    return (
        <table className="border-collapse border border-slate-400 w-full">
            <thead>
                <tr className='bg-gray-100 text-gray-500 text-md font-normal'>
                    <th className="border border-slate-300">S.N</th>
                    <th className="border border-slate-300">User</th>
                    <th className="border border-slate-300">Amount</th>
                    <th className="border border-slate-300">Method</th>
                    <th className="border border-slate-300">From</th>
                    <th className="border border-slate-300">To</th>
                    <th className="border border-slate-300">Transaction</th>
                    <th className="border border-slate-300">Status</th>
                    <th className="border border-slate-300">Action</th>
                    <th className="border border-slate-300">Time</th>
                </tr>
            </thead>
            <tbody>
                <tr className='p-1 text-sm' >
                    <td className="p-2 border border-slate-300 text-center">1</td>
                    <td className="p-2 border border-slate-300">sdf</td>
                    <td className="p-2 border border-slate-300">sdf</td>
                    <td className="p-2 border border-slate-300">sdf</td>
                    <td className="p-2 border border-slate-300">sdf</td>
                    <td className="p-2 border border-slate-300">sdf</td>
                    <td className="p-2 border border-slate-300">sdf</td>
                    <td className="p-2 border border-slate-300">
                        <span className="m-2 px-2 py-1 bg-green-200 hover:bg-green-300 rounded-full text-xs font-normal text-green-600">
                            Completed
                        </span><span className="m-2 px-2 py-1 bg-red-200 hover:bg-green-300 rounded-full text-xs font-normal text-green-600">
                            Pending
                        </span>
                    </td>
                    <td className="p-2 border border-slate-300 text-center ">

                        {/* <FaCheckCircle className='text-green-700' /> */}
                        <Link to='' className="inline-flex items-center justify-center w-5 h-5 text-green-700 transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-pink-800">
                            <FaEdit />
                        </Link>

                    </td>
                    <td className="p-2 border border-slate-300">dfsdf</td>
                </tr>

            </tbody>
        </table>
    )
}

export default Table