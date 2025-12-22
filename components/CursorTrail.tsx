'use client'

import { useEffect } from 'react'

export default function CursorTrail() {
  useEffect(() => {
    const trails: HTMLDivElement[] = []
    const maxTrails = 15

    const createTriangle = (x: number, y: number) => {
      const triangle = document.createElement('div')
      triangle.className = 'cursor-trail-triangle'
      // Offset to position at the back/end of the cursor instead of the tip
      triangle.style.left = `${x + 12}px`
      triangle.style.top = `${y + 20}px`
      
      document.body.appendChild(triangle)
      trails.push(triangle)

      // Remove old trails
      if (trails.length > maxTrails) {
        const oldTrail = trails.shift()
        if (oldTrail && oldTrail.parentNode) {
          oldTrail.parentNode.removeChild(oldTrail)
        }
      }

      // Auto-remove after animation
      setTimeout(() => {
        if (triangle.parentNode) {
          triangle.parentNode.removeChild(triangle)
        }
        const index = trails.indexOf(triangle)
        if (index > -1) {
          trails.splice(index, 1)
        }
      }, 800)
    }

    let lastX = 0
    let lastY = 0
    let throttleTimer: NodeJS.Timeout | null = null

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = Math.abs(e.clientX - lastX)
      const deltaY = Math.abs(e.clientY - lastY)

      // Only create trail if mouse moved significantly
      if (deltaX > 10 || deltaY > 10) {
        if (!throttleTimer) {
          createTriangle(e.clientX, e.clientY)
          lastX = e.clientX
          lastY = e.clientY

          throttleTimer = setTimeout(() => {
            throttleTimer = null
          }, 50) // Throttle to every 50ms
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      // Clean up all trails
      trails.forEach(trail => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail)
        }
      })
      trails.length = 0
    }
  }, [])

  return null
}
