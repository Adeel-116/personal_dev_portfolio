
import ProgressBar from './ProgressBar'

function SkillSection() {
  return (
    <div className='w-full h-auto'>
      <div className='w-full flex flex-col items-center gap-y-2'>
        <h4 className='text-[#00c0ff] text-xl font-medium'>Skills</h4>
        <h1 className='w-full text-white font-semibold text-[3rem]'>
          I Work Hard to Improve My <br /> Skills Regularly
        </h1>
      </div>

      <div className='w-full flex flex-row flex-wrap gap-10 justify-center mt-15'>
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
      </div>


    </div>
  )
}

export default SkillSection
