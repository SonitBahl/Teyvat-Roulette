import { useState, useMemo } from 'react'
import './App.css'
import charactersData from '../data/list.json'

function App() {
  const [characters, setCharacters] = useState(charactersData)
  const [filters, setFilters] = useState({
    weapon_type: [],
    element: [],
    nation: [],
    rarity: []
  })
  const [isSpinning, setIsSpinning] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [wheelRotation, setWheelRotation] = useState(0)
  const [showFilters, setShowFilters] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  // Get unique values for filter options
  const weaponTypes = useMemo(() => [...new Set(characters.map(c => c.weapon_type))].sort(), [characters])
  const elements = useMemo(() => [...new Set(characters.map(c => c.element))].sort(), [characters])
  const nations = useMemo(() => [...new Set(characters.map(c => c.nation))].sort(), [characters])
  const rarities = useMemo(() => [...new Set(characters.map(c => c.rarity))].sort((a, b) => b - a), [characters])

  // Filter characters based on selected filters
  const filteredCharacters = useMemo(() => {
    return characters.filter(char => {
      if (filters.weapon_type.length > 0 && !filters.weapon_type.includes(char.weapon_type)) return false
      if (filters.element.length > 0 && !filters.element.includes(char.element)) return false
      if (filters.nation.length > 0 && !filters.nation.includes(char.nation)) return false
      if (filters.rarity.length > 0 && !filters.rarity.includes(char.rarity)) return false
      return true
    })
  }, [characters, filters])

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      const currentArray = prev[filterType]
      const isSelected = currentArray.includes(value)
      
      return {
        ...prev,
        [filterType]: isSelected
          ? currentArray.filter(item => item !== value)
          : [...currentArray, value]
      }
    })
    setSelectedCharacter(null)
  }

  const clearFilters = () => {
    setFilters({
      weapon_type: [],
      element: [],
      nation: [],
      rarity: []
    })
    setSelectedCharacter(null)
  }

  const spinWheel = () => {
    if (filteredCharacters.length === 0 || isSpinning) return
    
    setIsSpinning(true)
    setSelectedCharacter(null)
    setShowPopup(false)
    
    // Random rotation (multiple full rotations + random angle)
    const randomRotation = wheelRotation + 360 * (5 + Math.random() * 5) + Math.random() * 360
    setWheelRotation(randomRotation)
    
    // Select random character after animation
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * filteredCharacters.length)
      setSelectedCharacter(filteredCharacters[randomIndex])
      setIsSpinning(false)
      setShowPopup(true)
    }, 3000) // Match animation duration
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  const activeFiltersCount = Object.values(filters).reduce((sum, arr) => sum + arr.length, 0)

  return (
    <div className="app">
      <div className="header">
        <h1>🎰 Teyvat Character Roulette</h1>
        <p>Spin the wheel to randomly select a character!</p>
        <button 
          className="toggle-filters-btn"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? '▼ Hide Filters' : '▶ Show Filters'}
          {activeFiltersCount > 0 && <span className="filter-badge">{activeFiltersCount}</span>}
        </button>
      </div>

      <div className="main-content">
        {showFilters && (
          <div className="filters-panel">
            <div className="filters-header">
              <h2>Filters</h2>
              {activeFiltersCount > 0 && (
                <button className="clear-filters-btn" onClick={clearFilters}>
                  Clear All ({activeFiltersCount})
                </button>
              )}
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

            <div className="character-count">
              <strong>{filteredCharacters.length}</strong> character{filteredCharacters.length !== 1 ? 's' : ''} available
            </div>
          </div>
        )}

        <div className="wheel-container">
          <Wheel
            characters={filteredCharacters}
            isSpinning={isSpinning}
            rotation={wheelRotation}
            selectedCharacter={selectedCharacter}
          />
          <button
            className="spin-button"
            onClick={spinWheel}
            disabled={filteredCharacters.length === 0 || isSpinning}
          >
            {isSpinning ? 'Spinning...' : filteredCharacters.length === 0 ? 'No Characters Available' : 'Spin the Wheel!'}
          </button>
        </div>
      </div>

      {showPopup && selectedCharacter && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>×</button>
            <h2>🎉 Selected Character!</h2>
            <div className="character-info">
              <h3>{selectedCharacter.name}</h3>
              <div className="character-details">
                <span className="badge element-badge">{selectedCharacter.element}</span>
                <span className="badge weapon-badge">{selectedCharacter.weapon_type}</span>
                <span className="badge nation-badge">{selectedCharacter.nation}</span>
                <span className="badge rarity-badge">{'⭐'.repeat(selectedCharacter.rarity)}</span>
              </div>
            </div>
            <button className="popup-close-btn" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

function Wheel({ characters, isSpinning, rotation, selectedCharacter }) {
  if (characters.length === 0) {
    return (
      <div className="wheel empty-wheel">
        <p>No characters match the selected filters</p>
      </div>
    )
  }

  const anglePerCharacter = 360 / characters.length

  return (
    <div className="wheel-wrapper">
      <div className="wheel-pointer"></div>
      <svg
        className={`wheel ${isSpinning ? 'spinning' : ''}`}
        viewBox="0 0 600 600"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning ? 'transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none'
        }}
      >
        <circle cx="300" cy="300" r="290" fill="none" stroke="#333" strokeWidth="3" />
        {characters.map((character, index) => {
          const startAngle = index * anglePerCharacter - 90
          const endAngle = (index + 1) * anglePerCharacter - 90
          const largeArc = anglePerCharacter > 180 ? 1 : 0

          const startX = 300 + 290 * Math.cos((startAngle * Math.PI) / 180)
          const startY = 300 + 290 * Math.sin((startAngle * Math.PI) / 180)
          const endX = 300 + 290 * Math.cos((endAngle * Math.PI) / 180)
          const endY = 300 + 290 * Math.sin((endAngle * Math.PI) / 180)

          const isSelected = selectedCharacter && selectedCharacter.name === character.name

          return (
            <g key={character.name}>
              <path
                d={`M 300 300 L ${startX} ${startY} A 290 290 0 ${largeArc} 1 ${endX} ${endY} Z`}
                fill={isSelected ? '#ff6b6b' : `hsl(${(index * 360) / characters.length}, 70%, 60%)`}
                stroke="#fff"
                strokeWidth="3"
                className={isSelected ? 'selected-segment' : ''}
              />
              <text
                x={300 + 150 * Math.cos(((startAngle + endAngle) / 2 * Math.PI) / 180)}
                y={300 + 150 * Math.sin(((startAngle + endAngle) / 2 * Math.PI) / 180)}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#fff"
                fontSize="18"
                fontWeight="bold"
                className="character-name"
              >
                {character.name}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export default App
