import React from 'react'
import './index.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [
				{
					id: 1,
					title: 'Stul',
					img: '1.jpg',
					desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
					category: 'chairs',
					price: '12',
				},
				{
					id: 2,
					title: 'Stul taxta',
					img: '2.jpg',
					desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
					category: 'chairs',
					price: '32',
				},
				{
					id: 3,
					title: 'Kreslo',
					img: '3.jpg',
					desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
					category: 'chairs',
					price: '55',
				},
				{
					id: 4,
					title: 'Shkaf',
					img: '4.jpg',
					desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
					category: 'chairs',
					price: '65',
				},
				{
					id: 5,
					title: 'STol',
					img: '5.jpg',
					desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
					category: 'chairs',
					price: '24',
				},
				{
					id: 6,
					title: 'Javon',
					img: '6.jpeg',
					desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
					category: 'chairs',
					price: '77',
				},
			],
		}
	}

	render() {
		return (
			<div>
				<div className="wrapper">
					<Header />
					<Items items={this.state.items} />
					<Footer />
				</div>
			</div>
		)
	}
}

export default App
