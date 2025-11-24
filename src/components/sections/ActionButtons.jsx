import React from 'react'
import uploadIcon from '../../assets/upload-icon.png'
import scanIcon from '../../assets/scan-icon.png'
// import pasteIcon from '../../assets/paste-icon.png'
import driveIcon from '../../assets/drive-icon.png'

const ActionButtons = () => {
	const containerStyles = {
		backgroundColor: '#FFFFFF',
		borderRadius: '12px',
		padding: '20px',
		margin: '20px',
		border: '2px solid #0567F3',
	}

	const headingStyles = {
		fontSize: '16px',
		fontWeight: '600',
		color: '#212121',
		marginBottom: '20px',
		margin: '0 0 20px 0',
	}

	const gridStyles = {
		display: 'grid',
		gridTemplateColumns: 'repeat(4, 1fr)',
		gap: '16px',
	}

	const buttonStyles = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '8px',
		padding: '16px 12px',
		backgroundColor: '#F5F9FF',
		borderRadius: '12px',
		border: 'none',
		cursor: 'pointer',
		transition: 'all 0.2s ease',
	}

	const iconWrapperStyles = {
		width: '48px',
		height: '48px',
		backgroundColor: '#E3F2FD',
		borderRadius: '12px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}

	// Image styles
	const imageStyles = {
		width: '32px',
		height: '32px',
		objectFit: 'contain', // Keeps aspect ratio
	}

	const labelStyles = {
		fontSize: '14px',
		fontWeight: '500',
		color: '#212121',
		textAlign: 'center',
	}

	const handleUpload = () => {
		console.log('Upload clicked')
	}

	const handleScan = () => {
		console.log('Scan clicked')
	}

	const handlePaste = () => {
		console.log('Paste clicked')
	}

	const handleDrive = () => {
		console.log('Drive clicked')
	}

	return (
		<div style={containerStyles}>
			<h2 style={headingStyles}>Start a new study</h2>

			<div style={gridStyles}>
				{/* Upload Button */}
				<button
					style={buttonStyles}
					onClick={handleUpload}
					onMouseEnter={(e) => {
						e.currentTarget.style.transform = 'translateY(-4px)'
						e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.transform = 'translateY(0)'
						e.currentTarget.style.boxShadow = 'none'
					}}
				>
					<div style={iconWrapperStyles}>
						<img src={uploadIcon} alt='Upload' style={imageStyles} />
					</div>
					<span style={labelStyles}>Upload</span>
				</button>

				{/* Scan Button */}
				<button
					style={buttonStyles}
					onClick={handleScan}
					onMouseEnter={(e) => {
						e.currentTarget.style.transform = 'translateY(-4px)'
						e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.transform = 'translateY(0)'
						e.currentTarget.style.boxShadow = 'none'
					}}
				>
					<div style={iconWrapperStyles}>
						<img src={scanIcon} alt='Scan' style={imageStyles} />
					</div>
					<span style={labelStyles}>Scan</span>
				</button>

				{/* Paste Button */}
				<button
					style={buttonStyles}
					onClick={handlePaste}
					onMouseEnter={(e) => {
						e.currentTarget.style.transform = 'translateY(-4px)'
						e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.transform = 'translateY(0)'
						e.currentTarget.style.boxShadow = 'none'
					}}
				>
					<div style={iconWrapperStyles}>
						<svg
							width='28'
							height='28'
							viewBox='0 0 24 24'
							fill='none'
							stroke='#0567F3'
							strokeWidth='2'
						>
							<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
							<polyline points='17 8 12 3 7 8' />
							<line x1='12' y1='3' x2='12' y2='15' />
						</svg>
					</div>
					<span style={labelStyles}>Paste</span>
				</button>

				{/* Drive Button */}
				<button
					style={buttonStyles}
					onClick={handleDrive}
					onMouseEnter={(e) => {
						e.currentTarget.style.transform = 'translateY(-4px)'
						e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.transform = 'translateY(0)'
						e.currentTarget.style.boxShadow = 'none'
					}}
				>
					<div style={iconWrapperStyles}>
						<img src={driveIcon} alt='Drive' style={imageStyles} />
					</div>
					<span style={labelStyles}>Drive</span>
				</button>
			</div>
		</div>
	)
}

export default ActionButtons
