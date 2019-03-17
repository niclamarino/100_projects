import React from 'react';
import Income from './Income';

const Incomes = props => {
		return (
			<div>
				<ul className="incomes">
					{props.incomes.map((income, i) =>
						<Income
							description={income.description}
							key={i}
							income={income.amount}
							handleDelete={props.handleDelete}
						/>
					)}
				</ul>
			</div>
		)
}

export default Incomes;