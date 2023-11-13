import React, { useState, useEffect } from "react";

const toDoList = () => {
    const [todo, setTodo] = useState('')
	const [todos, setTodos] = useState([])

	const handleChange = (evt) => setTodo(evt.target.value)
	const handleClick = () => {
		setTodos(prev => [...prev, todo])
		setTodo('')
	}
 	
	const handleFilter = (index) => () => {
		setTodos(todos.filter((_, todoIndex) => todoIndex !==index))
 	}


	return (
		<div className="container flex-column text-center">
		    
                <input onChange={handleChange} value={todo} />
				<button onClick={handleClick}>Add</button>
				<ul>
					{todos.map((data, index) => <li key={`${data}-${index}`}>{data} <span onClick={handleFilter(index)}>X</span></li>)}
				</ul>

			
		</div>
	);
}

export default toDoList;