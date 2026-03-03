import { useState } from 'react'
import '../App.css'

function StickerDisplay({ sticker, onClose }) {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  if (!isVisible) return null

  return (
    <div className="sticker-display">
      <button className="close-sticker" onClick={handleClose}>
        ×
      </button>
      <h4>Yoimiya Sticker!</h4>
      <img src={`/stickers/${sticker}`} alt="Yoimiya sticker" />
    </div>
  )
}

export default StickerDisplay
