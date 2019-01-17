class Translate {
    constructor (file, callback) {
        this.path = this.sep(__dirname +  '/locale/')
        this.file = file ? file : false
        this.callback = callback ? callback : false
        this.langList = []
        this.currentLang = ''
        this.phraseDesc = '_desc'
        this.elements = []
        this.data

        const fs = require('fs');

        fs.readdir(this.path, (err, files) => {
            this.langList = (err == null) ? files : false;

            if (this.langList) {
                let file = this.file ? this.path + this.file : false
                
                if (file) {
                    fs.readFile(file, err => {
                        this.data = (err == null) ? this.data = require(file) : false
                        this.currentLang = this.data ? this.data.locale : 'English'

                        if (this.callback && typeof this.callback == 'function' && this.currentLang) this.callback()
                    })
                } else {
                    this.file = this.data = false
                    this.currentLang = 'English'
                }
            } else {
                this.file = this.data = false
                this.currentLang = 'English'
            }

            if (typeof callback == 'function' && this.currentLang) callback()
        })
    }

    changeLang(newLang, callback) {
        
    }

    sep (path) {
        if (typeof path === 'undefined' || path === '') return (process.platform === 'win32') ? '\\' : '/';
        else return (process.platform == 'win32') ? path.replace( /\//g, '\\' ) : path.replace( /\\/g, '/' );
    }

    get (phrase) { return (this.data && this.data[phrase]) ? this.data[phrase] : phrase }
    getLocalizationFolder () { return this.path }
    getLocalizationFile () { return this.file }
    getAllLocalizationFiles () { return this.langList }
    getLocalization () { return currentLang }

    setLocalisationPath(path) { this.path = path }
}