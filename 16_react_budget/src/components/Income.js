import React from 'react';

const Income = props => {
		if(props.description) {
			return (
				<li>
					<button className="delete-btn" onClick={props.handleDelete}>Delete</button>
					<b>{props.description}</b>
					<span className="budget-value">{props.income}</span>
				</li>
			)
		} else {
			return ''
		}
}

export default Income;