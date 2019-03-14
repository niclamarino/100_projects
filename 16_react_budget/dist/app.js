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
		_this.handleUpdateBudget = _this.handleUpdateBudget.bind(_this);
		_this.state = {
			monthlyBudget: 0,
			incomesSum: 0,
			expensesSum: 0,
			incomes: [{ amount: 0, description: 'some description' }, { amount: 1, description: 'second description' }],
			expenses: [0]
		};
		return _this;
	}

	_createClass(BudgetApp, [{
		key: 'handleAddValue',
		value: function handleAddValue(e) {
			var task = parseInt(e.target.elements.inputValue.value);
			var description = e.target.elements.description.value;
			var newIncome = void 0;
			var newExpense = void 0;

			var updateIncomesSum = 0;
			var updateExpensesSum = 0;

			if (e.target.elements.inputType.value === 'plus') {

				newIncome = this.state.incomes.concat({ amount: 'mamt', description: 'culo' });

				for (var i = 0; i < newIncome.length; i++) {
					updateIncomesSum += newIncome[i];
				}

				updateExpensesSum = +this.state.expensesSum;
			} else {
				newExpense = this.state.expenses.concat(task);

				for (var _i = 0; _i < newExpense.length; _i++) {
					updateExpensesSum += newExpense[_i];
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
		key: 'handleUpdateBudget',
		value: function handleUpdateBudget(e) {
			e.preventDefault();
			var task = parseInt(e.target.elements.inputValue.value);
			var inputType = e.target.elements.inputType.value;

			if (inputType === 'plus') {
				this.setState(function (prevState) {
					return {
						incomes: prevState.incomes.concat(task)
					};
				});
			} else {
				this.setState(function (prevState) {
					return {
						expenses: prevState.expenses.concat(task)
					};
				});
			}
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
					React.createElement(UpdateBudget, { handleUpdateBudget: this.handleUpdateBudget, handleAddValue: this.handleAddValue }),
					React.createElement(Incomes, { incomes: this.state.incomes }),
					React.createElement(Expenses, { expenses: this.state.expenses })
				)
			);
		}
	}]);

	return BudgetApp;
}(React.Component);

var Header = function (_React$Component2) {
	_inherits(Header, _React$Component2);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'h1',
				null,
				this.props.title
			);
		}
	}]);

	return Header;
}(React.Component);

var Budget = function (_React$Component3) {
	_inherits(Budget, _React$Component3);

	function Budget() {
		_classCallCheck(this, Budget);

		return _possibleConstructorReturn(this, (Budget.__proto__ || Object.getPrototypeOf(Budget)).apply(this, arguments));
	}

	_createClass(Budget, [{
		key: 'render',
		value: function render() {
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
					this.props.monthlyBudget
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
					this.props.incomesSum
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
					this.props.expensesSum
				)
			);
		}
	}]);

	return Budget;
}(React.Component);

var UpdateBudget = function (_React$Component4) {
	_inherits(UpdateBudget, _React$Component4);

	function UpdateBudget() {
		_classCallCheck(this, UpdateBudget);

		return _possibleConstructorReturn(this, (UpdateBudget.__proto__ || Object.getPrototypeOf(UpdateBudget)).apply(this, arguments));
	}

	_createClass(UpdateBudget, [{
		key: 'render',
		value: function render() {
			var _this5 = this;

			return React.createElement(
				'div',
				null,
				React.createElement(
					'form',
					{ onSubmit: function onSubmit(e) {
							_this5.props.handleUpdateBudget(e), _this5.props.handleAddValue(e);
						} },
					React.createElement(
						'select',
						{ name: 'inputType' },
						React.createElement(
							'option',
							{ value: 'plus' },
							'+'
						),
						React.createElement(
							'option',
							{ value: 'minus' },
							'-'
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
		}
	}]);

	return UpdateBudget;
}(React.Component);

var Incomes = function (_React$Component5) {
	_inherits(Incomes, _React$Component5);

	function Incomes() {
		_classCallCheck(this, Incomes);

		return _possibleConstructorReturn(this, (Incomes.__proto__ || Object.getPrototypeOf(Incomes)).apply(this, arguments));
	}

	_createClass(Incomes, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'ul',
					{ className: 'incomes' },
					this.props.incomes.map(function (income, i) {
						return React.createElement(Income, {
							description: income.description,
							key: i,
							income: income.amount
						});
					})
				)
			);
		}
	}]);

	return Incomes;
}(React.Component);

var Income = function (_React$Component6) {
	_inherits(Income, _React$Component6);

	function Income() {
		_classCallCheck(this, Income);

		return _possibleConstructorReturn(this, (Income.__proto__ || Object.getPrototypeOf(Income)).apply(this, arguments));
	}

	_createClass(Income, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
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
	}

	_createClass(Expenses, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'ul',
					{ className: 'expenses' },
					this.props.expenses.map(function (expense) {
						return React.createElement(Expense, { key: expense, expense: expense });
					})
				)
			);
		}
	}]);

	return Expenses;
}(React.Component);

var Expense = function (_React$Component8) {
	_inherits(Expense, _React$Component8);

	function Expense() {
		_classCallCheck(this, Expense);

		return _possibleConstructorReturn(this, (Expense.__proto__ || Object.getPrototypeOf(Expense)).apply(this, arguments));
	}

	_createClass(Expense, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'li',
					null,
					this.props.expense
				)
			);
		}
	}]);

	return Expense;
}(React.Component);

ReactDOM.render(React.createElement(BudgetApp, null), root);
