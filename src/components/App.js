import React, { useState } from "react";
import Nav from "./Nav";
import Hogs from "./Hogs"
import hogs from "../porkers_data";

function App() {
	const [hogArray, filterHogs] = useState([{...hogs}])

	const renderHogs = hogArray.map((hog) => 
		<Hogs
			name={hog.name}
			image={hog.image}
		/>
	)
	return (
		<div className="App">
			<Nav />
			{renderHogs}
		</div>
	);
}

export default App;
