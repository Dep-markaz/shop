import React, { Component } from 'react'

const Item = ({ item, onAdd }) => {
	return (
		<div className="item">
			<img src={'../img/' + item.img} alt="" />
			<h2>{item.title}</h2>
			<p>{item.desc}</p>
			<b>$ {item.price}</b>
			<div onClick={() => onAdd(item)} className="add-to-cart">
				+
			</div>
		</div>
	)
}

export default Item

// export class Item extends Component {
// 	render() {
// 		return (
// 			<div className="item">
// 				<img src={'./img/' + `${this.props.item.img}`} alt="" />
// 				<h2>{this.props.item.title}</h2>
// 				<p>{this.props.item.desc}</p>
// 				<b>{this.props.item.price}</b>
// 				<div className="add-to-cart">+</div>
// 			</div>
// 		)
// 	}
// }
// export default Item
