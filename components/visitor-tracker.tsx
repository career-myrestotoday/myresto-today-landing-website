"use client"

import { useEffect } from 'react'

export default function VisitorTracker() {
  useEffect(() => {
    try {
      fetch('/api/track', { method: 'POST' }).catch(() => {})
    } catch (err) {}
  }, [])

  return null
}
