export default class VideoPlayer {
    constructor(triggers, popup) {
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(popup);
        this.close = this.overlay.querySelector('.close');
    }

    play() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', ()=> {
                console.log('Hello')
            })
        }) 
    }
}