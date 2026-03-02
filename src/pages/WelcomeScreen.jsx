import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

function WelcomeScreen() {
  const [userName, setUserName] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('teyvat-roulette-visited')
    
    if (!hasVisited) {
      // Initial entrance animation
      setIsAnimating(true)
      setTimeout(() => {
        setShowContent(true)
        setIsAnimating(false)
      }, 500)
    } else {
      // Smooth fade in for returning users
      setShowContent(true)
    }
  }, [])

  const handleNameSubmit = (e) => {
    e.preventDefault()
    const trimmedName = userName.trim()
    
    console.log('Name submitted:', trimmedName)
    
    if (trimmedName) {
      // Save name to localStorage
      localStorage.setItem('teyvat-roulette-user', trimmedName)
      localStorage.setItem('teyvat-roulette-visited', 'true')
      
      console.log('Saving name and navigating...')
      
      // Animate transition to main app
      setIsAnimating(true)
      setTimeout(() => {
        navigate('/')
      }, 300)
    } else {
      console.log('Name is empty, not submitting')
    }
  }

  const handleSkip = () => {
    localStorage.setItem('teyvat-roulette-visited', 'true')
    setIsAnimating(true)
    setTimeout(() => {
      navigate('/')
    }, 300)
  }

  if (!showContent) {
    return (
      <div className="welcome-screen">
        <div className="welcome-overlay"></div>
      </div>
    )
  }

  return (
    <div className={`welcome-screen ${isAnimating ? 'animating' : ''}`}>
      <div className="welcome-overlay"></div>
      
      <div className="welcome-content">
        <div className="welcome-header">
          <h1 className="welcome-title">
            <span className="welcome-icon">🎰</span>
            Teyvat Roulette
          </h1>
          <p className="welcome-subtitle">
            Welcome, Traveler
          </p>
        </div>

        <div className="welcome-form">
          <h2 className="form-title">
            Enter your name to begin
          </h2>
          
          <form onSubmit={handleNameSubmit} className="name-form">
            <div className="input-group">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Your name..."
                className="name-input"
                maxLength={20}
                autoFocus
              />
              <button 
                type="submit" 
                disabled={!userName.trim()}
                className="submit-button"
              >
                Begin Journey
              </button>
            </div>
          </form>

          <div className="welcome-actions">
            <button onClick={handleSkip} className="skip-button">
              Continue as Guest
            </button>
          </div>
        </div>

        <div className="welcome-features">
          <div className="feature-item">
            <span className="feature-icon">🎯</span>
            <span className="feature-text">Random Selection</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎨</span>
            <span className="feature-text">Beautiful Design</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⚙️</span>
            <span className="feature-text">Custom Settings</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeScreen
