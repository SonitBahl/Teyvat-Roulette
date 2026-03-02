import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import CharacterRoulette from './pages/CharacterRoulette'
import BossesPage from './pages/BossesPage'
import CollagePage from './pages/CollagePage'
import CustomWheel from './pages/CustomWheel'
import NumberWheel from './pages/NumberWheel'
import Settings from './pages/Settings'
import { SettingsProvider } from './contexts/SettingsContext'

function App() {
  return (
    <SettingsProvider>
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
            <NavLink to="/collage" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Memories
            </NavLink>
            <NavLink to="/custom" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Custom Wheel
            </NavLink>
            <NavLink to="/numbers" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Number Wheel
            </NavLink>
            <NavLink to="/settings" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Settings
            </NavLink>
          </nav>
        </header>
        <main className="page-content">
          <Routes>
            <Route path="/" element={<CharacterRoulette />} />
            <Route path="/bosses" element={<BossesPage />} />
            <Route path="/collage" element={<CollagePage />} />
            <Route path="/custom" element={<CustomWheel />} />
            <Route path="/numbers" element={<NumberWheel />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </SettingsProvider>
  )
}

export default App
