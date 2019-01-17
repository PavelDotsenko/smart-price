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