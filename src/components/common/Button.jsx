const Button = ({ children, variant = 'primary', icon, onClick }) => {
	const styles = {
		padding: '12px 20px',
		borderRadius: '10px',
		border: variant === 'primary' ? 'none' : '2px solid #0567F3',
		background: variant === 'primary' ? '#0567F3' : 'transparent', // FIXED
		color: variant === 'primary' ? '#fff' : '#0567F3',
		display: 'flex',
		gap: '8px',
		alignItems: 'center',
		cursor: 'pointer',
	}

	return (
		<button style={styles} type='button' onClick={onClick}>
			{' '}
			{/* ADDED onClick */}
			{icon && icon}
			{children}
		</button>
	)
}
