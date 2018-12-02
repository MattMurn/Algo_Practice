
(iife = ()=>{
      console.log('iife hit')
     return 'hello world';
 })();

 setTimeout(()=> iife, 5000);


 doubleNum = num => {
     return num*2;
 }

 doubleNum(10);

console.log((id = num => {
     return num *2;
 })(10));

