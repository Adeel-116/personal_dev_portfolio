import { useState, useEffect } from 'react'

function ProgressBar({ 
  skillName = 'HTML', 
  percentage = 95, 
  color = '#00c0ff',
  animationDelay = 0,
  showAnimation = true 
}) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Start animation after delay
            setTimeout(() => {
              if (showAnimation) {
                animateProgress()
              } else {
                setAnimatedPercentage(percentage)
              }
            }, animationDelay * 1000)
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
  }, [skillName, percentage, animationDelay, showAnimation])

  const animateProgress = () => {
    let current = 0
    const increment = percentage / 50 // 50 steps for smooth animation
    
    const timer = setInterval(() => {
      current += increment
      if (current >= percentage) {
        current = percentage
        clearInterval(timer)
      }
      setAnimatedPercentage(Math.round(current))
    }, 20) // 20ms intervals for smooth animation
  }

  return (
    <div 
      id={`progress-${skillName}`}
      className='w-full max-w-md h-auto transform transition-all duration-500 hover:scale-105'
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : 20}px)`
      }}
    >
      <div className='progressBar p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300'>
        <div className='flex justify-between items-center mb-3'>
          <span className='text-white font-semibold text-lg tracking-wide'>
            {skillName}
          </span>
          <span 
            className='font-bold text-lg'
            style={{ color }}
          >
            {animatedPercentage}%
          </span>
        </div>
        
        <div className='relative w-full bg-gray-700/50 rounded-full h-3 overflow-hidden'>
          {/* Background glow effect */}
          <div 
            className='absolute inset-0 rounded-full opacity-20'
            style={{ 
              background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
              animation: 'pulse 2s infinite'
            }}
          />
          
          {/* Progress fill */}
          <div 
            className='absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out'
            style={{ 
              width: `${animatedPercentage}%`,
              background: `linear-gradient(90deg, ${color}88, ${color})`,
              boxShadow: `0 0 10px ${color}66`
            }}
          />
          
          {/* Shine effect */}
          <div 
            className='absolute inset-0 rounded-full'
            style={{
              background: `linear-gradient(90deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)`,
              animation: isVisible ? 'shine 2s infinite' : 'none'
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
      
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}

export default ProgressBar