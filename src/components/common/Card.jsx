import React from 'react'
import ProgressBar from './ProgressBar'
import { theme } from '../../styles/theme'
import Avatar from './Avatar'
import profilePhoto from '../../assets/Salesh.jpg'

const Card = ({
	title = 'Study Block',
	subtitle = '',
	progress = 0,
	totalCards = 0,
	masteredCards = 0,
	teacherName = '',
	teacherAvatar = 'Avatar',
	onClick,
	onIconClick,
	style = {},
}) => {
	// Main card container
	const cardStyles = {
		backgroundColor: '#FFFFFF',
		borderRadius: '12px',
		padding: '16px',
		boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
		cursor: onClick ? 'pointer' : 'default',
		transition: 'all 0.2s ease',
		position: 'relative',
		...style,
	}

	// Header section (title + progress badge)
	const headerStyles = {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginBottom: '12px',
	}

	const titleContainerStyles = {
		flex: 1,
	}

	const titleStyles = {
		fontSize: '16px',
		fontWeight: '600',
		color: theme.colors.text.primary,
		margin: '0 0 4px 0',
	}

	const subtitleStyles = {
		fontSize: '12px',
		color: theme.colors.text.secondary,
		margin: 0,
	}

	// Progress badge (the blue circle with percentage)
	const progressBadgeStyles = {
		backgroundColor: '#E3F2FD',
		color: '#0567F3',
		borderRadius: '8px',
		padding: '4px 8px',
		fontSize: '14px',
		fontWeight: '600',
		minWidth: '45px',
		textAlign: 'center',
	}

	const actionButtonStyles = {
		position: 'absolute',
		top: '16px',
		right: '16px',
		width: '32px',
		height: '32px',
		backgroundColor: '#2196F3',
		borderRadius: '8px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		border: 'none',
		transition: 'all 0.2s ease',
	}

	// Footer section (cards info + teacher)
	const footerStyles = {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: '12px',
	}

	const statsStyles = {
		display: 'flex',
		gap: '12px',
		fontSize: '12px',
		color: theme.colors.text.secondary,
	}

	const statItemStyles = {
		display: 'flex',
		alignItems: 'center',
		gap: '4px',
	}

	const teacherStyles = {
		display: 'flex',
		alignItems: 'center',
		gap: '6px',
		fontSize: '12px',
		color: theme.colors.text.secondary,
	}

	// const teacherAvatarStyles = {
	// 	width: '24px',
	// 	height: '24px',
	// 	borderRadius: '50%',
	// 	display: 'flex',
	// 	alignItems: 'center',
	// 	justifyContent: 'center',
	// 	fontSize: '14px',
	// }

	const [isHovered, setIsHovered] = React.useState(false)

	const hoverStyles =
		isHovered && onClick
			? {
					transform: 'translateY(-2px)',
					boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
			  }
			: {}

	return (
		<div
			style={{ ...cardStyles, ...hoverStyles }}
			onClick={onClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div style={headerStyles}>
				<div style={titleContainerStyles}>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '8px',
							maxWidth: '60%',
							margin: '0 auto',
						}}
					>
						<div style={{ flex: 1 }}>
							{' '}
							<ProgressBar percentage={progress} />
						</div>
						<div style={progressBadgeStyles}>{progress}%</div>{' '}
					</div>
					<h3 style={titleStyles}>{title}</h3>
					{subtitle && <p style={subtitleStyles}>{subtitle}</p>}
				</div>

				<div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
					{/* Blue Icon Button */}
					<button
						style={actionButtonStyles}
						onClick={(e) => {
							e.stopPropagation()
							onIconClick?.()
						}}
					>
						<svg
							width='16'
							height='16'
							viewBox='0 0 24 24'
							fill='none'
							stroke='white'
							strokeWidth='2'
						>
							<path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' />
						</svg>
					</button>
				</div>
			</div>

			{/* Footer: Stats + Teacher */}
			<div style={footerStyles}>
				<div style={statsStyles}>
					<div style={statItemStyles}>
						<span>📝</span>
						<span>{totalCards} cards</span>
					</div>
					<div style={statItemStyles}>
						<span>✓</span>
						<span>{masteredCards} Mastered</span>
					</div>
				</div>

				{teacherName && (
					<div style={teacherStyles}>
						<span>{teacherName}</span>
						{teacherAvatar}
					</div>
				)}
			</div>
		</div>
	)
}

export default Card
