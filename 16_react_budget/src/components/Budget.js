import React from 'react';

const Budget = props => {
	return (
		<div>
			<p><b>Monthly Budget:</b> {props.monthlyBudget}</p>
			<p><b>Monthly Income:</b> {props.incomesSum}</p>
			<p><b>Monthly Expense:</b> {props.expensesSum}</p>
		</div>
	)	
}

export default Budget;