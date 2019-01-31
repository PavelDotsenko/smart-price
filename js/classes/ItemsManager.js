class ItemsManager {
    constructor (conteiner, file, options) {
        if (conteiner) {
            let path_arr = file ? file.split(this.sep()) : false;

            if (typeof conteiner == 'string') conteiner = conteiner[0] == '.' ? conteiner : '.' + conteiner
            this.cont           = typeof conteiner == 'string' ? document.querySelector(conteiner) : conteiner
            this.file_name     = path_arr ? path_arr[path_arr.length - 1] : false
            this.file_path      = path_arr ? (file).replace(this.file_name, '') : false
            this.options        = options || false
            this.data           = false
            this.custom_class = this.options.custom_class || 'items-manager'
            this.cont.classList.add(this.custom_class)

            this.readDataFile()
        }   
    }

    createManager () {

    }

    sep (path) {
        if (typeof path === 'undefined' || path === '') return (process.platform === 'win32') ? '\\' : '/';
        else return (process.platform == 'win32') ? path.replace( /\//g, '\\' ) : path.replace( /\\/g, '/' );
    }

    readDataFile () {
        let fs = require('fs');
        
        fs.readdir(this.file_path, err => {
            if (err == null) {
                fs.readFile(this.file_path + this.file_name, err => {
                    let data = this.options ? JSON.stringify(this.options) : '{}';
                    
                    if (err == null) this.data = require(this.file_path + this.file_name)
                    else {
                        fs.writeFile(this.file_path + this.file_name, data, err => {
                            if (err == null) this.data = require(this.file_path + this.file_name)
                            else console.error('Невозможно создать файл')
                        })
                    }
                })
            } else {
                fs.mkdir(this.file_path, err => {
                    if (err == null) this.readDataFile()
                    else console.error('Невозможно создать папку')
                })
            }
        })
    }
}