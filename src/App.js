import React from 'react'
import Header from './components/layout/Header'
import HeroBanner from './components/sections/HeroBanner'
import ProgressBar from './components/common/ProgressBar'
import Card from './components/common/Card'
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
			<div
				style={{
					padding: '20px',
					display: 'flex',
					flexDirection: 'column',
					gap: '16px',
				}}
			>
				<h2 style={{ margin: '0 0 16px 0' }}>Recent Blocks</h2>

				<Card
					title='Chemical Compounds'
					subtitle='Grade 9, Term One, 2024'
					progress={60}
					totalCards={120}
					masteredCards={50}
					teacherName='Maggie Norris'
					teacherAvatar='👩‍🏫'
					onClick={() => alert('Card clicked!')}
				/>

				<Card
					title='Chemical Compounds'
					subtitle='Grade 9, Term One, 2024'
					progress={60}
					totalCards={120}
					masteredCards={50}
					teacherName='Maggie Norris'
					teacherAvatar='👩‍🏫'
					onClick={() => alert('Card clicked!')}
				/>
			</div>
		</div>
	)
}

export default App
