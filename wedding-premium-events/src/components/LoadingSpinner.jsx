import React from 'react'
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <div className="relative h-14 w-14 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full border-3 border-t-transparent animate-spin"
            style={{ borderColor: 'var(--crimson) transparent transparent transparent', borderWidth: 3 }} />
          <div className="absolute inset-2 rounded-full border-2 border-b-transparent animate-spin"
            style={{ borderColor: 'transparent transparent var(--gold) transparent', animationDirection: 'reverse', borderWidth: 2, animationDuration: '0.8s' }} />
        </div>
        <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--gold)' }}>Loading...</p>
      </div>
    </div>
  )
}
export default LoadingSpinner
