import { useState } from 'react'
import './App.css'
import Podium1 from './components/Podium1'
import Podium2 from './components/Podium2'

function App() {

  const [switchPodium, setSwitchPodium] = useState(true)

  return(
    <>
        { switchPodium ? <Podium1/> : <Podium2/> }

        <button onClick={() => setSwitchPodium(!switchPodium)} className='w-full p-4 absolute left-0 bottom-0 bg-sky-500 font-bold'>
          Voir podium { switchPodium ? '2' : '1' } 
        </button>
    </>
  )
}

export default App
