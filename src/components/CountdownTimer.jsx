import { useState, useEffect } from 'react'

const LAUNCH_DATE = new Date('2025-09-01T00:00:00')

function pad(n) {
  return String(n).padStart(2, '0')
}

function getTimeLeft() {
  const now = new Date()
  const diff = LAUNCH_DATE - now

  if (diff <= 0) return { dni: 0, ur: 0, minut: 0, sekund: 0 }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / 1000 / 60) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { dni: days, ur: hours, minut: minutes, sekund: seconds }
}

function TimeUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass-light rounded-2xl w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shadow-lg">
        <span className="text-3xl md:text-4xl font-bold text-gray-800 tabular-nums">
          {pad(value)}
        </span>
      </div>
      <span className="mt-2 text-xs font-medium text-gray-400 uppercase tracking-widest">
        {label}
      </span>
    </div>
  )
}

export default function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex gap-4 md:gap-6 justify-center">
      <TimeUnit value={time.dni} label="Dni" />
      <div className="flex items-center pb-7 text-2xl font-light text-gray-400">:</div>
      <TimeUnit value={time.ur} label="Ur" />
      <div className="flex items-center pb-7 text-2xl font-light text-gray-400">:</div>
      <TimeUnit value={time.minut} label="Minut" />
      <div className="flex items-center pb-7 text-2xl font-light text-gray-400">:</div>
      <TimeUnit value={time.sekund} label="Sekund" />
    </div>
  )
}
