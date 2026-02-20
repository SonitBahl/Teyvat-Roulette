import { useState } from 'react'
import '../App.css'
import Wheel from '../components/Wheel'

function CustomWheel() {
  const predefinedOptions = ['Light', 'Chiko', 'Nyx', 'Lirz', 'Dango', 'Mal', 'Mocca', 'Aren']
  
  const [selectedOptions, setSelectedOptions] = useState(
    predefinedOptions.reduce((acc, option) => {
      acc[option] = true
      return acc
    }, {})
  )
  
  const [tempPeople, setTempPeople] = useState([])
  const [newPersonInput, setNewPersonInput] = useState('')
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [showPopup, setShowPopup] = useState(false)

  const getWheelItems = () => {
    const activePredefined = predefinedOptions.filter(option => selectedOptions[option])
    return [...activePredefined, ...tempPeople]
  }

  const handleCheckboxChange = (option) => {
    setSelectedOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }))
    setSelectedPerson(null)
  }

  const addTempPerson = () => {
    const trimmedName = newPersonInput.trim()
    if (trimmedName && !tempPeople.includes(trimmedName) && !predefinedOptions.includes(trimmedName)) {
      setTempPeople(prev => [...prev, trimmedName])
      setNewPersonInput('')
      setSelectedPerson(null)
    }
  }

  const removeTempPerson = (person) => {
    setTempPeople(prev => prev.filter(p => p !== person))
    setSelectedPerson(null)
  }

  const spinWheel = () => {
    const wheelItems = getWheelItems()
    if (wheelItems.length === 0) return

    const randomIndex = Math.floor(Math.random() * wheelItems.length)
    const selected = wheelItems[randomIndex]
    setSelectedPerson(selected)
    setShowPopup(true)
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  const wheelItems = getWheelItems()
  const activeCount = wheelItems.length

  return (
    <div className="roulette-page">
      <div className="header">
        <h1>🎰 Custom Wheel</h1>
        <p>Spin the wheel to randomly select a person!</p>
      </div>

      <div className="main-content">
        <div className="custom-wheel-controls">
          <div className="predefined-options">
            <h3>Select People for Wheel:</h3>
            <div className="checkbox-group">
              {predefinedOptions.map(option => (
                <label key={option} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedOptions[option]}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="temp-people-section">
            <h3>Add Temporary People:</h3>
            <div className="add-person-form">
              <input
                type="text"
                value={newPersonInput}
                onChange={(e) => setNewPersonInput(e.target.value)}
                placeholder="Enter name..."
                onKeyPress={(e) => e.key === 'Enter' && addTempPerson()}
              />
              <button onClick={addTempPerson}>Add</button>
            </div>
            
            {tempPeople.length > 0 && (
              <div className="temp-people-list">
                <h4>Temporary People:</h4>
                {tempPeople.map(person => (
                  <div key={person} className="temp-person-item">
                    <span>{person}</span>
                    <button 
                      className="remove-btn"
                      onClick={() => removeTempPerson(person)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="wheel-status">
            <strong>{activeCount}</strong> person{activeCount !== 1 ? 's' : ''} in wheel
          </div>
        </div>

        <div className="wheel-container">
          <Wheel
            items={wheelItems.map(name => ({ name }))}
            isSpinning={false}
            rotation={0}
            selectedItem={selectedPerson ? { name: selectedPerson } : null}
            emptyMessage="No people selected for the wheel"
          />
          <button className="spin-button" onClick={spinWheel} disabled={activeCount === 0}>
            {activeCount === 0 ? 'No People Available' : 'Spin the Wheel!'}
          </button>
        </div>
      </div>

      {showPopup && selectedPerson && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              ×
            </button>
            <h2>🎉 Selected Person!</h2>
            <div className="character-info">
              <h3>{selectedPerson}</h3>
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

export default CustomWheel
