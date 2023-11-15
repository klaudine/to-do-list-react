import React, { useState, useEffect } from "react";
import List from "./List";
import Table from "./Table";
import ToDoList from "./ToDoList";




//create your first component
const Home = () => {
	return (
		<div>
			<Table />
			<ToDoList />
		</div>
	
)
	

};

export default Home;
