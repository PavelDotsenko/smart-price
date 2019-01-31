function changeCurrentLang() {
    let choise_lang = document.querySelector('.choice-preferred-lang'),
        save_lang   = document.querySelector('.save-preferred-lang'),
        langs        = Locale.getAllLocalizationFiles(),
        langs_path  = Locale.getLocalizationFolder(),
        current      = (Lockr.get('current_language') && Lockr.get('current_language') != '') ? require(langs_path + Lockr.get('current_language')).locale : false,
        lang_arr    = {};

    choise_lang.innerHTML = ''

    if (Lockr.get('current_language') && Lockr.get('current_language') != '' && current) {
        choise_lang.innerHTML += `<option>${current}</option>`
    }

    for (let i = 0; i < langs.length; i++) {
        let file = require(langs_path + langs[i]);

        if (current && file.locale != current) {
            choise_lang.innerHTML += `<option>${file.locale}</option>`
            lang_arr[file.locale] = langs[i]
        }
    }

    choise_lang.onchange = function () {
        if (current && this.value != current) save_lang.style.display = 'inline-block'
        else save_lang.style.display = 'none'
    }

    save_lang.onclick = function () {
        Locale.changeLang(lang_arr[choise_lang.value], () => {
            Lockr.set('current_language', lang_arr[choise_lang.value])
            changeCurrentLang()
        })

        this.style.display = 'none'
    }
}