'use client'
import React, { useState } from 'react';
import { addtodos, deleteTodo, updateTodo } from '../../features/todoslice';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
// import { Pagination } from './Pagination';
import Pagination from './Pagination'; // Update the path based on your file structure


const AddForm = ({input,setInput,handleadd}) => {

    return (
        <>
            <div className="  mt-20 flex justify-center items-center">
                <div className="py-12 px-12 bg-purple-200 rounded-2xl shadow-xl z-20">
                    <div className="space-y-4">
                        <input type="text"
                            name='name'
                            id=''
                            value={input}
                            placeholder='Add Data'
                            onChange={(e) => setInput(e.target.value)}
                             className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    </div>
                    <div className="text-center mt-6">
                        <button className={`py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl 
                        ${input === "" ? "disabled" : ""} `} 
                        onClick={handleadd}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddForm