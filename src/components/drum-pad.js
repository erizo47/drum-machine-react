import { useCallback, useEffect, useRef, useState } from "react"

export function DrumPad ({ sampleData, changeSample, volume, power }) {
    const [padActive, SetPadActive] = useState(false)
    const audio = useRef(null);
    const button = useRef(null);

    const { trigger, url, keyCode, name } = sampleData;

    const keyPress = useCallback(
      (e) => {
        if (keyCode === e.keyCode) {
          e.preventDefault();
          button.current.click();
        }
      }, [keyCode]
    )

      useEffect(() => {
        window.addEventListener('keyup', keyPress);
        return () => {
          window.removeEventListener('keyup', keyPress);
        }
      }, [keyPress]);

      const handleClick = () => {
        changeSample(sampleData)
        playSample();
      }

      const playSample = () => {
        if (!audio.paused) {
          audio.current.currentTime = 0;
          audio.current.volume = volume;
        }
        audio.current.play()
        toggleActive();
      }

      const toggleActive = () => {
        setTimeout(() => {
          SetPadActive(false)
        }, 200)
        SetPadActive(true)
      }

      

    return (
        <button
      id={name}
      className={`drum-pad ${padActive ? "active" : ""}`}
      onClick={handleClick}
      ref={button}
      disabled={!power}
    >
      <audio
        ref={audio}
        className="clip"
        id={trigger}
        src={url}
        preload="auto"
        disabled={!power}
      />
      {trigger}
    </button>
    )
}