import React from 'react';

const Item = (props) => {
	return <li onClick={props.suggestionSelected}>{props.item}</li>
};

export default Item;