import { useSettings } from '../contexts/SettingsContext'
import '../App.css'
import StickerDisplay from '../components/StickerDisplay'
import { useState } from 'react'

function Settings() {
  const { settings, updateSetting, resetSettings } = useSettings()
  const [showSticker, setShowSticker] = useState(false)
  const [currentSticker, setCurrentSticker] = useState('')

  const handleWheelAnimationToggle = () => {
    updateSetting('wheelAnimation', !settings.wheelAnimation)
  }

  const handleNonCompliantToggle = () => {
    updateSetting('showNonCompliantBosses', !settings.showNonCompliantBosses)
  }

  const handleAddSticker = () => {
    const stickers = ['yoimiya1.jpg', 'yoimiya2.jpg', 'yoimiya3.webp', 'yoimiya4.avif', 'yoimiya5.jpg']
    const randomSticker = stickers[Math.floor(Math.random() * stickers.length)]
    setCurrentSticker(randomSticker)
    setShowSticker(true)
  }

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all settings to their default values?')) {
      resetSettings()
    }
  }

  return (
    <div className="settings-page">
      <header className="settings-header">
        <h1>⚙️ Settings</h1>
        <p>Configure your wheel preferences and behavior</p>
      </header>

      <main className="settings-content">
        <section className="settings-section">
          <h2>Main Character Selection</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>Main Selection</h3>
              <p>Choose your primary character theme for the site</p>
            </div>
            <div className="setting-control">
              <label className="toggle-switch">
                <input
                  type="radio"
                  name="mainCharacter"
                  value="yoimiya"
                  checked={settings.mainCharacter === 'yoimiya'}
                  onChange={() => updateSetting('mainCharacter', 'yoimiya')}
                />
                <span className="radio-label">Yoimiya</span>
              </label>
              <label className="toggle-switch">
                <input
                  type="radio"
                  name="mainCharacter"
                  value="ayato"
                  checked={settings.mainCharacter === 'ayato'}
                  onChange={() => updateSetting('mainCharacter', 'ayato')}
                />
                <span className="radio-label">Ayato</span>
              </label>
              <label className="toggle-switch">
                <input
                  type="radio"
                  name="mainCharacter"
                  value="none"
                  checked={settings.mainCharacter === 'none'}
                  onChange={() => updateSetting('mainCharacter', 'none')}
                />
                <span className="radio-label">Default</span>
              </label>
            </div>
          </div>

          {settings.mainCharacter === 'yoimiya' && (
            <div className="setting-item">
              <div className="setting-info">
                <h3>Yoimiya Stickers</h3>
                <p>Add decorative Yoimiya stickers to the interface</p>
              </div>
              <div className="setting-control">
                <button 
                  className="sticker-toggle"
                  onClick={handleAddSticker}
                >
                  🎲 Add Random Sticker
                </button>
              </div>
            </div>
          )}

          {showSticker && currentSticker && (
            <StickerDisplay 
              sticker={currentSticker}
              onClose={() => setShowSticker(false)}
            />
          )}
        </section>

        <section className="settings-section">
          <h2>Boss Wheel Settings</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>Wheel Animation</h3>
              <p>Enable spinning animation when the boss wheel is spun</p>
            </div>
            <div className="setting-control">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.wheelAnimation}
                  onChange={handleWheelAnimationToggle}
                />
                <span className="toggle-slider"></span>
              </label>
              <span className="toggle-label">
                {settings.wheelAnimation ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>Show Non-Compliant Bosses</h3>
              <p>Display bosses that are marked as non-compliant in the boss wheel</p>
            </div>
            <div className="setting-control">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.showNonCompliantBosses}
                  onChange={handleNonCompliantToggle}
                />
                <span className="toggle-slider"></span>
              </label>
              <span className="toggle-label">
                {settings.showNonCompliantBosses ? 'Shown' : 'Hidden'}
              </span>
            </div>
          </div>
        </section>

        <section className="settings-section">
          <h2>Reset Options</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>Reset All Settings</h3>
              <p>Restore all settings to their default values</p>
            </div>
            <div className="setting-control">
              <button className="reset-button" onClick={handleReset}>
                Reset to Defaults
              </button>
            </div>
          </div>
        </section>

        <section className="settings-info">
          <h2>About Settings</h2>
          <div className="info-grid">
            <div className="info-item">
              <h4>🎯 Wheel Animation</h4>
              <p>When disabled, the wheel will instantly show the result without spinning animation.</p>
            </div>
            <div className="info-item">
              <h4>🛡️ Non-Compliant Bosses</h4>
              <p>Some bosses are marked as non-compliant. By default, they are hidden from the wheel.</p>
            </div>
            <div className="info-item">
              <h4>💾 Persistence</h4>
              <p>Your settings are automatically saved and will persist between sessions.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Settings
