'use strict';

class MainMenu {
    constructor(conteiner, base) {
        this.cont = document.querySelector(conteiner);
        this.base = base
        this.cont.innerHTML = ''
        this.createMenuElem(this.cont, this.base)
    }

    createMenuElem() {
        for (let i = 0; i < this.base.length; i++) {
            new BtnMainMenu(this.cont, this.base[i], 'main-menu-btn')
        }
    }
}

class BtnMainMenu {
    constructor(parent, base, style) {
        this.parent = parent
        this.item = document.createElement('button');
        this.item.base = base
        this.setStyle(style)
        this.setContent()
        this.item.onclick = this.action
        this.parent.appendChild(this.item)
    }

    setStyle(name) {
        if (typeof name !== 'undefined') {
            if (typeof name == 'string') this.item.classList.add(name)
            else {
                for (let i = 0; i < name.length; i++) {
                    this.item.classList.add(name[i])
                }
            }
        }
    }

    setContent() {
        let elem = this.item;

        if (typeof elem.base.icon !== 'undefined') elem.innerHTML += `<span>${elem.base.icon}</span>`
        if (typeof elem.base.label !== 'undefined') elem.innerHTML += `<label>${phrase(elem.base.label)}</label>`
    }

    action() {
        let items = this.parentNode.querySelectorAll('button')
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('active')
        }

        this.classList.add('active')

        document.querySelector('.main-conteint').innerHTML += 'Говно ' + this.base.label + '\n'
    }

    getStyle() { return this.item.classList }
}