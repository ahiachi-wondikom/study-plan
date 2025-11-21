import React from 'react'
import Header from './components/layout/Header'
import HeroBanner from './components/sections/HeroBanner'
// import './App.css'

function App() {
	return (
		<div
			style={{
				backgroundColor: '#F5F5F5',
				minHeight: '100vh',
			}}
		>
			<Header />
			<HeroBanner />
		</div>
	)
}

export default App
