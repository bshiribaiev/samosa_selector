import './App.css';
import samosaImage from './assets/samosa.webp';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => {
    setCount(count + multiplier);
  }

  const doubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2)
      setCount(count - 10)
    } 
  }

  const partyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5)
      setCount(count - 100)
    }
  }

  const fullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10)
      setCount(count - 1000)
  }
  }
  return (
    <> 
      <div className="App">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src={samosaImage} onClick={updateCount}/> 

        <div className='container'>

          <div className='upgrade'> 
            <h3>Double Stuffed</h3>
            <p>2x per click</p>
            <button onClick={doubleStuffed}>10 samosas</button>
          </div>

          <div className='upgrade'> 
            <h3>Party pack</h3>
            <p>5x per click</p>
            <button onClick={partyPack}>100 samosas</button>
          </div>

          <div className='upgrade'> 
            <h3>Full feast</h3>
            <p>10x per click</p>
            <button onClick={fullFeast}>1000 samosas</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App