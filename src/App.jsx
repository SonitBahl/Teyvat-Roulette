import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import CharacterRoulette from './pages/CharacterRoulette'
import BossesPage from './pages/BossesPage'

function App() {
  return (
    <div className="app-shell">
      <header className="site-hero">
        <h1>🎰 Teyvat Roulette</h1>
        <p>Random character and boss selectors for Genshin Impact</p>
        <nav className="site-nav">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Characters
          </NavLink>
          <NavLink to="/bosses" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Bosses
          </NavLink>
        </nav>
      </header>
      <main className="page-content">
        <Routes>
          <Route path="/" element={<CharacterRoulette />} />
          <Route path="/bosses" element={<BossesPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
