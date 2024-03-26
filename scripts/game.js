import { createLetter } from "./dom.js"

export class Game {
    text
    timestart
    timeend
    wordscount
    letterscount
    letters
    lettersDom
    wpm
    errors
    percentok
    indicator
    points

    constructor(text) {
        this.text = text
        this.letters = text.split('')
        this.letterscount = this.letters.length
        this.wordscount = text.split(' ').length
        this.indicator = 0
        this.errors = 0

        this.clean()
        this.drawViewInterface()
        this.addListeners()
    }

    clean() {
        document.querySelector('body > span').innerHTML = ''
    }

    drawViewInterface() {
        document.querySelector('body > span').append(
            ...(this.letters.map(letter => createLetter(letter)))
        )
        this.lettersDom = document.querySelectorAll('body > span > div')
    }

    microtime(start, end) {
        return (end - start) / 60000
    }
    
    renderInfo() {
        const dialog = document.querySelector('dialog')
        dialog.querySelector('div > span:first-child > b').innerText = this.wpm
        dialog.querySelector('div > span:nth-child(2) > b').innerText = this.percentok
        dialog.querySelector('div > span:nth-child(3) > b').innerText = this.points
        dialog.show()
    }
    
    calc() {
        this.wpm = Math.round( this.wordscount / this.microtime(this.timestart, this.timeend) )
        this.percentok = Math.round( (this.letterscount - this.errors)  / this.letterscount * 100 )
        this.points = Math.round((this.wpm * 2 + this.percentok * 10) / 2)
    }

    addListeners() {
        document.addEventListener('keypress', (evt) => {
            const currentLetter = this.letters[this.indicator]
            const domCurrentLetter = this.lettersDom[this.indicator]
            const nextDomLetter = this.lettersDom[this.indicator + 1] ?? undefined

            if (nextDomLetter) {
                nextDomLetter.setAttribute('indicator', true)
            }

            if (this.indicator == 0)
                this.timestart = new Date()

            if (currentLetter == evt.key) {
                domCurrentLetter.setSuccess()
            } else {
                this.errors++
                domCurrentLetter.setError()
            }

            if (this.indicator == this.letters.length - 1) {
                this.timeend = new Date()
                this.calc()
                this.renderInfo()
            }

            this.indicator++
        })
    }

}
