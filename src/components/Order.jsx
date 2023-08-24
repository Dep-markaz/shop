import React from 'react'

const Order = ({ item }) => {
	return (
		<div className="order">
			<img src={'../img/' + item.img} alt="" />
			<h2>{item.title}</h2>
			<p>$ {item.price}</p>
		</div>
	)
}

export default Order
