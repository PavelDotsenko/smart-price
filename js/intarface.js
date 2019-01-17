window.structure = {
    "menu": [
        {
            "name": "page-print",
            "icon": "",
            "label": "Print",
            "desc": "List of price tags for printing"
        },
        {
            "name": "page-products",
            "icon": "",
            "label": "Products",
            "desc": "Edit product list"
        },
        {
            "name": "page-brands",
            "icon": "",
            "label": "Brands",
            "desc": "Edit Brands List"
        },
        {
            "name": "page-prices",
            "icon": "",
            "label": "Prices",
            "desc": "Edit price list"
        },
        {
            "name": "page-settings",
            "icon": "",
            "label": "Settings",
            "desc": "Application settings"
        }
    ],
    "": {},
    "": {},
    "": {},
    "": {},
    "": {},
    "page-settings": {
        "type": "section",
        "title": "Application settings",
        "style": "page-settings", 
        "components": [{
            "type": "div",
            "heading": "Language and appearance",
            "content": [{
                "type": "ul",
                "style": "select_language",
                "label": "Default language:",
                "function": "selectLanguage"
            }]
        }]
    },
};