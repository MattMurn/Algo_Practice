const example = [2,2,2,2,2,2,2,2,1]
const example2 = [1,13,41,2,11,135,19];
    
    iqTest = numbers=> {
        //find position of single even or odd 
    // ... if numbers[i] % 2 > 0 ... array.filter(data => return data % 2 < 0
    // having an issue with type conversion. currently strict equality is preventing correct 
    // answer. indexOf() is returning -1 b/c isOdd is a string and array element is a int.
    // 

    let isEven = numbers.filter( data =>  data % 2 == 0).join('');
    let isOdd = numbers.filter( data => data % 2 > 0);
    let stringer = numbers.map(data => parseInt(data, 10));
    
    if (isEven.length > 1){

        return  numbers.indexOf(Number(isOdd));
    }
    else {
        return numbers.indexOf(Number(isEven));
    }
  }



   iqTest(example);



// module.exports = iqTest;

// // import iqTest from './IQ';
// const iqTest = require('./IQ');
// const example = [2,2,2,2,2,2,2,2,2,1];
// const example2 = [1,13,41,2,11,135,19];
// // it('adds 1+3 to equal 4', () => 
// //     // expect(iqTest(1,3).toBe(4));
// //     expect(iqTest(1,3).toBe(4))
// // )

// it('isEven > 1', () =>

//     expect(iqTest(example)).toBe(8)
// )


// it('is odd' , () => expect(iqTest(example2).toBe(3)))