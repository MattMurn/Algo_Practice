
let testFunc = async (num, cb) => {
    let mult = num * 10;
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(num = 5), 1000);
    })
    let result = await promise;

    return cb(result);
}
// let data = 100
// testFunc(10, data => {
//     console.log('this is data passed through a nice async funciton');
//     console.log(data * 55);
// })


const nuder = async num => {
    return num;
}

// nuder(10).then(data => console.log(data))

const waitFor = async (str,element, cb) => {
    let splitter = str.split("");
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(splitter.indexOf(element) > -1){
                
                splitter[splitter.indexOf(element)] = "Async/Await is the coolest";
                
            }
            resolve(splitter);
        },1000)
    })
    let result = await promise;
    cb(result);
}
let justPromise = (str, element) => {
    
    let splitter = str.split("");
    return new Promise((resolve, reject) => {
    
        setTimeout(() => {
            if(splitter.indexOf(element) > -1){
                
                splitter[splitter.indexOf(element)] = "Async/Await is the coolest";
                
            }
            resolve(splitter);
        },1000)
    })
}
justPromise("TESTER", "E").then(data => console.log(data));
// waitFor("tester200", "e", (newArr) => {
//     console.log(newArr);
// })