'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('App.js is running');
var app = document.getElementById('app');

var ToDoList = function (_React$Component) {
	_inherits(ToDoList, _React$Component);

	function ToDoList(props) {
		_classCallCheck(this, ToDoList);

		var _this = _possibleConstructorReturn(this, (ToDoList.__proto__ || Object.getPrototypeOf(ToDoList)).call(this, props));

		_this.handleAddTask = _this.handleAddTask.bind(_this);
		_this.state = {
			tasks: []
		};
		return _this;
	}

	_createClass(ToDoList, [{
		key: 'handleAddTask',
		value: function handleAddTask(task) {

			if (this.state.tasks.indexOf(task) > -1) {
				return;
			}

			this.setState(function (prevState) {
				return {
					tasks: prevState.tasks.concat(task)
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var title = 'To Do List';
			return React.createElement(
				'div',
				{ className: 'container' },
				React.createElement(Header, { title: title }),
				React.createElement(AddTask, { handleAddTask: this.handleAddTask }),
				React.createElement(Tasks, { tasks: this.state.tasks })
			);
		}
	}]);

	return ToDoList;
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

var AddTask = function (_React$Component3) {
	_inherits(AddTask, _React$Component3);

	function AddTask(props) {
		_classCallCheck(this, AddTask);

		var _this3 = _possibleConstructorReturn(this, (AddTask.__proto__ || Object.getPrototypeOf(AddTask)).call(this, props));

		_this3.handleAddTask = _this3.handleAddTask.bind(_this3);
		return _this3;
	}

	_createClass(AddTask, [{
		key: 'handleAddTask',
		value: function handleAddTask(e) {
			e.preventDefault();
			var task = e.target.elements.task.value;

			if (task) {
				this.props.handleAddTask(task);
			}
			console.log(task);
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'form',
					{ onSubmit: this.handleAddTask },
					React.createElement('input', { type: 'text', name: 'task' }),
					React.createElement(
						'button',
						null,
						'Add Task'
					)
				)
			);
		}
	}]);

	return AddTask;
}(React.Component);

var Tasks = function (_React$Component4) {
	_inherits(Tasks, _React$Component4);

	function Tasks() {
		_classCallCheck(this, Tasks);

		return _possibleConstructorReturn(this, (Tasks.__proto__ || Object.getPrototypeOf(Tasks)).apply(this, arguments));
	}

	_createClass(Tasks, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'ul',
					null,
					this.props.tasks.map(function (task) {
						return React.createElement(Task, { key: task, taskText: task });
					})
				)
			);
		}
	}]);

	return Tasks;
}(React.Component);

var Task = function (_React$Component5) {
	_inherits(Task, _React$Component5);

	function Task(task) {
		_classCallCheck(this, Task);

		var _this5 = _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).call(this, task));

		_this5.handleRemoveOption = _this5.handleRemoveOption.bind(_this5);
		return _this5;
	}

	_createClass(Task, [{
		key: 'handleRemoveOption',
		value: function handleRemoveOption() {
			console.log('removeOption');
			console.log(this);
			console.log(this.props.taskText);
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'li',
				null,
				React.createElement('input', { type: 'checkbox', name: this.task, onChange: this.handleRemoveOption }),
				React.createElement(
					'label',
					null,
					this.props.taskText
				)
			);
		}
	}]);

	return Task;
}(React.Component);

ReactDOM.render(React.createElement(ToDoList, null), app);

// constructor(props) {
// 	super(props);
// 	this.handleAddTask = this.handleAddTask.bind(this)
// }
// handleAddTask(e) {
// 	e.preventDefault();
// 	const task = e.target.elements.task.value;

// 	if(task) {
// 		this.setState(prevState => {
// 			return (
// 				console.log('sf')
// 				// prevState.tasks.concat(task)
// 			)
// 		})
// 		console.log(task.trim());
// 	}

// }

// ['Buy milk', 'Do this', 'Do that']

// {
// 				this.props.tasks.map(task => 
// 					<li key={task}>
// 					<input type="checkbox" name={task} onChange={this.handleRemoveOption}></input>
// 					<label>{task}</label>
// 					</li>
// 				)
// 			}

// console.log('App.js is running');
// const app = document.getElementById('app');
// const tasks = ['Buy milk', 'Do this', 'Do that'];

// class ToDoList extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		// this.handleAddTask = this.handleAddTask.bind(this);
// 	}
// 	render() {
// 		return (
// 			<div>
// 			<Header />
// 			</div>
// 			)
// 	}
// }

// class Header extends React.Component {
// 	render() {
// 		return <h1>To Do list</h1>
// 	}
// }

// const handleAddTask = e => {
// 	e.preventDefault();
// 	const newTask = e.target.elements.task.value;

// 	if(tasks.indexOf(newTask) > -1) {
// 		return 'This option already exists';
// 	} else {
// 		tasks.push(newTask);
// 	}
// 	render();
// }

// const removeOption = e => {
// 	console.log('sdf');
// 	const checkedInput = e.target.parentNode;
// 	// checkedInput.style.background ="red"
// 	checkedInput.remove();
// 	console.log(checkedInput);
// }

// const render = () => {
// 	const template = (
// 		<div className="container">
// 			<Header />

// 			<form onSubmit={handleAddTask}>
// 				<input type="text" name="task" />
// 				<button>Add Task</button>
// 			</form>
// 			<ul>{
// 				tasks.map(task => 
// 					<li key={task}>
// 					<input type="checkbox" name={task} onChange={removeOption}></input>
// 					<label>{task}</label>
// 					</li>
// 				)
// 			}
// 			</ul>
// 		</div>
// 		)
// 	ReactDOM.render(template, app)
// }

// render()
