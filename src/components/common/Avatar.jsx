import React, { useState } from 'react'
import { theme } from '../../styles/theme'

const Avatar = ({ src, name = 'User', size = '40px' }) => {
	const [imageError, setImageError] = useState(false)

	const getInitial = () => name.charAt(0).toUpperCase()

	const styles = {
		width: size,
		height: size,
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#0567F3',
		color: '#fff',
		fontSize: `calc(${size} / 2.5)`,
		fontWeight: '600',
		overflow: 'hidden',
	}

	if (src && !imageError) {
		return (
			<img
				src={src}
				alt={name}
				style={styles}
				onError={() => setImageError(true)}
			/>
		)
	}

	return <div style={styles}>{getInitial()}</div>
}

export default Avatar
