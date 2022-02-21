import React from 'react';

const Scroll = (props) =>
{
	return(
		// Here we using double destructor, 1 for js and 1 for css.
		<div style={{ overflow: 'scroll', border: '1px solid black', height: '550px', }}>
			{props.children}
		</div>
		// This the way to give some effect to children component
	);
}

export default Scroll;