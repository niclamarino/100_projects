import React from 'react';

const City = (props) => {
	return <li onClick={props.suggestionSelected}>{props.city}</li>
};

export default City;