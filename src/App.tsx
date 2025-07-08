import './App.css'
import ImageComponent from './components/ImageComponent'
import {useState, useEffect} from 'react'
import LoadingScreen from './components/LoadingScreen'
function App() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

  return (
    <>  
   
       {loading ? <LoadingScreen /> : <ImageComponent />}
      
    </>
  )
}



export default App
