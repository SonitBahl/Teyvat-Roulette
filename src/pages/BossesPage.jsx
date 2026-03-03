import { useEffect, useMemo, useState } from 'react'
import '../App.css'
import Wheel from '../components/Wheel'
import bossesData from '../../data/boss.json'
import { useSettings } from '../contexts/SettingsContext'
import { useUserName } from '../hooks/useUserName'

const defaultFilters = {
  region: 'all',
  type: 'all'
}

const formatLabel = value => value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

function BossesPage() {
  const [filters, setFilters] = useState(defaultFilters)
  const [selectedBoss, setSelectedBoss] = useState(null)
  const [showPopup, setShowPopup] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const { settings } = useSettings()
  const { userName } = useUserName()

  const bosses = useMemo(() => [...bossesData].sort((a, b) => a.name.localeCompare(b.name)), [])
  const regions = useMemo(() => ['all', ...Array.from(new Set(bossesData.map(boss => boss.region))).sort()], [])
  const types = useMemo(() => ['all', ...Array.from(new Set(bossesData.map(boss => boss.type))).sort()], [])

  const filteredBosses = useMemo(() => {
    return bosses.filter(boss => {
      if (filters.region !== 'all' && boss.region !== filters.region) return false
      if (filters.type !== 'all' && boss.type !== filters.type) return false
      if (!settings.showNonCompliantBosses && boss.compliant === 'no') return false
      return true
    })
  }, [bosses, filters, settings.showNonCompliantBosses])

  const handleSelectChange = event => {
    const { name, value } = event.target
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const clearFilters = () => setFilters(defaultFilters)

  const spinWheel = () => {
    if (filteredBosses.length === 0 || isSpinning) return

    const finalIndex = Math.floor(Math.random() * filteredBosses.length)
    const selectedBoss = filteredBosses[finalIndex]

    if (settings.wheelAnimation) {
      // Sequential highlighting animation
      setIsSpinning(true)
      setHighlightedIndex(-1) // Reset highlight
      
      // Calculate animation sequence for 5-second duration
      const totalDuration = 5000 // 5 seconds total
      const baseSpins = 10 // Base number of cycles
      let currentIndex = 0
      let spinCount = 0
      let elapsed = 0
      let currentDelay = 30 // Start very fast
      
      const animateNext = () => {
        if (elapsed >= totalDuration) {
          // Final stop on selected boss
          setHighlightedIndex(finalIndex)
          setTimeout(() => {
            setIsSpinning(false)
            setSelectedBoss(selectedBoss)
            setShowPopup(true)
          }, 500)
          return
        }
        
        // Move to next index
        currentIndex = (currentIndex + 1) % filteredBosses.length
        
        // Calculate progress for easing
        const progress = elapsed / totalDuration
        const easeOutProgress = 1 - Math.pow(1 - progress, 3) // Cubic ease-out
        
        // Dramatic slowdown: start at 30ms, end at ~600ms
        currentDelay = 30 + (570 * easeOutProgress)
        
        // Check if we completed a full rotation
        if (currentIndex === 0) {
          spinCount++
        }
        
        setHighlightedIndex(currentIndex)
        elapsed += currentDelay
        
        setTimeout(animateNext, currentDelay)
      }
      
      // Start animation
      setTimeout(animateNext, 100)
    } else {
      // Instant selection without animation
      setSelectedBoss(selectedBoss)
      setShowPopup(true)
    }
  }

  const closePopup = () => setShowPopup(false)

  return (
    <div className="bosses-page">
      <header className="bosses-header">
        <h1>🗺️ Teyvat Boss Tracker</h1>
        <p>Browse world bosses, weekly encounters, and local legends with quick filters for region and type.</p>
      </header>

      <section className="bosses-tools">
        <div className="bosses-controls">
          <div className="select-group">
            <label htmlFor="region-select">Region</label>
            <select id="region-select" name="region" value={filters.region} onChange={handleSelectChange}>
              {regions.map(region => (
                <option key={region} value={region}>
                  {region === 'all' ? 'All Regions' : region}
                </option>
              ))}
            </select>
          </div>

          <div className="select-group">
            <label htmlFor="type-select">Type</label>
            <select id="type-select" name="type" value={filters.type} onChange={handleSelectChange}>
              {types.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : formatLabel(type)}
                </option>
              ))}
            </select>
          </div>

          <button className="bosses-clear" onClick={clearFilters} disabled={filters.region === 'all' && filters.type === 'all'}>
            Reset Filters
          </button>
        </div>

        <div className="bosses-wheel">
          <Wheel
            items={filteredBosses}
            isSpinning={isSpinning}
            highlightedIndex={highlightedIndex}
            selectedItem={selectedBoss}
            emptyMessage="No bosses match the selected filters"
          />
          <button className="spin-button" onClick={spinWheel} disabled={filteredBosses.length === 0 || isSpinning}>
            {isSpinning ? 'Spinning...' : filteredBosses.length === 0 ? 'No Bosses Available' : 'Spin the Boss Roulette'}
          </button>

          {selectedBoss && (
            <div className="bosses-selection">
              <p>Next target</p>
              <h3>{selectedBoss.name}</h3>
              <div className="bosses-selection-meta">
                <span>{selectedBoss.region}</span>
                <span>{formatLabel(selectedBoss.type)}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      <p className="bosses-count">
        Showing <strong>{filteredBosses.length}</strong> boss{filteredBosses.length === 1 ? '' : 'es'}
      </p>

      <section className="bosses-grid">
        {filteredBosses.map(boss => (
          <article key={`${boss.name}-${boss.region}`} className="boss-card">
            <h3>{boss.name}</h3>
            <div className="boss-badges">
              <span className="badge boss-region">{boss.region}</span>
              <span className="badge boss-type">{formatLabel(boss.type)}</span>
            </div>
          </article>
        ))}
      </section>

      {showPopup && selectedBoss && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              ×
            </button>
            <h2>🎯 Selected Boss</h2>
            <div className="character-info">
              <h3>{selectedBoss.name}</h3>
              <div className="character-details">
                <span className="badge boss-region">{selectedBoss.region}</span>
                <span className="badge boss-type">{formatLabel(selectedBoss.type)}</span>
              </div>
            </div>
            <button className="popup-close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BossesPage

