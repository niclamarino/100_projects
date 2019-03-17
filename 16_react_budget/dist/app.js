'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var root = document.getElementById('root');

var BudgetApp = function (_React$Component) {
	_inherits(BudgetApp, _React$Component);

	function BudgetApp(props) {
		_classCallCheck(this, BudgetApp);

		var _this = _possibleConstructorReturn(this, (BudgetApp.__proto__ || Object.getPrototypeOf(BudgetApp)).call(this, props));

		_this.handleAddValue = _this.handleAddValue.bind(_this);
		_this.handleDelete = _this.handleDelete.bind(_this);
		_this.state = {
			monthlyBudget: 0,
			incomesSum: 0,
			expensesSum: 0,
<<<<<<< HEAD
			incomes: [{ amount: 0, description: '' }],
			expenses: [{ amount: 0, description: '' }]
=======
			incomes: [{ amount: 0, description: 'some description' }, { amount: 1, description: 'second description' }],
			expenses: [0]
>>>>>>> f3e3f53aa2e2a42b1bb5697841d18aac160630e4
		};
		return _this;
	}

	_createClass(BudgetApp, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var monthlyBudget = localStorage.getItem('monthlyBudget');
			var incomesSum = localStorage.getItem('incomesSum');

			this.setState(function () {
				return {
					monthlyBudget: monthlyBudget,
					incomesSum: incomesSum
				};
			});
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.monthlyBudget !== this.state.monthlyBudget) {

				localStorage.setItem('monthlyBudget', this.state.monthlyBudget);
				localStorage.setItem('incomesSum', this.state.incomesSum);
			}
		}
	}, {
		key: 'handleAddValue',
		value: function handleAddValue(e) {
			e.preventDefault();
			var task = parseInt(e.target.elements.inputValue.value);
			var description = e.target.elements.description.value;
			var newIncome = void 0;
			var newExpense = void 0;

			var updateIncomesSum = 0;
			var updateExpensesSum = 0;

			if (e.target.elements.inputType.value === 'plus') {
				newIncome = this.state.incomes.push({ amount: task, description: description });

<<<<<<< HEAD
				for (var i = 0; i < this.state.incomes.length; i++) {
					updateIncomesSum += this.state.incomes[i].amount;
=======
				newIncome = this.state.incomes.concat({ amount: 'mamt', description: 'culo' });

				for (var i = 0; i < newIncome.length; i++) {
					updateIncomesSum += newIncome[i];
>>>>>>> f3e3f53aa2e2a42b1bb5697841d18aac160630e4
				}

				updateExpensesSum = +this.state.expensesSum;
			} else {
				newExpense = this.state.expenses.push({ amount: task, description: description });

				for (var _i = 0; _i < this.state.expenses.length; _i++) {
					updateExpensesSum += this.state.expenses[_i].amount;
				}
				updateIncomesSum = +this.state.incomesSum;
			}

			this.setState(function () {
				return {
					monthlyBudget: updateIncomesSum - updateExpensesSum,
					incomesSum: updateIncomesSum,
					expensesSum: -Math.abs(updateExpensesSum)
				};
			});
		}
	}, {
		key: 'handleDelete',
		value: function handleDelete(e) {
			var type = e.target.parentNode.parentNode.className;
			e.target.parentNode.remove();
			var valueToRemove = parseInt(e.target.parentNode.getElementsByClassName('budget-value')[0].innerHTML);

			if (type == 'incomes') {
				this.setState(function (prevState) {
					return {
						incomesSum: prevState.incomesSum - valueToRemove
					};
				});
			} else {
				this.setState(function (prevState) {
					return {
						expensesSum: prevState.expensesSum - valueToRemove
					};
				});
			}

			this.setState(function (prevState) {
				return {
					monthlyBudget: prevState.monthlyBudget - valueToRemove
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var title = "Available Budget in ";
			var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			var d = new Date();
			var year = d.getFullYear();

			return React.createElement(
				'div',
				{ className: 'container' },
				React.createElement(
					'div',
					{ className: 'details' },
					React.createElement(Header, { title: title + monthNames[d.getMonth()] + ' ' + year }),
					React.createElement(Budget, {
						monthlyBudget: this.state.monthlyBudget,
						incomesSum: this.state.incomesSum,
						expensesSum: this.state.expensesSum
					})
				),
				React.createElement(
					'div',
					{ className: 'inputsContainer' },
					React.createElement(UpdateBudget, { handleAddValue: this.handleAddValue }),
					React.createElement(Incomes, { incomes: this.state.incomes, handleDelete: this.handleDelete }),
					React.createElement(Expenses, { expenses: this.state.expenses, handleDelete: this.handleDelete })
				)
			);
		}
	}]);

	return BudgetApp;
}(React.Component);

;

var Header = function Header(props) {
	return React.createElement(
		'h1',
		null,
		props.title
	);
};

var Budget = function Budget(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'p',
			null,
			React.createElement(
				'b',
				null,
				'Monthly Budget:'
			),
			' ',
			props.monthlyBudget
		),
		React.createElement(
			'p',
			null,
			React.createElement(
				'b',
				null,
				'Monthly Income:'
			),
			' ',
			props.incomesSum
		),
		React.createElement(
			'p',
			null,
			React.createElement(
				'b',
				null,
				'Monthly Expense:'
			),
			' ',
			props.expensesSum
		)
	);
};

var UpdateBudget = function UpdateBudget(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'form',
			{ onSubmit: props.handleAddValue },
			React.createElement(
				'select',
				{ name: 'inputType' },
				React.createElement(
					'option',
					{ value: 'plus' },
					'+'
				),
				React.createElement(
<<<<<<< HEAD
					'option',
					{ value: 'minus' },
					'-'
=======
					'ul',
					{ className: 'incomes' },
					this.props.incomes.map(function (income, i) {
						return React.createElement(Income, {
							description: income.description,
							key: i,
							income: income.amount
						});
					})
>>>>>>> f3e3f53aa2e2a42b1bb5697841d18aac160630e4
				)
			),
			React.createElement('input', { type: 'text', name: 'description' }),
			React.createElement('input', { type: 'number', name: 'inputValue' }),
			React.createElement(
				'button',
				{ name: 'add' },
				'Add'
			)
		)
	);
};

var Incomes = function Incomes(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'ul',
			{ className: 'incomes' },
			props.incomes.map(function (income, i) {
				return React.createElement(Income, {
					description: income.description,
					key: i,
					income: income.amount,
					handleDelete: props.handleDelete
				});
			})
		)
	);
};

var Income = function Income(props) {
	if (props.description) {
		return React.createElement(
			'li',
			null,
			React.createElement(
				'button',
				{ className: 'delete-btn', onClick: props.handleDelete },
				'Delete'
			),
			React.createElement(
				'b',
				null,
<<<<<<< HEAD
				props.description
			),
			React.createElement(
				'span',
				{ className: 'budget-value' },
				props.income
			)
		);
	} else {
		return '';
=======
				React.createElement(
					'li',
					null,
					this.props.description,
					' ',
					this.props.income
				)
			);
		}
	}]);

	return Income;
}(React.Component);

var Expenses = function (_React$Component7) {
	_inherits(Expenses, _React$Component7);

	function Expenses() {
		_classCallCheck(this, Expenses);

		return _possibleConstructorReturn(this, (Expenses.__proto__ || Object.getPrototypeOf(Expenses)).apply(this, arguments));
>>>>>>> f3e3f53aa2e2a42b1bb5697841d18aac160630e4
	}
};

var Expenses = function Expenses(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'ul',
			{ className: 'expenses' },
			props.expenses.map(function (expense, i) {
				return React.createElement(Expense, {
					description: expense.description,
					key: i,
					expense: expense.amount,
					handleDelete: props.handleDelete
				});
			})
		)
	);
};

var Expense = function Expense(props) {
	if (props.description) {
		return React.createElement(
			'li',
			null,
			React.createElement(
				'button',
				{ className: 'delete-btn', onClick: props.handleDelete },
				'Delete'
			),
			React.createElement(
				'b',
				null,
				props.description
			),
			React.createElement(
				'span',
				{ className: 'budget-value' },
				props.expense
			)
		);
	} else {
		return '';
	}
};

ReactDOM.render(React.createElement(BudgetApp, null), root);
