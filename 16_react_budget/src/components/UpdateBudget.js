import React from 'react';

const UpdateBudget = props => {
	return (
		<div>
			<form onSubmit={props.handleAddValue}>
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

export default UpdateBudget;