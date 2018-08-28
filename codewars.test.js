// const filter_list = require('./listFilter') 
// const friend = require('./completed/friendFoe');
// const validParens = require('./validParens')
// const recreationOne = require('./recreationOne');
// const list = [1,'a','b',0,15];
// const test2 = [1,2,'aasf','1','123',123]
// const friendInput = ["Ryan", "Kieran", "Jason", "Yous"];
// const tester = "()(()))()";
// const pigIt = require('./pigIt');
// const add = require('./chainAdd');
// const dfSq = require('./dfSq')
// const listSquared = require('./recreationOne');
// const bump = require('./bumps');
// const aveng = require('./aveng');
// const getSum = require('./sums');
// const accum = require('./mumble');
// const encrypt = require('./encrypt');
// const arrayHelpers = require('./arrayHelpers');
// const stocklist = require('./bookCompare');
// const predictAge = require('./age');
// const multiplicationTable = require('./multTable');
// const stat = require('./stat');
// const century = require('./century');
// const fruit = require('./fruitMachine');
// const sort = require('./sortStrings');
const group = require('./organize');

it('returns true', () => {
    expect(group()).toBe(true);
})




// reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
// reel2 = ["Bar", "Wild", "Queen", "Bell", "King", "Seven", "Cherry", "Jack", "Star", "Shell"];
// reel3 = ["Bell", "King", "Wild", "Bar", "Seven", "Jack", "Shell", "Cherry", "Queen", "Star"];
// spin = [5,4,3];
// it('returns score from the fruit machine Game', () => {
//     expect(fruit([reel1,reel2,reel3],spin)).toBe(`Should Return: 40`);
// })

// it('returns even and odd sorted strings', () => {
//     expect(sort("hello")).toBe('hlo el');
// })
// it('returns true ', ()=>{
//     expect(century(1701)).toBe(18);
// })
// it('returns true', () => {
//     expect(stat("stg")).toBe(true);
// })

// it("returns true", () => {
//     expect(multiplicationTable(3, 3)).toEqual([[1,2,3],[2,4,6],[3,6,9]]);
// })

// it("returns 86", ()=> {
//     expect(predictAge(65,60,75,55,60,63,64,45)).toEqual(86);
// })

// b = ["ABAR 0", "CDXE 0", "BKWR 0", "BTSQ 0", "DRTY 0"]
// c = ["R", "X", "S", "K"]
// res = "(A : 200) - (B : 1140)"
// it("Returns true", () => {
//     expect(stocklist(b, c)).toEqual('');
// });

// it("returns true", () => {
//     expect(encrypt.encrypt("text", "n")).toEqual(true);
    
// })

// it("return true", () => {
    
//     expect(encrypt.decrypt("text", "n")).toEqual(true);
// })



// it("returns each char * the element number.", () => {

//     expect(accum("Ass")).toEqual("A-Ss-Sss");
// })

// const stringer = require('./smith');

// it("every first letter to caps.", () => {
//     expect(stringer("How can mirrors be real if our eyes aren't real")).toEqual("How Can Mirrors Be Real If Our Eyes Aren't Real");

// })


// it("returns Wohoo if you complete the trip", () => {
//     expect(bump("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")).toEqual("Car Dead");
// })



// it("returns the sum of the every int in the range", () => {

//     expect(getSum(-161,-177)).toEqual(-2873);
// })
// const total = [25, 25, 50, 50, 1000]
// it("Should return true", () => {

//     expect(aveng(total)).toEqual("No");
// })

// it("returns Wohoo if you complete the trip", () => {
//     expect(bump("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")).toEqual("Car Dead");
// })

// it("given two positive ints, find all integers b/t whose sum of sq divisors are sqs", () => {
//     expect(listSquared(1, 250)).toEqual([ [ 1, 1 ], [ 42, 2500 ], [ 246, 84100 ] ])
// })
// it("difference b/t the sum of sqs and the sq of their sum", () => {
//     expect(dfSq(10)).toEqual(2640);
// })

// it("chains the add function to return total", () => {
//     expect(add(2)(3)(4)).toEqual(9);
// })

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

// it("should return igPay atinlay siay oolcay", () => {
//     expect(pigIt("Pig latin is cool"))
//     .toEqual("igPay atinlay siay oolcay");
    
// })
// it("should return 4", () => {
//     expect(recreationOne(2, 2)).toEqual(4);
// })

// it("should return false" , ()=> {

//     expect(validParens(tester)).toBe(false);
// })




// it('should return names with four letter', () => {

//     expect(friend(friendInput)).toEqual(["Ryan", "Yous"])
// })

// it('returns only numbers', () => {

//     expect(filter_list(list)).toEqual([1,0,15])

// })

// it('also only returns number', () => {
//     expect(filter_list(test2)).toEqual([1,2,123])
// })
