// Инициализация основных блоков
window.locale = new Translate(Lockr.get('current_language'), () => {
    window.main_menu    = new MainMenu('.main-menu', structure.menu);
    window.main_content = document.querySelector('.main-content');
})