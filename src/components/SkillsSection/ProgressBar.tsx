import { useState, useEffect } from 'react'

function ProgressBar({ 
  skillName = 'HTML', 
  percentage = 95, 
  color = '#00c0ff'
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`progress-${skillName}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [skillName])

  return (
    <div 
      id={`progress-${skillName}`}
      className='w-full max-w-md h-auto'
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : 20}px)`,
        transition: 'opacity 0.5s ease, transform 0.5s ease'
      }}
    >
      <div className='progressBar p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10'>
        <div className='flex justify-between items-center mb-3'>
          <span className='text-white font-semibold text-lg tracking-wide'>
            {skillName}
          </span>
          <span 
            className='font-bold text-lg'
            style={{ color }}
          >
            {percentage}%
          </span>
        </div>
        
        <div className='relative w-full bg-gray-700/50 rounded-full h-3 overflow-hidden'>
          {/* Static fill */}
          <div 
            className='absolute left-0 top-0 h-full rounded-full'
            style={{ 
              width: `${percentage}%`,
              background: color
            }}
          />
        </div>

        {/* Skill level indicator */}
        <div className='flex justify-end mt-2'>
          <span className='text-xs text-gray-400'>
            {percentage >= 90 ? 'Expert' : 
             percentage >= 75 ? 'Advanced' : 
             percentage >= 60 ? 'Intermediate' : 'Beginner'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
