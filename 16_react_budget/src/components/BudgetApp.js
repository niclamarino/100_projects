import Header from './Header';
import Budget from './Budget';
import UpdateBudget from './UpdateBudget';
import Incomes from './Incomes';
import Expenses from './Expenses';

class BudgetApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddValue = this.handleAddValue.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.state = {
			monthlyBudget: 0,
			incomesSum: 0,
			expensesSum: 0,
			incomes: [
    			{ amount: 0, description: '' }
    		],
			expenses: [
    			{ amount: 0, description: '' },
    		],
		}
	}
	componentDidMount() {
		const monthlyBudget = localStorage.getItem('monthlyBudget');
		const incomesSum = localStorage.getItem('incomesSum');

		this.setState(() => ({
			monthlyBudget,
			incomesSum
		}))
	}
	componentDidUpdate(prevProps, prevState) {
		if(prevState.monthlyBudget !== this.state.monthlyBudget) {

			localStorage.setItem('monthlyBudget', this.state.monthlyBudget);
			localStorage.setItem('incomesSum', this.state.incomesSum);

		}
	}
	handleAddValue(e) {
		e.preventDefault();
		let task = parseInt(e.target.elements.inputValue.value);
		let description = e.target.elements.description.value;
		let newIncome;
		let newExpense;

		let updateIncomesSum = 0;
		let updateExpensesSum = 0;

		if(e.target.elements.inputType.value === 'plus') {
			newIncome = this.state.incomes.push({amount: task, description: description});

			for (let i = 0; i < this.state.incomes.length; i++) {
        		updateIncomesSum += this.state.incomes[i].amount;
    		}

    		updateExpensesSum =+ this.state.expensesSum;
		} else {
			newExpense = this.state.expenses.push({amount: task, description: description});

			for (let i = 0; i < this.state.expenses.length; i++) {
        		updateExpensesSum += this.state.expenses[i].amount;
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
	handleDelete(e) {
		const type = e.target.parentNode.parentNode.className;
		e.target.parentNode.remove();
		const valueToRemove = parseInt(e.target.parentNode.getElementsByClassName('budget-value')[0].innerHTML)

		if(type == 'incomes') {
			this.setState(prevState => {
				return {
					incomesSum: prevState.incomesSum - valueToRemove,
				};
			})			
		} else {
			this.setState(prevState => {
				return {
					expensesSum: prevState.expensesSum - valueToRemove,
				};
			})				
		}

		this.setState(prevState => {
			return {
				monthlyBudget: prevState.monthlyBudget - valueToRemove,
			};
		})
	}
	render() {
		const title = "Available Budget in "
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
					<UpdateBudget handleAddValue={this.handleAddValue}/>
					<Incomes incomes={this.state.incomes} handleDelete={this.handleDelete}/>
					<Expenses expenses={this.state.expenses} handleDelete={this.handleDelete} />
				</div>
			</div>
			)
	}
};

export default BudgetApp;