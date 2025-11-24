import React, { useState } from 'react'

/**
 * BottomNav Component - Bottom Navigation Bar
 *
 * 4 Navigation tabs: Home, Library, Create (+), Explore
 */

const BottomNav = () => {
	const [activeTab, setActiveTab] = useState('home')

	// Container - Fixed at bottom
	const navStyles = {
		position: 'fixed',
		bottom: 0,
		left: 0,
		right: 0,
		height: '64px',
		backgroundColor: '#FFFFFF',
		boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.08)',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		padding: '0 20px',
		zIndex: 1000,
	}

	// Individual nav item
	const navItemStyles = (isActive) => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '4px',
		padding: '8px 20px',
		cursor: 'pointer',
		transition: 'all 0.2s ease',
		border: 'none',
		backgroundColor: 'transparent',
		color: isActive ? '#0567F3' : '#9E9E9E',
		flex: 1,
	})

	// Icon size
	const iconStyles = {
		width: '24px',
		height: '24px',
	}

	// Label text
	const labelStyles = (isActive) => ({
		fontSize: '11px',
		fontWeight: isActive ? '600' : '400',
		marginTop: '2px',
	})

	return (
		<nav style={navStyles}>
			{/* Home */}
			<button
				style={navItemStyles(activeTab === 'home')}
				onClick={() => setActiveTab('home')}
			>
				<svg
					style={iconStyles}
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
					<polyline points='9 22 9 12 15 12 15 22' />
				</svg>
				<span style={labelStyles(activeTab === 'home')}>Home</span>
			</button>

			{/* Library */}
			<button
				style={navItemStyles(activeTab === 'library')}
				onClick={() => setActiveTab('library')}
			>
				<svg
					style={iconStyles}
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
					<line x1='9' y1='3' x2='9' y2='21' />
				</svg>
				<span style={labelStyles(activeTab === 'library')}>Library</span>
			</button>

			{/* Create */}
			<button
				style={navItemStyles(activeTab === 'create')}
				onClick={() => setActiveTab('create')}
			>
				<svg
					style={iconStyles}
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<circle cx='12' cy='12' r='10' />
					<line x1='12' y1='8' x2='12' y2='16' />
					<line x1='8' y1='12' x2='16' y2='12' />
				</svg>
				<span style={labelStyles(activeTab === 'create')}>Create</span>
			</button>

			{/* Explore */}
			<button
				style={navItemStyles(activeTab === 'explore')}
				onClick={() => setActiveTab('explore')}
			>
				<svg
					style={iconStyles}
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<circle cx='11' cy='11' r='8' />
					<path d='m21 21-4.35-4.35' />
				</svg>
				<span style={labelStyles(activeTab === 'explore')}>Explore</span>
			</button>
		</nav>
	)
}

export default BottomNav

// ============================================
// USAGE
// ============================================

/*

import BottomNav from './components/layout/BottomNav';

function App() {
  return (
    <div>
      <Header />
      <main style={{ paddingBottom: '80px' }}>
        <HeroBanner />
        <ActionButtons />
        <RecentBlocks />
      </main>
      <BottomNav />
    </div>
  );
}

*/
