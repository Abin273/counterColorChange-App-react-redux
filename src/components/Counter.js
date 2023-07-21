import React from "react";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/reducer/counterReducer";
import { changeColor } from "../redux/reducer/colorReducer";

import randomColor from "randomcolor";

function Counter() {
	const count = useSelector((state) => state.counter.value);
	const color = useSelector((state) => state.color.value)
	const dispatch = useDispatch();

	const change_color = () => {
		dispatch(changeColor({
			color: randomColor()   //payload
		}))
	}

	return (
		<div className="counter-container">
			<h2 className="counter-title" style={{ color }}> Reactjs redux example Counter</h2>
			<p className="counter-value">{count}</p>
			<div className="counter-buttons">
				<button
					className="counter-button"
					onClick={() => {
						dispatch(decrement());
					}}
				>
					decrement
				</button>
				<button
					className="counter-button"
					onClick={() => {
						dispatch(increment());
					}}
				>
					increment
				</button>


				<button
					className="counter-button"
					onClick={() => {
						dispatch(change_color);
					}}
				>
					changeColor
				</button>
			</div>
		</div>
	);
}

export default Counter;
