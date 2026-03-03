import { createContext, useContext, useEffect, useState } from 'react'
import { THEMES, getTheme, applyTheme } from '../themes/ThemeSystemFixed'

const DEFAULT_SETTINGS = {
  wheelAnimation: false,
  showNonCompliantBosses: false,
  mainCharacter: 'none'
}

const SETTINGS_KEY = 'teyvat-roulette-settings'

const SettingsContext = createContext()

export function useSettings() {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }
  return context
}

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem(SETTINGS_KEY)
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings)
      return { ...DEFAULT_SETTINGS, ...parsed }
    }
    return DEFAULT_SETTINGS
  })

  const [isLoading, setIsLoading] = useState(true)

  // Load and apply theme on mount
  useEffect(() => {
    const mainCharacter = localStorage.getItem('teyvat-roulette-main-character')
    if (mainCharacter && mainCharacter !== 'none') {
      const theme = getTheme(mainCharacter)
      applyTheme(theme)
    } else {
      // Apply default theme
      const defaultTheme = getTheme('default')
      applyTheme(defaultTheme)
    }
    setIsLoading(false)
  }, [])

  // Save settings to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
    } catch (error) {
      console.warn('Failed to save settings to localStorage:', error)
    }
  }, [settings])

  // Update theme when main character changes
  const updateSetting = (key, value) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: value }
      
      // Save to localStorage immediately
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(newSettings))
      
      // Apply theme if main character changed
      if (key === 'mainCharacter') {
        const themeKey = value && value !== 'none' ? value : 'default'
        const theme = getTheme(themeKey)
        applyTheme(theme)

        try {
          localStorage.setItem('teyvat-roulette-main-character', themeKey)
        } catch (error) {
          console.warn('Failed to save main character theme:', error)
        }
      }
      
      return newSettings
    })
  }

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS)

    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(DEFAULT_SETTINGS))
      localStorage.removeItem('teyvat-roulette-main-character')
    } catch (error) {
      console.warn('Failed to reset settings in localStorage:', error)
    }

    const defaultTheme = getTheme('default')
    applyTheme(defaultTheme)
  }

  const value = {
    settings,
    updateSetting,
    resetSettings,
    isLoading
  }

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}
