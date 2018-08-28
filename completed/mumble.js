accum = s => {
    return s.split('').map((element, i) => {
        return element.toUpperCase() + element.toLowerCase().repeat(i) 
    }).join('-');
}

module.exports = accum;

