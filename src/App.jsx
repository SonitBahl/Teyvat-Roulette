import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import BossesPage from './pages/BossesPage'
import CharacterRoulette from './pages/CharacterRoulette'

function App() {
  return (
    <div className="app-shell">
      <header className="site-hero">
        <h1>Teyvat Companion Hub</h1>
        <p>Spin for heroes or browse every boss across the regions of Teyvat.</p>
        <nav className="site-nav">
          <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Character Roulette
          </NavLink>
          <NavLink to="/bosses" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Boss Directory
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
