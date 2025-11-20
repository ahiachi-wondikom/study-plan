// Design System - Single Source of Truth for all styling
// Based on your Figma design

export const theme = {
	// COLOR PALETTE
	colors: {
		// Primary Colors (from your Figma design)
		primary: {
			main: '#0066FF', // That bright blue background
			light: '#3385FF', // Lighter blue for hovers
			dark: '#0052CC', // Darker blue for active states
			contrast: '#FFFFFF', // Text on blue backgrounds
		},

		// Secondary Colors
		secondary: {
			main: '#FFB800', // Yellow/orange accent
			light: '#FFC933',
			dark: '#CC9300',
			contrast: '#000000',
		},

		// Status Colors
		success: {
			main: '#4CAF50', // Green for completed/success
			light: '#6FBF73',
			dark: '#3D8B40',
		},

		warning: {
			main: '#FF9800',
			light: '#FFB133',
			dark: '#CC7A00',
		},

		error: {
			main: '#F44336',
			light: '#F6685E',
			dark: '#C3362B',
		},

		// Neutral Colors
		neutral: {
			white: '#FFFFFF',
			black: '#000000',
			gray: {
				50: '#FAFAFA',
				100: '#F5F5F5', // Background color
				200: '#EEEEEE',
				300: '#E0E0E0',
				400: '#BDBDBD',
				500: '#9E9E9E', // Medium gray text
				600: '#757575',
				700: '#616161',
				800: '#424242',
				900: '#212121', // Dark text
			},
		},

		// Functional Colors (semantic naming)
		background: {
			default: '#F5F5F5', // Main app background
			paper: '#FFFFFF', // Card backgrounds
			blue: '#0066FF', // Hero banner background
		},

		text: {
			primary: '#212121', // Main text
			secondary: '#616161', // Supporting text
			disabled: '#9E9E9E', // Disabled text
			hint: '#BDBDBD', // Placeholder text
		},

		border: {
			light: '#E0E0E0',
			main: '#BDBDBD',
			dark: '#9E9E9E',
		},
	},

	// SPACING SYSTEM (8px base unit - industry standard)
	spacing: {
		xs: '4px', // 0.5 unit
		sm: '8px', // 1 unit
		md: '16px', // 2 units
		lg: '24px', // 3 units
		xl: '32px', // 4 units
		xxl: '48px', // 6 units
		xxxl: '64px', // 8 units
	},

	// TYPOGRAPHY SYSTEM
	typography: {
		fontFamily: {
			primary:
				"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
			heading: "'Poppins', 'Inter', sans-serif",
			mono: "'Fira Code', 'Courier New', monospace",
		},

		fontSize: {
			xs: '12px',
			sm: '14px',
			base: '16px', // Default body text
			lg: '18px',
			xl: '20px',
			xxl: '24px',
			xxxl: '32px',
			display: '48px',
		},

		fontWeight: {
			light: 300,
			regular: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
		},

		lineHeight: {
			tight: 1.2,
			normal: 1.5,
			relaxed: 1.75,
		},
	},

	// BORDER RADIUS
	borderRadius: {
		none: '0',
		sm: '4px',
		md: '8px',
		lg: '12px',
		xl: '16px',
		full: '9999px', // For pills/circles
	},

	// SHADOWS (for cards, modals, etc.)
	shadows: {
		none: 'none',
		sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
		md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
		card: '0 2px 8px rgba(0, 0, 0, 0.08)', // Custom for your cards
		hover: '0 4px 12px rgba(0, 0, 0, 0.15)', // Hover state
	},

	// Z-INDEX LAYERS (avoid conflicts)
	zIndex: {
		dropdown: 1000,
		sticky: 1020,
		fixed: 1030,
		modalBackdrop: 1040,
		modal: 1050,
		popover: 1060,
		tooltip: 1070,
	},

	// BREAKPOINTS (for responsive design)
	breakpoints: {
		xs: '320px',
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		xxl: '1536px',
	},

	// TRANSITIONS (for smooth animations)
	transitions: {
		fast: '150ms ease-in-out',
		normal: '250ms ease-in-out',
		slow: '350ms ease-in-out',
	},

	// COMPONENT-SPECIFIC TOKENS
	components: {
		button: {
			height: {
				sm: '32px',
				md: '40px',
				lg: '48px',
			},
			padding: {
				sm: '8px 16px',
				md: '12px 24px',
				lg: '16px 32px',
			},
		},

		card: {
			padding: '16px',
			borderRadius: '12px',
			shadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
		},

		input: {
			height: '48px',
			borderRadius: '8px',
			padding: '12px 16px',
		},

		navbar: {
			height: '64px',
			bottomHeight: '72px',
		},
	},
}

// HELPER FUNCTIONS (optional but useful!)

// Usage: getColor('primary.main') → '#0066FF'
export const getColor = (path) => {
	return path.split('.').reduce((obj, key) => obj?.[key], theme.colors)
}

// Usage: getSpacing(2) → '16px'  (2 * 8px base unit)
export const getSpacing = (multiplier) => {
	const baseUnit = 8
	return `${baseUnit * multiplier}px`
}

// Usage: rgba('primary.main', 0.5) → 'rgba(0, 102, 255, 0.5)'
export const rgba = (colorPath, alpha) => {
	const hex = getColor(colorPath)
	if (!hex) return ''

	const r = parseInt(hex.slice(1, 3), 16)
	const g = parseInt(hex.slice(3, 5), 16)
	const b = parseInt(hex.slice(5, 7), 16)

	return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

// EXPORT DEFAULT
export default theme
