import { useEffect, useMemo, useState } from 'react'
import '../App.css'

// Import all images placed under src/assets/images
const imageModules = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp,avif,gif}', { eager: true })

const allImages = Object.values(imageModules)
  .map(mod => mod?.default)
  .filter(Boolean)

// Fixed bento-like slot layout (4 rows x 6 cols feel) for a balanced collage
const SLOT_LAYOUT = [
  { col: '1 / span 2', row: '1 / span 1' },
  { col: '3 / span 1', row: '1 / span 2' },
  { col: '4 / span 2', row: '1 / span 1' },
  { col: '6 / span 1', row: '1 / span 2' },
  { col: '1 / span 1', row: '2 / span 2' },
  { col: '2 / span 1', row: '2 / span 1' },
  { col: '4 / span 1', row: '2 / span 2' },
  { col: '5 / span 1', row: '2 / span 1' },
  { col: '2 / span 1', row: '3 / span 1' },
  { col: '3 / span 1', row: '3 / span 1' },
  { col: '5 / span 2', row: '3 / span 1' },
  { col: '1 / span 2', row: '4 / span 1' },
  { col: '3 / span 1', row: '4 / span 1' },
  { col: '4 / span 2', row: '4 / span 1' },
  { col: '6 / span 1', row: '4 / span 1' }
]

function CollagePage() {
  const [tiles, setTiles] = useState([])

  // Stable list of image URLs
  const images = useMemo(() => allImages, [])

  // Build tiles mapped to the slot layout
  const buildTiles = () => {
    if (!images.length) return []
    const shuffled = [...images].sort(() => Math.random() - 0.5)
    const slots = SLOT_LAYOUT.slice(0, Math.min(SLOT_LAYOUT.length, shuffled.length))
    return slots.map((slot, idx) => ({
      src: shuffled[idx % shuffled.length],
      key: `${slot.col}-${slot.row}-${Date.now()}-${idx}`,
      style: { gridColumn: slot.col, gridRow: slot.row }
    }))
  }

  useEffect(() => {
    setTiles(buildTiles())

    const interval = setInterval(() => {
      setTiles(buildTiles())
    }, 4000)

    return () => clearInterval(interval)
  }, [images])

  return (
    <div className="collage-page">

      {!images.length && (
        <div className="collage-empty">
          <p>No images found in <code>src/assets/images</code>. Add some .png/.jpg/.webp files to see the collage.</p>
        </div>
      )}

      {images.length > 0 && (
        <div className="collage-box">
          {tiles.map(tile => (
            <div key={tile.key} className="collage-tile" style={tile.style}>
              <img src={tile.src} alt="Collage item" loading="lazy" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CollagePage

