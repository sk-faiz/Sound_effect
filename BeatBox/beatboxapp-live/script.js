let beats = {
    "65": {
        beat: new Beat("./assets/30sec-2021-05-28_-_Overcome_-_www.FesliyanStudios.com.mp3"),
        button: new Button("#00fffe", 65)
    },
    "83": {
        beat: new Beat("./assets/30sec-2020-07-23_-_Can't_Touch_Me_-_www.FesliyanStudios.com_David_Renda.mp3"),
        button: new Button("#00fffe", 83)
    },
    "68": {
        beat: new Beat("./assets/30-Seconds-2020-01-19_-_Slick_Move_-_FesliyanStudios.com_-_David_Renda.mp3"),
        button: new Button("#00fffe", 68)
    },
    "70": {
        beat: new Beat("./assets/Floor-Tom-Drum-Hit-Level-7B-www.fesliyanstudios.com.mp3"),
        button: new Button("#FF00FF", 70)
    },
    "71": {
        beat: new Beat("./assets/Snare-Drum-Hit-Level-5b-www.fesliyanstudios.com.mp3"),
        button: new Button("#FF00FF", 71)
    },
    "72": {
        beat: new Beat("./assets/Snare-Drum-Hit-Level-6a-www.fesliyanstudios.com.mp3"),
        button: new Button("#FF00FF", 72)
    },
    "74": {
        beat: new Beat("./assets/Hi-Hat-Open-Hit-C3-www.fesliyanstudios.com.mp3"),
        button: new Button("#FF00FF", 74)
    },
    "75": {
        beat: new Beat("./assets/90Speed_DunDunDunV2_From_FesliyanStudios.com.mp3"),
        button: new Button("#FFFF", 75)
    },
    "76": {
        beat: new Beat("./assets/Suspense-Heartbeat-B-www.fesliyanstudios.com-www.fesliyanstudios.com.mp3"),
        button: new Button("#FFFF", 76)
    }
}

triggerBeat = (event) => {
    let keycode = event.keyCode;
    if (keycode in beats) {
        let key = beats[keycode];
        key.beat.play();
        key.button.select();
        key.button.createTransitionEndListener();
        key.button.setButtonTransition();
    }
}

document.addEventListener('keydown', triggerBeat);