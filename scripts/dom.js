export const createLetter = (letter) => {
    const div = document.createElement('div')
    div.innerText = letter

    div.setSuccess = function () {
        this.setAttribute('success', true)
    }
    div.setError = function () {
        this.setAttribute('error', true)
    }
    return div
}