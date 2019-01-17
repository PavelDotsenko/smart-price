class PageSettings {
    constructor(conteiner, base) {
        this.cont = conteiner
        this.base = structure[base]
        this.item = document.createElement(this.base.type)
        this.item.classList.add(this.base.style)

        if (this.base.title) this.item.innerHTML += `<h1>${locale.get(this.base.title)}</h1>`
        if (this.base.components) {
            for (let i = 0; i < this.base.components.length; i++) {
                let base      = this.base.components[i],
                    cont      = this.item,
                    component = document.createElement(base.type);
                
                if (base.style) component.classList = base.style
                if (base.heading) component.innerHTML += `<h2>${locale.get(base.heading)}</h2>`
    
                if (base.content) {
                    for (let k = 0; k < base.content.length; k++) {
                        let data = base.content[i],
                            filling = document.createElement(data.type)
    
                        if (data.style) filling.classList.add(data.style)
                        if (data.label) filling.innerHTML += `<label>${locale.get(data.label)}</label>`

                        this[data.function](filling)
    
                        component.appendChild(filling)
                    }
                }
                cont.appendChild(component)
            }
        }
        this.cont.appendChild(this.item)
    }

    selectLanguage (cont) {
        const fs = require('fs');

        let langPath   = __dirname + '/locale',
            curentLang = Lockr.get('current_language');

        fs.readdir(langPath, (err, files) => {
            if (err == null) {
                let selected = document.createElement('select'),
                    options = {}

                selected.classList.add('language_selected')

                if (curentLang) {
                    options[require(curentLang).locale] = curentLang
                    selected.innerHTML += `<option>${require(curentLang).locale}</option>`
                    options['English'] = undefined
                    selected.innerHTML += `<option>English</option>`
                } else {
                    options['English'] = undefined
                    selected.innerHTML += `<option>English</option>`
                }

                for (let i = 0; i < files.length; i++) {
                    let filePath = langPath + '/' + files[i],
                        name = require(filePath).locale;

                    if (!options[name]) {
                        options[name] = filePath
                        selected.innerHTML += `<option>${name}</option>`
                    }
                }

                console.log('options', options)

                selected.onchange = function() {
                    Lockr.set('current_language', options[this.value])
                }

                cont.appendChild(selected)
            }
            else if (err.code == 'ENOENT') cont.innerHTML += `<span class="error">${locale.get('No localization files found')}</span>`
            else { cont.innerHTML += `<span class="error">${locale.get('Unknown error')}: ${err}</span>` }
        })
    }
}