import React from 'react'
import ProgressBar from './ProgressBar'
import { theme } from '../../styles/theme'

const Card = ({
	title = 'Study Block',
	subtitle = '',
	progress = 0,
	totalCards = 0,
	masteredCards = 0,
	teacherName = '',
	teacherAvatar = '👨‍🏫',
	onClick,
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

	const teacherAvatarStyles = {
		width: '24px',
		height: '24px',
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '14px',
	}

	// Hover effect
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
			{/* Header: Title + Progress Badge */}
			<div style={headerStyles}>
				<div style={titleContainerStyles}>
					<h3 style={titleStyles}>{title}</h3>
					{subtitle && <p style={subtitleStyles}>{subtitle}</p>}
				</div>
				<div style={progressBadgeStyles}>{progress}%</div>
			</div>

			{/* Progress Bar */}
			<ProgressBar percentage={progress} />

			{/* Footer: Stats + Teacher */}
			<div style={footerStyles}>
				{/* Left: Cards Stats */}
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

				{/* Right: Teacher Info */}
				{teacherName && (
					<div style={teacherStyles}>
						<div style={teacherAvatarStyles}>{teacherAvatar}</div>
						<span>{teacherName}</span>
					</div>
				)}
			</div>
		</div>
	)
}

export default Card

// ============================================
// USAGE EXAMPLES
// ============================================

/*

// 1. BASIC CARD (Like in your design)
<Card 
  title="Chemical Compounds"
  subtitle="Grade 9, Term One, 2024"
  progress={60}
  totalCards={120}
  masteredCards={50}
  teacherName="Maggie Norris"
  teacherAvatar="👩‍🏫"
  onClick={() => console.log('Card clicked!')}
/>

// 2. SIMPLE CARD (Minimal info)
<Card 
  title="Physics Basics"
  progress={45}
  totalCards={80}
  masteredCards={36}
/>

// 3. WITHOUT TEACHER INFO
<Card 
  title="Mathematics"
  subtitle="Algebra Chapter 1"
  progress={90}
  totalCards={50}
  masteredCards={45}
/>

// 4. MULTIPLE CARDS IN A LIST
<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  <Card 
    title="Chemical Compounds"
    subtitle="Grade 9, Term One, 2024"
    progress={60}
    totalCards={120}
    masteredCards={50}
    teacherName="Maggie Norris"
    teacherAvatar="👩‍🏫"
  />
  
  <Card 
    title="Biology Basics"
    subtitle="Grade 9, Term Two, 2024"
    progress={75}
    totalCards={100}
    masteredCards={75}
    teacherName="John Smith"
    teacherAvatar="👨‍🏫"
  />
  
  <Card 
    title="Physics Laws"
    subtitle="Grade 10, Term One, 2024"
    progress={40}
    totalCards={90}
    masteredCards={36}
    teacherName="Sarah Johnson"
    teacherAvatar="👩‍🔬"
  />
</div>

// 5. CLICKABLE CARD (Navigate to detail page)
<Card 
  title="History Timeline"
  progress={85}
  totalCards={60}
  masteredCards={51}
  onClick={() => navigate('/study/history')}
/>

// 6. CUSTOM STYLING
<Card 
  title="Art History"
  progress={50}
  totalCards={40}
  masteredCards={20}
  style={{
    border: '2px solid #0567F3',
    backgroundColor: '#F5F9FF',
  }}
/>

// 7. WITH REAL TEACHER PHOTO (Using Avatar component)
import Avatar from './Avatar';

<Card 
  title="Literature"
  progress={95}
  totalCards={200}
  masteredCards={190}
  teacherAvatar={<Avatar src="/teacher.jpg" name="Emma Wilson" size="24px" />}
  teacherName="Emma Wilson"
/>

*/
