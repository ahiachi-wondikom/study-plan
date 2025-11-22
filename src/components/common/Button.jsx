import React from 'react'

const Button = ({
	children,
	variant = 'primary',
	icon, // Icon before text
	endIcon, // NEW: Icon after text
	onClick,
	disabled = false,
	style = {},
}) => {
	const styles = {
		padding: '12px 20px',
		borderRadius: '10px',
		border: variant === 'primary' ? 'none' : '2px solid #fff', // White border for outline on blue
		background: variant === 'primary' ? '#0567F3' : 'transparent',
		color: variant === 'primary' ? '#fff' : '#fff', // White text for both
		display: 'flex',
		gap: '8px',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: disabled ? 'not-allowed' : 'pointer',
		opacity: disabled ? 0.6 : 1,
		transition: 'all 0.2s ease',
		fontFamily: 'inherit',
		fontSize: '14px',
		fontWeight: '500',
		...style,
	}

	return (
		<button
			style={styles}
			type='button'
			onClick={disabled ? undefined : onClick}
			disabled={disabled}
		>
			{icon && icon}
			{children}
			{endIcon && endIcon} {/* NEW: Icon at the end */}
		</button>
	)
}

export default Button
