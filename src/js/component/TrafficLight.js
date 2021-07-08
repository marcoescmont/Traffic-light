import React, { useState } from "react";
import "../../styles/index.scss";

const TrafficLight = () => {
	const [currentLight, nextLight] = useState("red");

	let lightCircle = <h1 type="button" className="fas fa-circle"></h1>;
	return (
		<div className="container text-center trafficLightBody">
			<div
				className={
					currentLight == "red"
						? "text-danger highlight"
						: "text-danger"
				}
				onClick={() => nextLight("red")}>
				{lightCircle}
			</div>
			<div
				className={
					currentLight == "yellow"
						? "text-warning highlight"
						: "text-warning"
				}
				onClick={() => nextLight("yellow")}>
				{lightCircle}
			</div>
			<div
				className={
					currentLight == "green"
						? "text-success highlight"
						: "text-success"
				}
				onClick={() => nextLight("green")}>
				{lightCircle}
			</div>
		</div>
	);
};

export default TrafficLight;
