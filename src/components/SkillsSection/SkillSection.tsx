import { useState, useEffect } from 'react'
import TextHeading from '../TextHeading'

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
    const increment = percentage / 50 
    
    const timer = setInterval(() => {
      current += increment
      if (current >= percentage) {
        current = percentage
        clearInterval(timer)
      }
      setAnimatedPercentage(Math.round(current))
    }, 20) 
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
         
          
          {/* Progress fill */}
          <div 
            className='absolute left-0 top-0 h-full rounded-full transition-all duration-900 ease-out'
            style={{ 
              width: `${animatedPercentage}%`,
              background: `linear-gradient(90deg, ${color}88, ${color})`,
              boxShadow: `0 0 10px ${color}66`
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


function SkillSection() {
  // Define your skills here - easy to add/remove/modify
const skills = [
  { name: 'HTML', percentage: 95, color: '#e34c26', category: 'Frontend' },
  { name: 'CSS', percentage: 90, color: '#1572b6', category: 'Frontend' },
  { name: 'JavaScript', percentage: 90, color: '#f7df1e', category: 'Frontend' },
  { name: 'TypeScript', percentage: 82, color: '#007acc', category: 'Frontend' },
   { name: 'React', percentage: 90, color: '#61dafb', category: 'Frontend' },
    { name: 'Nextjs', percentage: 90, color: '#000000', category: 'Frontend' },

  { name: 'Node.js', percentage: 80, color: '#68a063', category: 'Backend' },
  { name: 'Express.js', percentage: 90, color: '#000000', category: 'Backend' },
  { name: 'MongoDB', percentage: 80, color: '#4db33d', category: 'Backend' },
  { name: 'MySQL', percentage: 90, color: '#00758f', category: 'Backend' },
  { name: 'Python', percentage: 60, color: '#3776ab', category: 'Backend' },

  { name: 'GitHub', percentage: 80, color: '#181717', category: 'DevOps' },
]

  return (
    <div className='w-full h-auto min-h-screen py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
      <TextHeading heading="Skills" text="I Worked Hard To Improve My Skills" />
        
        
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-15'>
          {skills.map((skill, index) => (
            <ProgressBar
              key={skill.name}
              skillName={skill.name}
              percentage={skill.percentage}
              color={skill.color}
              animationDelay={index * 0.1}
              showAnimation={true}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillSection