import { useState } from "react"

export function Volume ({changeVolume}) {

    let [value, setValue] = useState(50)
    const handleChange = (e) => {
        setValue(e.target.value)
        changeVolume(e.target.value / 100)
        console.log(value)
    }


    return (
        <div className='volume-slider'>
            <label>Volume</label>
            <input 
            onChange={handleChange}
            value={value}
            type="range" 
            min='0' 
            max='100' 
            step='1'
            id="volume"
            />            
        </div>
    )
}