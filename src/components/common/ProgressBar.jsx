import React from 'react'
import { theme } from '../../styles/theme'

const ProgressBar = ({
	percentage = 0,
	color = '#0567F3',
	height = '6px',
	showLabel = false,
	backgroundColor = '#E0E0E0',
	style = {},
}) => {
	const validPercentage = Math.min(Math.max(percentage, 0), 100)

	// Container (background track)
	const containerStyles = {
		width: '100%',
		height: height,
		backgroundColor: backgroundColor,
		borderRadius: '100px', // Fully rounded ends
		overflow: 'hidden',
		position: 'relative',
		...style,
	}

	// Filled bar (progress)
	const barStyles = {
		height: '100%',
		width: `${validPercentage}%`,
		backgroundColor: color,
		borderRadius: '100px',
		transition: 'width 0.3s ease', // Smooth animation
	}

	// Wrapper for bar + label
	const wrapperStyles = {
		display: 'flex',
		alignItems: 'center',
		gap: '8px',
		width: '100%',
	}

	const labelStyles = {
		fontSize: '12px',
		fontWeight: '500',
		color: theme.colors.text.secondary,
		minWidth: '35px', // Prevent layout shift
	}

	return (
		<div style={wrapperStyles}>
			<div style={containerStyles}>
				<div style={barStyles} />
			</div>
			{showLabel && <span style={labelStyles}>{validPercentage}%</span>}
		</div>
	)
}

export default ProgressBar
