import { useState } from 'react';
import './App.css';
import { ControlBtns } from './components/controls-btns';
import { Display } from './components/display';
import { DrumPad } from './components/drum-pad';
import { soundbanks } from './data/sounds';

function App() {
 
  const [power, setPower] = useState(true)
  const [bank, setBank] = useState(soundbanks('Bank 1'))
  const [volume, setVolume] = useState(0.5)
  const [display, setDisplay] = useState('Ready...')

  const changeSample = (sampleData) => {
    changeDisplay(sampleData.name)
  }

  const changeVolume = (volume) => {
    setVolume(volume)
    changeDisplay(`Volume: ${Math.floor(volume*100)}%`)
  }

  const changeBank = (val) => {
    setBank(soundbanks(val))
    changeDisplay(val)
  }

  const changePower = (val) => {
    setPower(val)
    changeDisplay('Ready...')
  }

  const changeDisplay = (val) => {
    setDisplay(val)
  }


  return (
    <div className="App">
      <main className='drum-machine' id='drum-machine'>

        <div className='pad-bank'>
          {bank.map((sampleData) => {
            return (
              <DrumPad 
                power={power}
                volume={volume}
                key={sampleData.name}
                sampleData={sampleData}
                changeSample={changeSample}
              />
            )
          })}
        </div>

        <div className='controls'>
          <Display power={power} display={display} />
          
            <ControlBtns  
            changeVolume={changeVolume} 
            changeBank={changeBank} 
            changePower={changePower} 
            power={power}
            />
            
          
        </div>
      </main>
      <footer>
        <a href="https://github.com/erizo47" target="_blank" rel="noreferrer">by Artem Ilinov</a>
      </footer>
    </div>
  );
}

export default App;
