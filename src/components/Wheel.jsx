import '../App.css'

function Wheel({ items, isSpinning, rotation, selectedItem, emptyMessage = 'No options available' }) {
  if (!items.length) {
    return (
      <div className="wheel empty-wheel">
        <p>{emptyMessage}</p>
      </div>
    )
  }

  const anglePerItem = 360 / items.length

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
        {items.map((item, index) => {
          const startAngle = index * anglePerItem - 90
          const endAngle = (index + 1) * anglePerItem - 90
          const largeArc = anglePerItem > 180 ? 1 : 0

          const startX = 300 + 290 * Math.cos((startAngle * Math.PI) / 180)
          const startY = 300 + 290 * Math.sin((startAngle * Math.PI) / 180)
          const endX = 300 + 290 * Math.cos((endAngle * Math.PI) / 180)
          const endY = 300 + 290 * Math.sin((endAngle * Math.PI) / 180)

          const isSelected = selectedItem && selectedItem.name === item.name

          return (
            <g key={item.name}>
              <path
                d={`M 300 300 L ${startX} ${startY} A 290 290 0 ${largeArc} 1 ${endX} ${endY} Z`}
                fill={isSelected ? '#ff6b6b' : `hsl(${(index * 360) / items.length}, 70%, 60%)`}
                stroke="#fff"
                strokeWidth="3"
                className={isSelected ? 'selected-segment' : ''}
              />
              <text
                x={300 + 150 * Math.cos((((startAngle + endAngle) / 2) * Math.PI) / 180)}
                y={300 + 150 * Math.sin((((startAngle + endAngle) / 2) * Math.PI) / 180)}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#fff"
                fontSize={items.length > 30 ? '14' : items.length > 20 ? '16' : '18'}
                fontWeight="bold"
                className="character-name"
              >
                {item.name}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export default Wheel

