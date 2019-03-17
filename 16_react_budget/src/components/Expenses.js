import React from 'react';
import Expense from './Expense';

const Expenses = props => {
		return (
			<div>
				<ul className="expenses">
					{props.expenses.map((expense, i) =>
						<Expense
							description={expense.description}
							key={i}
							expense={expense.amount}
							handleDelete={props.handleDelete}
						/>
					)}
				</ul>
			</div>
		)
}

export default Expenses;