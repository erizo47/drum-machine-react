

export function Display ({power, display}) {

    return (
        <div className='display-container'>
            <div className={`display ${power ? 'on' : 'off'}`} >
              <p id='display'>{power ? display : ""}</p>
            </div>
          </div>
    )
}