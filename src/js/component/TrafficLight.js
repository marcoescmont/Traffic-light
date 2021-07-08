import React, { useState } from "react";

const TrafficLight = () => {
	const [currentLight, nextLight] = useState("red");

	return (
		<div className="container text-center">
			<h1 className="fas fa-circle text-danger "></h1>
			<h1 className="fas fa-circle text-warning"></h1>
			<h1 className="fas fa-circle text-success"></h1>
		</div>
	);
};

export default TrafficLight;
