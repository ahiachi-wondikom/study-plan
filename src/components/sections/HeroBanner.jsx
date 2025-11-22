import React from 'react'
import Button from '../common/Button'
import { theme } from '../../styles/theme'
import bookCover from '../../assets/bookCover.jpg'
import { Pause } from 'lucide-react'

const HeroBanner = () => {
	const containerStyles = {
		backgroundColor: '#0567F3',
		borderRadius: '12px',
		padding: '20px',
		display: 'flex',
		gap: '16px',
		alignItems: 'center',
		margin: '20px',
		color: '#fff',
	}

	const bookCoverStyles = {
		width: '80px',
		height: '100px',
		borderRadius: '8px',
		backgroundColor: '#fff',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '40px',
	}

	const contentStyles = {
		flex: 1,
	}

	const labelStyles = {
		fontSize: '14px',
		marginBottom: '8px',
		opacity: 0.9,
	}

	const titleStyles = {
		fontSize: '16px',
		fontWeight: '600',
		marginBottom: '12px',
		lineHeight: 1.4,
	}

	const iconWrapperStyles = {
		backgroundColor: '#FFB800',
		borderRadius: '50%',
		width: '20px',
		height: '20px',
		// display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexShrink: 0,
		marginRight: '8px',
	}

	return (
		<div style={containerStyles}>
			<img src={bookCover} alt='Book cover' style={bookCoverStyles} />

			<div style={contentStyles}>
				{/* Remove the extra div here! */}
				<p style={labelStyles}>
					<span style={iconWrapperStyles}>
						<Pause size={12} fill='white' strokeWidth={0} />
					</span>
					You were studying
				</p>

				<h3 style={titleStyles}>
					The Balance Between National Security and Individual Privacy Rights
				</h3>

				<Button
					variant='outline'
					endIcon={<span>→</span>}
					onClick={() => console.log('Resume study clicked!')}
				>
					Resume Study
				</Button>
			</div>
		</div>
	)
}

export default HeroBanner
