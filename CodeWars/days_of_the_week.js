let _ = require('lodash');
let process = require('process');

const return_day = num => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days[num];
}


_.times(6, () => {
    let i = 0;
    console.log(return_day(i));
    i+=1;
})

console.log(_.add(100, 200))

process.on('start', () => {
    setInterval(()=> console.log('test'), 5000);
})