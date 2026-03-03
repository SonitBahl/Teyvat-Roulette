// Yoimiya-inspired theme system
export const THEMES = {
  yoimiya: {
    name: 'Yoimiya',
    colors: {
      primary: '#FF6B9A',      // Yoimiya's pink/purple
      secondary: '#FFB6D9',    // Light purple
      accent: '#9B4EFF',        // Sky blue
      background: '#1A1B2E',    // Deep blue
      surface: '#2D2B48',     // Dark surface
      text: '#FFFFFF',           // White text
      success: '#4CAF50',       // Success green
      warning: '#FF9800',      // Warning orange
    },
    gradients: {
      primary: 'linear-gradient(135deg, #FF6B9A 0%, #9B4EFF 100%)',
      secondary: 'linear-gradient(135deg, #FFB6D9 0%, #7B3FF4 100%)',
      background: 'linear-gradient(135deg, #1A1B2E 0%, #2D2B48 100%)',
      surface: 'rgba(45, 27, 78, 0.9)',
      glass: 'rgba(255, 255, 255, 0.1)',
    },
    shadows: {
      soft: '0 4px 20px rgba(0, 0, 0, 0.1)',
      medium: '0 8px 32px rgba(0, 0, 0, 0.15)',
      strong: '0 12px 40px rgba(0, 0, 0, 0.25)',
    },
    typography: {
      primary: '"Genshin Impact", "Comic Sans MS", "Noto Sans JP"',
      secondary: '"Segoe UI", "Roboto", "Helvetica Neue"',
    },
    spacing: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
    },
    borderRadius: {
      small: '8px',
      medium: '12px',
      large: '16px',
      xl: '20px',
    },
    animations: {
      duration: {
        fast: '0.2s',
        normal: '0.3s',
        slow: '0.5s',
      },
      easing: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  default: {
    name: 'Default',
    colors: {
      primary: '#667eea',        // Current blue
      secondary: '#764ba2',       // Current purple
      accent: '#5a6fd8',        // Current accent
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      surface: 'rgba(255, 255, 255, 0.95)',
      glass: 'rgba(255, 255, 255, 0.1)',
      text: '#333333',           // Dark text
      success: '#4CAF50',       // Success green
      warning: '#FF9800',      // Warning orange
    },
    gradients: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      secondary: 'linear-gradient(135deg, #764ba2 0%, #5a6fd8 100%)',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      surface: 'rgba(255, 255, 255, 0.95)',
      glass: 'rgba(255, 255, 255, 0.1)',
    },
    shadows: {
      soft: '0 4px 20px rgba(0, 0, 0, 0.1)',
      medium: '0 8px 32px rgba(0, 0, 0, 0.15)',
      strong: '0 12px 40px rgba(0, 0, 0, 0.25)',
    },
    typography: {
      primary: '"Genshin Impact", "Comic Sans MS", "Noto Sans JP"',
      secondary: '"Segoe UI", "Roboto", "Helvetica Neue"',
    },
    spacing: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
    },
    borderRadius: {
      small: '8px',
      medium: '12px',
      large: '16px',
      xl: '20px',
    },
    animations: {
      duration: {
        fast: '0.2s',
        normal: '0.3s',
        slow: '0.5s',
      },
      easing: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
}

// Theme utility functions
export const getTheme = (themeName) => {
  return THEMES[themeName] || THEMES.default
}

export const applyTheme = (theme) => {
  const root = document.documentElement
  const colors = theme.colors
  
  // Apply CSS custom properties
  root.style.setProperty('--theme-primary', colors.primary)
  root.style.setProperty('--theme-secondary', colors.secondary)
  root.style.setProperty('--theme-accent', colors.accent)
  root.style.setProperty('--theme-background', colors.background)
  root.style.setProperty('--theme-surface', colors.surface)
  root.style.setProperty('--theme-glass', colors.glass)
  root.style.setProperty('--theme-text', colors.text)
  root.style.setProperty('--theme-success', colors.success)
  root.style.setProperty('--theme-warning', colors.warning)
  
  // Apply gradients
  root.style.setProperty('--theme-primary-gradient', theme.gradients.primary)
  root.style.setProperty('--theme-secondary-gradient', theme.gradients.secondary)
  root.style.setProperty('--theme-background-gradient', theme.gradients.background)
  
  // Apply shadows
  root.style.setProperty('--theme-shadow-soft', theme.shadows.soft)
  root.style.setProperty('--theme-shadow-medium', theme.shadows.medium)
  root.style.setProperty('--theme-shadow-strong', theme.shadows.strong)
  
  // Apply typography
  root.style.setProperty('--theme-font-primary', theme.typography.primary.join(', '))
  root.style.setProperty('--theme-font-secondary', theme.typography.secondary.join(', '))
  
  // Apply spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    root.style.setProperty(`--theme-spacing-${key}`, value)
  })
  
  // Apply border radius
  Object.entries(theme.borderRadius).forEach(([key, value]) => {
    root.style.setProperty(`--theme-radius-${key}`, value)
  })
  
  // Apply animations
  Object.entries(theme.animations.duration).forEach(([key, value]) => {
    root.style.setProperty(`--theme-duration-${key}`, value)
  })
  
  Object.entries(theme.animations.easing).forEach(([key, value]) => {
    root.style.setProperty(`--theme-easing-${key}`, value)
  })
  
  // Set theme name on body for styling
  document.body.setAttribute('data-theme', theme.name)
}
