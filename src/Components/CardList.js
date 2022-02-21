import React from 'react';
import Card from './Card';


const CardList = ({ robots }) =>
{
	// if (true) {
	// 	throw new Error('Nooo'); To throw an error
	// }
	return(
		<div>
		{
			robots.map((user,i) =>{
			return (<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />);
			// Key is used to specify the unique value for the for the cards
			})
		}
		</div>
	);
}

export default CardList;