class MainContent {
    constructor(conteiner, page) {
        this.cont = document.querySelector(conteiner)
        this.page = page
        this.pageCreate(page)
    }

    pageCreate(data) {
        this.clear()
        switch (data) {
            case 'page-print':
                this.cont.innerHTML = locale.get('Print')
                break;

            case 'page-products':
                this.cont.innerHTML = locale.get('Products')
                break;

            case 'page-brands':
                this.cont.innerHTML = locale.get('Brands')
                break;
            
            case 'page-prices':
                this.cont.innerHTML = locale.get('Prices')
                break;

            case 'page-settings':
                new PageSettings(this.cont, [data])
                break;
        
            default:
                this.cont.innerHTML = locale.get('Unknown page')
                break;
        }
    }

    clear() { this.cont.innerHTML = '' }
}