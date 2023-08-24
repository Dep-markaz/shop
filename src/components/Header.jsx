import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order'

const showOrders = (order) => {
	return (
		<div>
			{order.map((elem) => (
				<Order key={elem.id} item={elem} />
			))}
		</div>
	)
}

const showNothing = () => {
	return <div className="empty">Cart is Empty</div>
}
const Header = ({ orders }) => {
	let [cartOpen, setCartOpen] = useState(false)

	return (
		<header>
			<div className="">
				<span className="logo">House Staff</span>
				<ul className="nav">
					<li>About</li>
					<li>Contacts</li>
					<li>Cabinet</li>
				</ul>
				<FaShoppingCart
					onClick={() => setCartOpen((cartOpen = !cartOpen))}
					className={`shop-cart-btn ${cartOpen && 'active'}`}
				/>
				{cartOpen && (
					<div className="shop-cart">
						{orders.length > 0 ? showOrders(orders) : showNothing()}
					</div>
				)}
			</div>
			<div className="presentation"></div>
		</header>
	)
}

export default Header
