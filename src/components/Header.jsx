import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
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
				{cartOpen && <div className="shop-cart">adsf</div>}
			</div>
			<div className="presentation"></div>
		</header>
	)
}

export default Header
