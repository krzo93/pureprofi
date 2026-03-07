import { useEffect, useRef } from 'react'

const DOT_COUNT = 60

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

export default function FloatingDots() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let width, height

    const dots = []

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    function createDots() {
      dots.length = 0
      for (let i = 0; i < DOT_COUNT; i++) {
        dots.push({
          x: randomBetween(0, width),
          y: randomBetween(0, height),
          r: randomBetween(1.5, 4),
          vx: randomBetween(-0.3, 0.3),
          vy: randomBetween(-0.4, -0.1),
          opacity: randomBetween(0.15, 0.55),
          color: ['#1A73E8', '#4285F4', '#34A853', '#FBBC04'][Math.floor(Math.random() * 4)],
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      for (const d of dots) {
        // Draw connection lines between nearby dots
        for (const other of dots) {
          const dx = d.x - other.x
          const dy = d.y - other.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120 && dist > 0) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(66, 133, 244, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.8
            ctx.moveTo(d.x, d.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }
      }

      for (const d of dots) {
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = d.color + Math.round(d.opacity * 255).toString(16).padStart(2, '0')
        ctx.fill()

        // Update position
        d.x += d.vx
        d.y += d.vy

        // Wrap around
        if (d.y < -10) d.y = height + 10
        if (d.x < -10) d.x = width + 10
        if (d.x > width + 10) d.x = -10
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    createDots()
    draw()

    window.addEventListener('resize', () => {
      resize()
      createDots()
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
