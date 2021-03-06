import React from 'react';
import './style.css';

const algoStateColorConfig = {
	MergeSort: [
		{ name: "Unsorted Group", colorClass: "StateColor__item__color--group" },
		{ name: "Group Sorted", colorClass: "StateColor__item__color--group-sorted" }
	],
	QuickSort: [
		{ name: "Partiiton Index", colorClass: "StateColor__item__color--partition-index" },
		{ name: "Pivot", colorClass: "StateColor__item__color--pivot" }
	],
	SelectionSort: [
		{ name: "Current Minimum", colorClass: "StateColor__item__color--current-minimum" },
		{ name: "Current Item", colorClass: "StateColor__item__color--current-item" }
	],
	InsertionSort: [
		{ name: "Sorted Chunk", colorClass: "StateColor__item__color--sorted-chunk" },
		{ name: "Unsorted Chunk", colorClass: "StateColor__item__color--unsorted-chunk" }
	]
}


function StateColor({ algorithm }) {

	return (
		<div className="StateColor">
			<div className="StateColor__item">
				<span className="StateColor__item__color StateColor__item__color--unsorted"></span>
				<span className="StateColor__item__name">Unsorted</span>
			</div>
			<div className="StateColor__item">
				<span className="StateColor__item__color StateColor__item__color--comparing"></span>
				<span className="StateColor__item__name">Comparing</span>
			</div>
			<div className="StateColor__item">
				<span className="StateColor__item__color StateColor__item__color--swapping"></span>
				<span className="StateColor__item__name">Swapping</span>
			</div>

			<div className="StateColor__item">
				<span className="StateColor__item__color StateColor__item__color--sorted"></span>
				<span className="StateColor__item__name">Sorted</span>
			</div>

			{algoStateColorConfig[algorithm] && algoStateColorConfig[algorithm].map((stateColor, idx) => (
				<div key={idx} className="StateColor__item ">
					<span className={`StateColor__item__color ${stateColor.colorClass}`}></span>
					<span className="StateColor__item__name">{stateColor.name}</span>
				</div>
			))}

		</div>
	);
}

export default React.memo(StateColor);
