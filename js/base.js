window.Locale = new Translate(Lockr.get('current_language'));
window.Brands = new ItemsManager('brands-list', __dirname + '/source/brands.json', {});

window.onload = function () {
    let preloader = document.querySelector('.preloader');

    Brands.createManager()

    setTimeout(()=> {
        if (!Lockr.get('current_language') || Lockr.get('current_language') == '') firstEntry()
        
        changeCurrentLang()

        preloader.style.display = 'none'
    }, 1000)
}