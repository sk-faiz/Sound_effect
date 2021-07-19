class Beat {
    constructor (audioSRC) {
       this.beat = new Audio(audioSRC);
    }
    play = () => {
        this.beat.currentTime = 0;
        this.beat.play();
    }
}

class Button {
    constructor(color, keyCode){
        this.color = color;
        this.keycode = keyCode;
        this.element = document.getElementById(`${keyCode}`);
        this.setButtonColorInHTML();
    }
    
    setButtonTransition = () => {
        this.element.addEventListener('transitionend', () => {
            this.deselect();
        });
    }

    setButtonColorInHTML = () => {
        let btn_color = document.getElementById(this.keycode);
        btn_color.style.borderColor = this.color;
    }

    createTransitionEndListener = () => {
        let btn_trans = document.getElementById(this.keycode);
    }

    select = () => {
        let bg_color = document.getElementById(this.keycode);
        bg_color.style.boxShadow = `0px 0px 17px 0px ${this.color}`
        bg_color.style.backgroundColor = this.color;
    }

    deselect = () => {
        let bg_color = document.getElementById(this.keycode);
        bg_color.style.borderColor = this.color;
        bg_color.style.backgroundColor = "transparent"
        bg_color.style.boxShadow = ""
    }

}