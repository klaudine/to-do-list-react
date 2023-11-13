import React, { useState, useEffect } from "react";
import DefaultE from "./listGroup";
import toDoList from "./toDoList";



//create your first component
const Home = () => {
	return (
		<div>
			<listGroup />

			<toDoList />
		</div>
	
)
	

};

export default Home;
