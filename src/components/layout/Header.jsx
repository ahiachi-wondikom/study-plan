import React from 'react'
import Avatar from '../common/Avatar'
import { theme } from '../../styles/theme'
import profilePhoto from '../../assets/Salesh.jpg'

const Header = () => {
	const styles = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '16px 20px',
		backgroundColor: theme.colors.background.default,
	}

	const leftSideStyles = {
		display: 'flex',
		alignItems: 'center',
		gap: '12px',
	}

	const greetingStyles = {
		fontSize: '18px',
		fontWeight: '500',
		color: theme.colors.text.primary,
		margin: 0,
	}

	return (
		<div style={styles}>
			<div style={leftSideStyles}>
				<Avatar
					src={profilePhoto} // ← Pass as PROP
					name='Salesh'
					size='40px'
				/>
				<h2 style={greetingStyles}>Hi, Salesh!</h2>
			</div>

			{/* Right side: Empty for now (maybe add icons later) */}
			<div>{/* Search icon, notifications, etc. can go here */}</div>
		</div>
	)
}

export default Header
