'use client'
import AddForm from './AddForm'
import Table from './Table'
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { addtodos, deleteTodo, updateTodo } from '../../features/todoslice';
import { v4 as uuidv4 } from 'uuid';
import { sortTodos } from '../../../utils/sortTodo'
import Pagination from './Pagination'

const Home = () => {
    const todos = useSelector((state) => state.todo.todo);
    console.log("todo", todos);
    const [input, setInput] = useState("");
    const [sortBy, setSortBy] = useState("asc"); // Default sort order is ascending
    const [filterBy, setFilterBy] = useState("");
    const [isupdate, setIsupdate] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const countPerPage = 5;
    const dispach = useDispatch();

    const handleadd = () => {
        dispach(addtodos({ id: uuidv4(), title: input }));
        setInput("");
        setSearchQuery("");
    };

    const handledelete = (index) => {
        dispach(deleteTodo(index));
        setSearchQuery("");
    };

    const openUpdateForm = (id, title) => {
        setItemData({ id, title });
        console.log(itemsData);
        setIsupdate(true);
        setSearchQuery("");
    };

    // const handlePreviousPage = () => {
    //     setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    // };

    sortTodos(todos, sortBy);


    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    // Just before the return statement
    const filteredTodos = todos.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


    const totalPages = Math.ceil(filteredTodos.length / countPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);


    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    };
  return (
    <>
        <AddForm 
        input={input}
         setInput={setInput}
         handleadd={handleadd} />
        <Table 
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        filteredTodos={filteredTodos}
        currentPage={currentPage}
        countPerPage={countPerPage}
        />
          <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
    </>
  )
}

export default Home