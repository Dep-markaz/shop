import React from 'react'
import './index.scss'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
	return (
		<div>
			<div className="wrapper">
				<Header />
				<Footer />
			</div>
		</div>
	)
}
