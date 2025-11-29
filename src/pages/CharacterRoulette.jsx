import { useEffect, useMemo, useState } from 'react'
import '../App.css'
import Wheel from '../components/Wheel'
import charactersData from '../../data/list.json'

function CharacterRoulette() {
  const characters = charactersData
  const [filters, setFilters] = useState({
    weapon_type: [],
    element: [],
    nation: [],
    rarity: [],
    class: []
  })
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [showFilters, setShowFilters] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const weaponTypes = useMemo(() => [...new Set(characters.map(c => c.weapon_type))].sort(), [characters])
  const elements = useMemo(() => [...new Set(characters.map(c => c.element))].sort(), [characters])
  const nations = useMemo(() => [...new Set(characters.map(c => c.nation))].sort(), [characters])
  const rarities = useMemo(() => [...new Set(characters.map(c => c.rarity))].sort((a, b) => b - a), [characters])
  const classes = useMemo(() => {
    const allClasses = characters.flatMap(c => c.class || [])
    return [...new Set(allClasses)].sort()
  }, [characters])

  const filteredCharacters = useMemo(() => {
    return characters.filter(char => {
      if (filters.weapon_type.length > 0 && !filters.weapon_type.includes(char.weapon_type)) return false
      if (filters.element.length > 0 && !filters.element.includes(char.element)) return false
      if (filters.nation.length > 0 && !filters.nation.includes(char.nation)) return false
      if (filters.rarity.length > 0 && !filters.rarity.includes(char.rarity)) return false
      if (filters.class.length > 0) {
        // Check if character has any of the selected classes
        const charClasses = char.class || []
        const hasSelectedClass = filters.class.some(selectedClass => charClasses.includes(selectedClass))
        if (!hasSelectedClass) return false
      }
      return true
    })
  }, [characters, filters])

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      const currentArray = prev[filterType]
      const isSelected = currentArray.includes(value)

      return {
        ...prev,
        [filterType]: isSelected ? currentArray.filter(item => item !== value) : [...currentArray, value]
      }
    })
    setSelectedCharacter(null)
  }

  const clearFilters = () => {
    setFilters({
      weapon_type: [],
      element: [],
      nation: [],
      rarity: [],
      class: []
    })
    setSelectedCharacter(null)
  }

  const spinWheel = () => {
    if (filteredCharacters.length === 0) return

    // Directly select and show result without animation
    const randomIndex = Math.floor(Math.random() * filteredCharacters.length)
    setSelectedCharacter(filteredCharacters[randomIndex])
    setShowPopup(true)
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  const toggleFilters = () => {
    setShowFilters(!showFilters)
    if (!showFilters) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const closeFilters = () => {
    setShowFilters(false)
    document.body.style.overflow = ''
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const activeFiltersCount = Object.values(filters).reduce((sum, arr) => sum + arr.length, 0)

  return (
    <div className="roulette-page">
      <div className="header">
        <h1>🎰 Teyvat Character Roulette</h1>
        <p>Spin the wheel to randomly select a character!</p>
        <button className="toggle-filters-btn" onClick={toggleFilters}>
          {showFilters ? '▼ Hide Filters' : '▶ Show Filters'}
          {activeFiltersCount > 0 && <span className="filter-badge">{activeFiltersCount}</span>}
        </button>
      </div>

      <div className="main-content">
        {showFilters && (
          <>
            <div className="filters-overlay" onClick={closeFilters}></div>
            <div className="filters-panel">
              <div className="filters-header">
                <h2>Filters</h2>
                <div className="filters-header-actions">
                  {activeFiltersCount > 0 && (
                    <button className="clear-filters-btn" onClick={clearFilters}>
                      Clear All ({activeFiltersCount})
                    </button>
                  )}
                  <button className="close-filters-btn" onClick={closeFilters}>
                    ×
                  </button>
                </div>
              </div>

              <div className="filter-group">
                <label>Weapon Type</label>
                <div className="filter-buttons">
                  {weaponTypes.map(weapon => (
                    <button
                      key={weapon}
                      className={`filter-btn ${filters.weapon_type.includes(weapon) ? 'active' : ''}`}
                      onClick={() => handleFilterChange('weapon_type', weapon)}
                    >
                      {weapon}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label>Element</label>
                <div className="filter-buttons">
                  {elements.map(element => (
                    <button
                      key={element}
                      className={`filter-btn ${filters.element.includes(element) ? 'active' : ''}`}
                      onClick={() => handleFilterChange('element', element)}
                    >
                      {element}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label>Nation</label>
                <div className="filter-buttons">
                  {nations.map(nation => (
                    <button
                      key={nation}
                      className={`filter-btn ${filters.nation.includes(nation) ? 'active' : ''}`}
                      onClick={() => handleFilterChange('nation', nation)}
                    >
                      {nation}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label>Rarity</label>
                <div className="filter-buttons">
                  {rarities.map(rarity => (
                    <button
                      key={rarity}
                      className={`filter-btn ${filters.rarity.includes(rarity) ? 'active' : ''}`}
                      onClick={() => handleFilterChange('rarity', rarity)}
                    >
                      {'⭐'.repeat(rarity)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label>Class</label>
                <div className="filter-buttons">
                  {classes.map(cls => (
                    <button
                      key={cls}
                      className={`filter-btn ${filters.class.includes(cls) ? 'active' : ''}`}
                      onClick={() => handleFilterChange('class', cls)}
                    >
                      {cls}
                    </button>
                  ))}
                </div>
              </div>

              <div className="character-count">
                <strong>{filteredCharacters.length}</strong> character{filteredCharacters.length !== 1 ? 's' : ''} available
              </div>
            </div>
          </>
        )}

        <div className="wheel-container">
          <Wheel
            items={filteredCharacters}
            isSpinning={false}
            rotation={0}
            selectedItem={selectedCharacter}
            emptyMessage="No characters match the selected filters"
          />
          <button className="spin-button" onClick={spinWheel} disabled={filteredCharacters.length === 0}>
            {filteredCharacters.length === 0 ? 'No Characters Available' : 'Spin the Wheel!'}
          </button>
        </div>
      </div>

      {showPopup && selectedCharacter && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              ×
            </button>
            <h2>🎉 Selected Character!</h2>
            <div className="character-info">
              <h3>{selectedCharacter.name}</h3>
              <div className="character-details">
                <span className="badge element-badge">{selectedCharacter.element}</span>
                <span className="badge weapon-badge">{selectedCharacter.weapon_type}</span>
                <span className="badge nation-badge">{selectedCharacter.nation}</span>
                <span className="badge rarity-badge">{'⭐'.repeat(selectedCharacter.rarity)}</span>
                {selectedCharacter.class && selectedCharacter.class.length > 0 && (
                  selectedCharacter.class.map((cls, index) => (
                    <span key={index} className="badge class-badge">{cls}</span>
                  ))
                )}
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

export default CharacterRoulette

