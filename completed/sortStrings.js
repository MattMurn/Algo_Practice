sortMyString = s => {
    let final = [[],[]];
    s.split('').filter((letter, i) => {
        (i % 2 === 0) ? final[0].push(letter) : final[1].push(letter);
    })
    return `${final[0].join('')} ${final[1].join('')}`
}

sortMyString('hello');

module.exports = sortMyString;