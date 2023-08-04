'use client'
import React from 'react'
import { sortTodos } from '../../../utils/sortTodo'


const Table = ({
    searchQuery,
    handleSearch,
    filteredTodos,
    currentPage,
    countPerPage 
}) => {
    return (
        <div className="w-2/3 mx-auto my-20">
            <div className="bg-white shadow-md rounded my-6">
                <input
                    type="text"
                    value={searchQuery}
                    placeholder="Search..."
                    onChange={handleSearch}
                    className="block text-sm py-3 px-4 rounded-lg w-full border outline-none mb-4"
                />
                <table className="text-left w-full border-collapse"> {/*Border collapse doesn't work on this site yet but it's available in newer tailwind versions */}

                    <thead>
                        <tr>


                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Title</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Actions</th>
                        </tr>

                    </thead>

                    <tbody>
                        {
                            sortTodos(filteredTodos).slice(currentPage, currentPage + countPerPage).map((item) =>
                            (
                                <tr className="hover:bg-grey-lighter" key={item.id}>
                                    <td className="py-4 px-6 text-xl   border-b border-grey-light">{item.title}</td>
                                    <td className="py-4 px-6 flex  border-b border-grey-light">
                                        {/* <div className=" border bg-green-500 mx-2 py-2 font-bold py-1 px-3 rounded cursor-pointer hover:bg-green-300" onClick={handleUpdate} >
                                    Edit
                                </div> */}
                                        <a href={`/Edit?id=${item.id}&title=${item.title}`} className="border bg-green-500 py-2 font-bold  px-4 rounded cursor-pointer hover:bg-green-300" onClick={() => openUpdateForm(item.id, item.title)}>
                                            Edit
                                        </a>
                                        <div className=" border bg-red-500 py-2 font-bold px-3 rounded cursor-pointer hover:bg-red-300" onClick={() => handledelete(item.id)}>
                                            delete
                                        </div>
                                    </td>
                                </tr>

                            ))

                        }



                    </tbody>
                </table>

            </div>
            {/* <div className='flex justify-center'>
        <div
            className={`border border-3 px-2 rounded-full bg-slate-200 ${currentPage === 0 ? 'opacity-50 pointer-events-none' : 'cursor-pointer'
                }`}
            onClick={handlePreviousPage}
        >
            Pre
        </div>
        {pageNumbers.map((pageNumber) => (
            <div
                key={pageNumber}
                className={`border border-3 px-2 rounded-full bg-slate-200 mx-1 ${pageNumber === currentPage + 1 ? 'font-bold' : 'cursor-pointer'
                    }`}
                onClick={() => setCurrentPage(pageNumber - 1)}
            >
                {pageNumber}
            </div>
        ))}
        <div
            className={`border border-3 px-2 rounded-full bg-slate-200 mx-1 ${currentPage === totalPages - 1 ? 'opacity-50 pointer-events-none' : 'cursor-pointer'
                }`}
            onClick={handleNextPage}
        >
            Next
        </div>
    </div> */}


            {/* <div className="flex justify-center mt-4">
        <button
            className={`border px-2 py-1 rounded ${filterBy === "completed" ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
            onClick={() => setFilterBy("completed")}
        >
            Completed
        </button>
    </div> */}


        </div>
    )
}

export default Table