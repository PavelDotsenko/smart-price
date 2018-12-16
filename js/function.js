function phrase(text) {
    if (typeof locale !== 'undefined' && locale[text]) return locale[text]
    else return text
}