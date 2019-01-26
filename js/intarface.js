const interface = {
    'menu': [],
    '': {},
    '': {},
    '': {},
    '': {},
    '': {},
    'page-settings': {
        'type': 'section',
        'title': 'Application settings',
        'style': 'page-settings', 
        'components': [{
            'type': 'div',
            'heading': 'Language and appearance',
            'content': [{
                'type': 'ul',
                'style': 'select_language',
                'label': 'Default language:',
                'function': 'selectLanguage'
            }]
        }]
    },
};