import { useState } from 'react'
import '../App.css'
import Wheel from '../components/Wheel'
import { useSettings } from '../contexts/SettingsContext'

function NumberWheel() {
  const [maxCount, setMaxCount] = useState(15)
  const [selectedNumber, setSelectedNumber] = useState(null)
  const [showPopup, setShowPopup] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const { settings } = useSettings()

  const getWheelItems = () => {
    return Array.from({ length: maxCount }, (_, i) => ({ name: (i + 1).toString() }))
  }

  const updateCount = (delta) => {
    const newCount = maxCount + delta
    if (newCount >= 1) {
      setMaxCount(newCount)
      setSelectedNumber(null)
      setHighlightedIndex(-1)
    }
  }

  const spinWheel = () => {
    const wheelItems = getWheelItems()
    if (wheelItems.length === 0 || isSpinning) return

    const finalIndex = Math.floor(Math.random() * wheelItems.length)
    const selected = wheelItems[finalIndex]

    if (settings.wheelAnimation) {
      // Sequential highlighting animation
      setIsSpinning(true)
      setHighlightedIndex(-1) // Reset highlight
      
      // Calculate animation sequence for 5-second duration
      const totalDuration = 5000 // 5 seconds total
      let currentIndex = 0
      let elapsed = 0
      let currentDelay = 30 // Start very fast
      
      const animateNext = () => {
        if (elapsed >= totalDuration) {
          // Final stop on selected number
          setHighlightedIndex(finalIndex)
          setTimeout(() => {
            setIsSpinning(false)
            setSelectedNumber(selected.name)
            setShowPopup(true)
          }, 500)
          return
        }
        
        // Move to next index
        currentIndex = (currentIndex + 1) % wheelItems.length
        
        // Calculate progress for easing
        const progress = elapsed / totalDuration
        const easeOutProgress = 1 - Math.pow(1 - progress, 3) // Cubic ease-out
        
        // Dramatic slowdown: start at 30ms, end at ~600ms
        currentDelay = 30 + (570 * easeOutProgress)
        
        setHighlightedIndex(currentIndex)
        elapsed += currentDelay
        
        setTimeout(animateNext, currentDelay)
      }
      
      // Start animation
      setTimeout(animateNext, 100)
    } else {
      // Instant selection without animation
      setSelectedNumber(selected.name)
      setShowPopup(true)
    }
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  const wheelItems = getWheelItems()

  return (
    <div className="roulette-page">
      <div className="header">
        <h1>🔢 Number Wheel</h1>
        <p>Spin the wheel to randomly select a number!</p>
      </div>

      <div className="main-content">
        <div className="wheel-container">
          <Wheel
            items={wheelItems}
            isSpinning={isSpinning}
            highlightedIndex={highlightedIndex}
            selectedItem={selectedNumber ? { name: selectedNumber } : null}
            emptyMessage="No numbers available"
          />
          <button className="spin-button" onClick={spinWheel} disabled={wheelItems.length === 0 || isSpinning}>
            {isSpinning ? 'Spinning...' : wheelItems.length === 0 ? 'No Numbers Available' : 'Spin the Number Wheel!'}
          </button>
        </div>

        <div className="number-controls">
          <div className="control-group decrease-controls">
            <button onClick={() => updateCount(-1)} disabled={maxCount <= 1}>-1</button>
            <button onClick={() => updateCount(-5)} disabled={maxCount <= 5}>-5</button>
            <button onClick={() => updateCount(-10)} disabled={maxCount <= 10}>-10</button>
          </div>
          
          <div className="control-group center-display">
            <span className="max-count-display">Max Count: {maxCount}</span>
          </div>
          
          <div className="control-group increase-controls">
            <button onClick={() => updateCount(1)}>+1</button>
            <button onClick={() => updateCount(5)}>+5</button>
            <button onClick={() => updateCount(10)}>+10</button>
          </div>
        </div>
      </div>

      {showPopup && selectedNumber && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              ×
            </button>
            <h2>🎯 Selected Number!</h2>
            <div className="character-info">
              <h3>{selectedNumber}</h3>
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

export default NumberWheel
