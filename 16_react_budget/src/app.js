const root = document.getElementById('root');

class BudgetApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddValue = this.handleAddValue.bind(this);
		this.handleUpdateBudget = this.handleUpdateBudget.bind(this)
		this.state = {
			monthlyBudget: 0,
			incomesSum: 0,
			expensesSum: 0,
			incomes: [0],
			expenses: [0]
		}
	}
	handleAddValue(e) {
		let task = parseInt(e.target.elements.inputValue.value);
		let newIncome;
		let newExpense;

		let updateIncomesSum = 0;
		let updateExpensesSum = 0;

		if(e.target.elements.inputType.value === 'plus') {

			newIncome = this.state.incomes.concat(task);

			for (let i = 0; i < newIncome.length; i++) {
        		updateIncomesSum += newIncome[i];
    		}

    		updateExpensesSum =+ this.state.expensesSum;

		} else {
			newExpense = this.state.expenses.concat(task);

			for (let i = 0; i < newExpense.length; i++) {
        		updateExpensesSum += newExpense[i];
    		}

    		updateIncomesSum =+ this.state.incomesSum;
		}

		this.setState(()=> {
			return {
				monthlyBudget: updateIncomesSum - updateExpensesSum,
				incomesSum: updateIncomesSum,
				expensesSum: -Math.abs(updateExpensesSum),
			};
		})
	}
	handleUpdateBudget(e) {
		e.preventDefault();
		let task = parseInt(e.target.elements.inputValue.value);
		let inputType = e.target.elements.inputType.value;

		if (inputType === 'plus') {
			this.setState((prevState) => {
      			return {
        			incomes: prevState.incomes.concat(task),
      			};
    		});
		} else {
			this.setState((prevState) => {
      			return {
        			expenses: prevState.expenses.concat(task)
      			};
    		});
		}
	}
	render() {
		const title = "Available budget in "
		const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
		];
		const d = new Date();
		const year = d.getFullYear();

		return (
			<div className="container">
				<div className="details">
					<Header title={title + monthNames[d.getMonth()] + ' ' + year}/>
					<Budget
						monthlyBudget={this.state.monthlyBudget}
						incomesSum={this.state.incomesSum}
						expensesSum={this.state.expensesSum}
					/>
				</div>
				<div className="inputsContainer">
					<UpdateBudget handleUpdateBudget={this.handleUpdateBudget} handleAddValue={this.handleAddValue}/>
					<Incomes incomes={this.state.incomes} />
					<Expenses expenses={this.state.expenses} />
				</div>
			</div>
			)
	}
}

class Header extends React.Component {
	render() {
		return (
			<h1>{this.props.title}</h1>
			)
	}
}

class Budget extends React.Component {
	render() {
		return (
			<div>
				<p><b>Monthly Budget:</b> {this.props.monthlyBudget}</p>
				<p><b>Monthly Income:</b> {this.props.incomesSum}</p>
				<p><b>Monthly Expense:</b> {this.props.expensesSum}</p>
			</div>
		)
	}
}

class UpdateBudget extends React.Component {
	render() {
		return (
			<div>
			<form onSubmit={e => {this.props.handleUpdateBudget(e), this.props.handleAddValue(e)}}>
				<select name="inputType">
  					<option value="plus">+</option>
  					<option value="minus">-</option>
  				</select>
  				<input type="text" name="description" />
  				<input type="number" name="inputValue" />
  				<button name="add">Add</button>		
  			</form>	
			</div>
		)
	}
}

class Incomes extends React.Component {
	render() {
		return (
			<div>
				<ul className="incomes">
					{this.props.incomes.map((income, i) => <Income key={i} income={income} />)}
				</ul>
			</div>
		)
	}
}

class Income extends React.Component {
	render() {
		return (
			<div>
				<li>{this.props.income}</li>
			</div>
		)
	}
}

class Expenses extends React.Component {
	render() {
		return (
			<div>
				<ul className="expenses">
					{this.props.expenses.map(expense => <Expense key={expense} expense={expense} />)}
				</ul>
			</div>
		)
	}
}

class Expense extends React.Component {
	render() {
		return (
			<div>
				<li>{this.props.expense}</li>
			</div>
		)
	}
}

ReactDOM.render(<BudgetApp />, root)