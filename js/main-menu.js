let menu      = document.querySelector('.main-menu'),
    page_cont = document.querySelector('.main-content'),
    pages     = page_cont.querySelectorAll('section'),
    items     = menu.querySelectorAll('button');

for (let i = 0; i < items.length; i++) {
    items[i].onclick = function () {
        for (let k = 0; k < items.length; k++) { items[k].classList.remove('active') }
        for (let k = 0; k < pages.length; k++) { pages[k].classList.remove('active') }
        document.querySelector('#' + this.className).classList.add('active')
        this.classList.add('active')
    }
}