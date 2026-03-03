// Character-inspired theme system
export const THEMES = {
  yoimiya: {
    name: 'yoimiya',
    colors: {
      primary: '#C04830',        // Reddish orange accent
      secondary: '#D89060',      // Fiery orange
      accent: '#901818',         // Deep red
      background: 'linear-gradient(135deg, #901818 0%, #303030 60%, #D89060 100%)',
      surface: '#303030',        // Dark charcoal
      glass: 'rgba(240, 216, 192, 0.12)', // Soft firework glow
      text: '#F0D8C0',           // Light cream text
      success: '#4CAF50',       // Success green
      warning: '#FF9800',      // Warning orange
    },
    gradients: {
      primary: 'linear-gradient(135deg, #C04830 0%, #D89060 40%, #F0D8C0 100%)',
      secondary: 'linear-gradient(135deg, #901818 0%, #C04830 50%, #D89060 100%)',
      background: 'linear-gradient(135deg, #901818 0%, #303030 60%, #D89060 100%)',
      surface: 'rgba(48, 48, 48, 0.96)',
      glass: 'rgba(240, 216, 192, 0.16)',
    },
    shadows: {
      soft: '0 4px 20px rgba(0, 0, 0, 0.1)',
      medium: '0 8px 32px rgba(0, 0, 0, 0.15)',
      strong: '0 12px 40px rgba(0, 0, 0, 0.25)',
    },
    typography: {
      primary: ["Genshin Impact", "Comic Sans MS", "Noto Sans JP"],
      secondary: ["Segoe UI", "Roboto", "Helvetica Neue"],
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
  ayato: {
    name: 'ayato',
    colors: {
      primary: '#448EDE',        // Bright blue accent
      secondary: '#8267BF',      // Lavender purple
      accent: '#3A3571',         // Deep blue-purple
      background: 'linear-gradient(135deg, #3A3571 0%, #448EDE 50%, #D9D5CE 100%)',
      surface: '#D9D5CE',        // Soft off-white
      glass: 'rgba(58, 53, 113, 0.12)',
      text: '#3A3571',
      success: '#4CAF50',
      warning: '#FF9800',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #448EDE 0%, #8267BF 60%, #D9D5CE 100%)',
      secondary: 'linear-gradient(135deg, #3A3571 0%, #8267BF 50%, #448EDE 100%)',
      background: 'linear-gradient(135deg, #3A3571 0%, #448EDE 50%, #D9D5CE 100%)',
      surface: 'rgba(217, 213, 206, 0.96)',
      glass: 'rgba(68, 142, 222, 0.16)',
    },
    shadows: {
      soft: '0 4px 20px rgba(0, 0, 0, 0.1)',
      medium: '0 8px 32px rgba(0, 0, 0, 0.15)',
      strong: '0 12px 40px rgba(0, 0, 0, 0.25)',
    },
    typography: {
      primary: ["Genshin Impact", "Comic Sans MS", "Noto Sans JP"],
      secondary: ["Segoe UI", "Roboto", "Helvetica Neue"],
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
  flins: {
    name: 'flins',
    colors: {
      primary: '#6C5CE7',        // Electro purple accent
      secondary: '#303036',      // Dark gray
      accent: '#74B9FF',         // Soft blue highlight
      background: 'linear-gradient(135deg, #050509 0%, #181820 45%, #303036 100%)',
      surface: '#181820',        // Deep dark panels
      glass: 'rgba(116, 185, 255, 0.08)',
      text: '#E0E0E5',
      success: '#4CAF50',
      warning: '#FFB74D',
    },
    gradients: {
      primary: 'linear-gradient(145deg, #050509 0%, #181820 45%, #6C5CE7 100%)',
      secondary: 'linear-gradient(145deg, #181820 0%, #303036 40%, #74B9FF 100%)',
      background: 'linear-gradient(135deg, #050509 0%, #181820 45%, #303036 100%)',
      surface: 'rgba(24, 24, 32, 0.98)',
      glass: 'rgba(76, 66, 139, 0.22)',
    },
    shadows: {
      soft: '0 8px 24px rgba(0, 0, 0, 0.65)',
      medium: '0 14px 40px rgba(0, 0, 0, 0.8)',
      strong: '0 18px 60px rgba(0, 0, 0, 0.9)',
    },
    typography: {
      primary: ["Genshin Impact", "Comic Sans MS", "Noto Sans JP"],
      secondary: ["Segoe UI", "Roboto", "Helvetica Neue"],
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
  venti: {
    name: 'venti',
    colors: {
      primary: '#309078',        // Teal green
      secondary: '#90A8A8',      // Muted aqua
      accent: '#F0D8C0',         // Warm cream
      background: 'linear-gradient(135deg, #181830 0%, #309078 45%, #90A8A8 100%)',
      surface: '#F0D8C0',
      glass: 'rgba(48, 144, 120, 0.16)',
      text: '#181830',
      success: '#4CAF50',
      warning: '#FFB74D',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #309078 0%, #90A8A8 60%, #F0D8C0 100%)',
      secondary: 'linear-gradient(135deg, #181830 0%, #309078 45%, #F0D8C0 100%)',
      background: 'linear-gradient(135deg, #181830 0%, #309078 45%, #90A8A8 100%)',
      surface: 'rgba(240, 216, 192, 0.96)',
      glass: 'rgba(144, 168, 168, 0.18)',
    },
    shadows: {
      soft: '0 6px 22px rgba(0, 0, 0, 0.18)',
      medium: '0 10px 32px rgba(0, 0, 0, 0.24)',
      strong: '0 14px 42px rgba(0, 0, 0, 0.28)',
    },
    typography: {
      primary: ["Genshin Impact", "Comic Sans MS", "Noto Sans JP"],
      secondary: ["Segoe UI", "Roboto", "Helvetica Neue"],
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
  furina: {
    name: 'furina',
    colors: {
      primary: '#56CAF9',        // Bright sky blue
      secondary: '#4860A8',      // Classic blue
      accent: '#90C0F0',         // Light blue
      background: 'linear-gradient(135deg, #181830 0%, #303078 40%, #56CAF9 100%)',
      surface: '#181830',
      glass: 'rgba(86, 202, 249, 0.16)',
      text: '#E4F0FF',
      success: '#4CAF50',
      warning: '#FFB74D',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #56CAF9 0%, #4860A8 50%, #181830 100%)',
      secondary: 'linear-gradient(135deg, #303078 0%, #4860A8 45%, #90C0F0 100%)',
      background: 'linear-gradient(135deg, #181830 0%, #303078 40%, #56CAF9 100%)',
      surface: 'rgba(24, 24, 48, 0.98)',
      glass: 'rgba(144, 192, 240, 0.2)',
    },
    shadows: {
      soft: '0 8px 26px rgba(0, 0, 0, 0.55)',
      medium: '0 12px 38px rgba(0, 0, 0, 0.7)',
      strong: '0 18px 60px rgba(0, 0, 0, 0.85)',
    },
    typography: {
      primary: ["Genshin Impact", "Comic Sans MS", "Noto Sans JP"],
      secondary: ["Segoe UI", "Roboto", "Helvetica Neue"],
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
  hutao: {
    name: 'hutao',
    colors: {
      primary: '#A94A3F',        // Muted red
      secondary: '#67454A',      // Dusky brown
      accent: '#907878',         // Soft mauve
      background: 'linear-gradient(135deg, #2F2425 0%, #67454A 45%, #A94A3F 100%)',
      surface: '#2F2425',
      glass: 'rgba(144, 120, 120, 0.16)',
      text: '#F5E6DC',
      success: '#4CAF50',
      warning: '#FFB74D',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #2F2425 0%, #67454A 40%, #A94A3F 100%)',
      secondary: 'linear-gradient(135deg, #2F2425 0%, #786048 45%, #907878 100%)',
      background: 'linear-gradient(135deg, #2F2425 0%, #67454A 45%, #A94A3F 100%)',
      surface: 'rgba(47, 36, 37, 0.98)',
      glass: 'rgba(144, 120, 120, 0.2)',
    },
    shadows: {
      soft: '0 8px 24px rgba(0, 0, 0, 0.6)',
      medium: '0 12px 36px rgba(0, 0, 0, 0.75)',
      strong: '0 18px 56px rgba(0, 0, 0, 0.9)',
    },
    typography: {
      primary: ["Genshin Impact", "Comic Sans MS", "Noto Sans JP"],
      secondary: ["Segoe UI", "Roboto", "Helvetica Neue"],
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
    name: 'default',
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
      primary: ["Genshin Impact", "Comic Sans MS", "Noto Sans JP"],
      secondary: ["Segoe UI", "Roboto", "Helvetica Neue"],
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
