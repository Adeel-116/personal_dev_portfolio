
import ProgressBar from './ProgressBar'
import TextHeading from '../TextHeading'

function SkillSection() {
  return (
    <div className='w-full h-auto'>
         <TextHeading
          heading="Skills"
          text={
            <>
              I Work Hard to Improve My <br /> Skills Regularly
            </>
          }
        />
      

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
