import { useState } from 'react'//hooks use state is responsible for  
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./components/Card'

function App() {
  let [counter,countervalue]=useState(0)//setcounter is a func

  const addValue=()=>{



if(counter<20){
  countervalue(counter+=1)
}
  }
  const removeValue=()=>{


    
    if(counter>0){
      countervalue(counter-=1)
    }
      }

  return (
    <div className='container'>
<h1>Counter Clock</h1>
<p>counter value={counter}</p>
<button className='button' onClick={addValue}>Add value</button>
<br/>
<button className='button'  onClick={removeValue}>Remove value</button>
    </div>
  )
}

export default App;