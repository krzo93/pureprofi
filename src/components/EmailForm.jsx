import { useState, useRef, useEffect } from 'react'
import '@material/web/textfield/outlined-text-field.js'
import '@material/web/button/filled-button.js'

export default function EmailForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const fieldRef = useRef(null)

  useEffect(() => {
    const field = fieldRef.current
    if (!field) return

    const handleInput = (e) => {
      setEmail(e.target.value)
      setError('')
    }

    field.addEventListener('input', handleInput)
    return () => field.removeEventListener('input', handleInput)
  }, [])

  function validate(val) {
    if (!val.trim()) return 'Vnesite e-poštni naslov.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Vnesite veljaven e-poštni naslov.'
    return ''
  }

  function handleSubmit(e) {
    e.preventDefault()
    const err = validate(email)
    if (err) { setError(err); return }

    setLoading(true)
    // Simulate async submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 animate-fadeInUp">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-gray-700 font-medium">Hvala! Obvestili vas bomo ob zagonu.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3">
      <div className="flex-1 flex flex-col gap-1">
        <md-outlined-text-field
          ref={fieldRef}
          type="email"
          label="Vaš e-poštni naslov"
          value={email}
          error={!!error}
          error-text={error}
          supporting-text={error}
          style={{ width: '100%' }}
        />
      </div>
      <md-filled-button
        type="submit"
        disabled={loading}
        style={{ height: '56px', minWidth: '140px', flexShrink: 0 }}
      >
        {loading ? 'Pošiljam...' : 'Obvesti me'}
      </md-filled-button>
    </form>
  )
}
