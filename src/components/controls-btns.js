import { useState } from "react";
import { Volume } from "./volume";


export function ControlBtns ({changeVolume, changeBank, changePower, power}) {
    
    const [bankNum, setBannkNum] = useState('1')

    const handleChangePower = () => {
        if (power) {
            changePower(false);    
        } else {
            changePower(true);
        }
    }
    const [secondBank, setsecondBank] = useState(false)

    const handleChangeBank = () => {
        if (bankNum === '1') {
            setBannkNum('2')
            setsecondBank(true)
            changeBank('Bank 2')
        } else if ( bankNum === '2') {
            setBannkNum('1')
            setsecondBank(false)
            changeBank('Bank 1')
        }
        
        
    }
    

    return (
        <div className='control-btns'>
            <div className='control-btns-tmblrs'>
            <p className="power-label">Power</p> 
              <div 
                className={power ? 'switcher power-on' : 'switcher power-off'} 
                id="board-power" 
                onClick={handleChangePower}
                >          
                  <div className="switch"></div>
              </div>
              <p>Bank {bankNum}</p>
              <div 
                className={secondBank ? 'switcher board-bank2' : 'switcher board-bank1'}
                id="board-bank"
                onClick={handleChangeBank}
                >                
                  <div className="switch"></div>
              </div>

            </div>
            
            <Volume id={'volume'} changeVolume={changeVolume} />
        </div>
    )
}
