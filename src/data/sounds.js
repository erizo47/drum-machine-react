const bank2 = 'Bank 2';
const bank1 = 'Bank 1';

export function soundbanks (selection) {
    selection === 'Bank 1' ? (selection = bank1) : (selection = bank2);
    return [
        {
            name: selection === bank1 ? "Piano Chord 1" : "Heater 1",
            keyCode: 81,
            trigger: "Q",
            url: 
                selection === bank1
                ? "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
                : "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        }, {
            name: selection === bank1 ? "Piano Chord 2" : "Heater 2",
            keyCode: 87,
            trigger: "W",
            url:
              selection === bank1
                ? "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
                : "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          },
          {
            name: selection === bank1 ? "Piano Chord 3" : "Heater 3",
            keyCode: 69,
            trigger: "E",
            url:
              selection === bank1
                ? "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
                : "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          },
          {
            name: selection === bank1 ? "Cabasa" : "Heater 4",
            keyCode: 65,
            trigger: "A",
            url:
              selection === bank1
                ? "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
                : "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          },
          {
            keyCode: 83,
            name: selection === bank1 ? "Open Hat" : "Clap",
            trigger: "S",
            url:
              selection === bank1
                ? "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
                : "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          },
          {
            keyCode: 68,
            name: selection === bank1 ? "Closed Hat" : "Open Hat 2",
            trigger: "D",
            url:
              selection === bank1
                ? "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
                : "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          },
          {
            name: selection === bank1 ? "Kick Drum" : "Kick w. Hat",
            keyCode: 90,
            trigger: "Z",
            url:
              selection === bank1
                ? "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
                : "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          },
          {
            keyCode: 88,
            name: selection === bank1 ? "Rimshot" : "Kick Drum 2",
            trigger: "X",
            url:
              selection === bank1
                ? "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
                : "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          },
          {
            keyCode: 67,
            name: selection === bank1 ? "Snare Drum" : "Closed Hat 2",
            trigger: "C",
            url:
              selection === bank1
                ? "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
                : "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          }
    ]
}