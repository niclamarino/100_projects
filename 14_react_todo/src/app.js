console.log('App.js is running');
const app = document.getElementById('app');

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddTask = this.handleAddTask.bind(this);
		this.state = {
			tasks: []
		}
	}
  handleAddTask(task) {

 	if (this.state.tasks.indexOf(task) > -1) {
      return
    }

    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(task)
      };
    });
  }
	render() {
	const title = 'To Do List'
	return (
		<div className="container">
			<Header title={title}/>
			<AddTask handleAddTask={this.handleAddTask} />
			<Tasks tasks={this.state.tasks}/>
		</div>
		)
	}
}

class Header extends React.Component {
	render() {
		return <h1>{this.props.title}</h1>
	}
}

class AddTask extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddTask = this.handleAddTask.bind(this)
	}
	handleAddTask(e) {
		e.preventDefault();
		const task = e.target.elements.task.value;
		
		if(task) {
			this.props.handleAddTask(task);
		}
		console.log(task);
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleAddTask}>
					<input type="text" name="task" />
					<button>Add Task</button>
				</form>
			</div>
		)
	}
}

class Tasks extends React.Component {
	render() {
		return (
			<div>
				<ul>
					{this.props.tasks.map(task => <Task key={task} taskText={task} />)}
				</ul>
			</div>
		)		
	}
}

class Task extends React.Component {
	constructor(task) {
		super(task);
		this.handleRemoveOption = this.handleRemoveOption.bind(this)
	}
	handleRemoveOption() {
		console.log('removeOption');
		console.log(this)
		console.log(this.props.taskText)
	}
	render() {
		return (
			<li>
				<input type="checkbox" name={this.task} onChange={this.handleRemoveOption}></input>
				<label>{this.props.taskText}</label>
			</li>
		)
	}
}

ReactDOM.render(<ToDoList />, app)

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