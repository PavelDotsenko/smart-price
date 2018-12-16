// Подключение файлов конфигураций
const intarface = require('./structure/app.json'),
      locale    = require('./locale/ru.json')

// Инициализация основных блоков
const mainMenu = new MainMenu('.main-menu', intarface.pages),
      mainConteint = document.querySelector('.main-conteint');