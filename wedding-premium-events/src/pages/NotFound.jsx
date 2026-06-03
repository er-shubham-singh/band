import React from 'react'
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <p className="text-7xl font-bold" style={{ fontFamily: 'Playfair Display,serif', color: 'var(--crimson)' }}>404</p>
      <div className="gold-divider w-20 mx-auto my-4" />
      <h1 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display,serif', color: 'var(--maroon)' }}>Page Not Found</h1>
      <p className="mb-8 max-w-md" style={{ color: 'var(--text-mid)' }}>The page you're looking for doesn't exist or has been moved.</p>
      <a href="/" className="btn-gold">Back to Home</a>
    </div>
  )
}
export default NotFound
