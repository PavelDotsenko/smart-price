'use strict';

/**
 * Автоматическая подстановка символа разделения пути
 */
function sep(path) {
    if (typeof path === 'undefined' || path === '') { return (process.platform === 'win32') ? '\\' : '/' }
    else {
      let strpath = (process.platform === 'win32') ? path.replace( /\//g, '\\' ) : path.replace( /\\/g, '/' );
      return strpath
    }
  }

function firstEntry () {
  let choise_lang = document.querySelector('.choise-lang'),
              save_lang   = document.querySelector('.save-lang'),
              langs        = Locale.getAllLocalizationFiles(),
              langs_path  = Locale.getLocalizationFolder(),
              lang_arr     = {},
              fs            = require('fs');

  document.querySelector('.welcome').style.display = 'block'

  for (let i = 0; i < langs.length; i++) {
      let lang = require(langs_path + langs[i]);
      lang_arr[lang.locale] = langs[i]
      choise_lang.innerHTML += `<option>${lang.locale}</option>`
  }

  choise_lang.onchange = function () { Locale.changeLang(lang_arr[this.value]) }
  save_lang.onclick = function () {
      Locale.changeLang(lang_arr[choise_lang.value], () => {
          Lockr.set('current_language', lang_arr[choise_lang.value])
      })
      document.querySelector('.welcome').style.display = 'none'
  }
}