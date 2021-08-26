export default class Display {
    constructor(html = '', elementId = '#content') {
        this.html = html;
        this.elementId = elementId;
    }
    show(html = null, elementId) {
        if(html === null) {
            document.querySelector(elementId).innerHTML = this.html;
        } else {
            document.querySelector(elementId).innerHTML = html;
            this.html = html;
        }
    }
    append(html, elementId) {
        document.querySelector(elementId).innerHTML += html;
    }

}