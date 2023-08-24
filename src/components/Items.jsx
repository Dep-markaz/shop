import React, { Component } from 'react'
import Item from './Item'

const Items = ({ items, onAdd }) => {
	return (
		<main>
			{items.map((el) => {
				return <Item key={el.id} item={el} onAdd={onAdd} />
			})}
		</main>
	)
}

export default Items

// export class Items extends Component {
// 	render() {
// 		return (
// 			<main>
// 				{this.props.items.map((el) => {
// 					return <h1>{el.title}</h1>
// 				})}
// 			</main>
// 		)
// 	}
// }
// export default Items
