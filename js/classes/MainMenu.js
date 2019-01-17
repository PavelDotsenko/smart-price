class MainMenu {
    constructor(conteiner, base, style) {
        this.cont = document.querySelector(conteiner);
        this.base = base
        this.elements = []
        this.el_style = style
        this.clear()
        this.createMenuElems(this.cont, this.base)
    }

    createMenuElems() {
        for (let i = 0; i < this.base.length; i++) {
            let elem  = document.createElement('button'),
                style = this.el_style,
                data  = this.base[i];

            this.setStyle(elem)
            if (data.icon) elem.innerHTML += `<span class="icon">${data.icon}</span>`
            if (data.label) elem.innerHTML += `<label>${locale.get(data.label)}</label>`
            if (data.desc) elem.title = locale.get(data.desc)

            elem.onclick = function () {
                let items = this.parentNode.querySelectorAll('button');

                for (let i = 0; i < items.length; i++) { items[i].classList.remove('active') }

                this.classList.add('active')
                new MainContent('.main-conteint', data.name)
            }

            this.elements.push(elem)
            this.cont.appendChild(elem)
        }
    }

    setStyle(item) {
        if (this.el_style) {
            if (typeof name == 'string') item.classList.add(name)
            else if (typeof name == 'object') {
                for (let i = 0; i < name.length; i++) {
                    item.classList.add(name[i])
                }
            }
        }
    }

    getElements() { return this.elements }
    clear() { this.cont.innerHTML = '' }
}