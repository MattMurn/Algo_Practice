const  array = ["this", "is", "an", "array"];
 
module.exports = {

borReach: test => {
    console.log(test);
},

bummed: async => {


}
// console.log(hi);

}
 

// let http = require('http');
// let fs = require('fs');
// let PORT = 3001;

// http.createServer((req, res) => {

//   if(req.method === "GET"){
//     res.writeHead(200, {"Content-Type": "text/html"});

//     fs.createReadStream("./form.html",  "UTF-8").pipe(res);
//   } else if(req.method === "POST"){
//     let body = "";

//     req.on("data", chunk => {
//       body += chunk;
//     });

//     req.on("end", () => {
//       res.writeHead(200, {"Content-Type": "text/html"});
//       res.end(`
//           <!DOCTYPE html>
//           <html>
//             <head>
//               <title> Results </title>
//             </head>
//             <body>
//             <h1> RESULTS <h1>
//              <p> ${body} <p>
//             </body>
//           </html>
//       `)
//     })
//   }
// }).listen(PORT);

// console.log(`sever listening on Port: ${PORT}`)






// let data = [
//   {
//     name: "jerry",
//     saying: "Hello"
//   },
//   {
//     name: "barry",
//     saying: "goodbye"
//   },
//   {
//     name: "larry",
//     saying: "lowdo"
//   }

// ]
// let PORT = 4000;
// http.createServer((req, res) => {
//   if(req.url === "/"){
//     res.writeHead(200, {"Conent-Type": "text/json"});

//     res.end(JSON.stringify(data));    
//   }else if(req.url === "/correct"){
//     listInside(res);

//   }else if(req.url === "/incorrect"){
//     listOutside(res);
//   }else {
//     res.writeHead(404, {"Content-Type": "text/plain"});
//     res.end("OOOOPS Something went wrong");
//   }

// }).listen(PORT);

// console.log(`sever listening on Port: ${PORT}`)

// listInside = res => {
//   let correct = data.filter( check => {
//      return check.name === "jerry";
//   })
//   res.end(JSON.stringify(correct));
// }

// listOutside = res => {
//   let incorrect = data.filter( check => {
//     return check.name !== "jerry"
//   })
//   res.end(JSON.stringify(incorrect));
// }

// let http = require('http');
// let fs = require('fs');
// let path = require('path');
// let PORT = 4000;
// http.createServer((req, res) => {
//     console.log(` ${req.method} request for ${req.url}`);

//     if(req.url === "/"){
//         fs.readFile("index.html", "UTF-8", (err, html) => {
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.end(html)
//         })
        
//     }else if(req.url.match(/.css$/)){
//       let cssPath = path.join(__dirname, req.url);
//       let fileStream = fs.createReadStream(cssPath, "UTF-8");
      
//       res.writeHead(200, {"Content-Type": "text/css"});

//       fileStream.pipe(res);
//     }else {
//         res.writeHead(404, {"content-Type":"test/plain"});
//         res.end("404 File Not Found")
//     }

// }).listen(PORT);

// let http = require('http');
// let PORT = 4000;
// let example = "CHAO "
// let server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/html"});

//     res.end(`
//     <!DOCTYPE html>
//       <html>
//         <head> </head>
//         <body> 
//           <div>${example}</div>
//           <div> ${req.url} </div>
//         </body>
//       </html>
    
//     `);
// });

// server.listen(PORT);

// console.log(`server listening on port: ${PORT}`)

// let https = require('https');
// let fs = require('fs');

// let options = {
//   hostname: "en.wikipedia.org",
//   port: 443,
//   path: "/wiki/george_washington",
//   method: "GET"
// }

// let req = https.request(options, res => {
//     let responseBody = "";

//     console.log("response from server started");
//     console.log(`Server Status: ${res.statusCode}`);

//     res.setEncoding("utf-8");

//     res.once("data", chunk => {
//         console.log(chunk);
//     })

//     res.on("data", chunk => {
//       console.log(`--chunk -- ${chunk.length}`);

//       responseBody += chunk;
//     })

//     res.on("end", () => {
//       fs.writeFile("george.html", responseBody, err => {
//         if(err){
//           throw err;
//         }

//         console.log("File Downloaded")
//       })
//     })
//     res.on("error", err => {
//       console.log(`problem with request: ${err}`)
//     })
// })



// const EventEmitter = require('events').EventEmitter;
// const util = require('util');
// let Person = function(name) {
//     this.name = name;
// }

// util.inherits(Person, EventEmitter);
// var Person = require('./lib')
// let ben = new Person("Ben Franklin");
// let george = new Person("George Paul");

// george.on('speak', function(said){
//     console.log(`${this.name} spoke ${said}`)

// });

// ben.on('speak', function(said) {
//     console.log(`${this.name} spoke ${said}`)

// })

// ben.emit('speak','you may delay but time will not');
// george.emit('speak','Imma go across that cold river...probably');

// const readline = require('readline');

// let rl = readline.createInterface(process.stdin, process.stdout);
// let realPerson = {
//     name: "",
//     sayings: []
// };
// rl.question("what is the name of a real person", answer => {
//     realPerson.name = answer;
//     rl.setPrompt(`what would ${realPerson.name} say?`)
//     rl.prompt();
//     rl.on('line', saying => {
//         realPerson.sayings.push(saying);
//         rl.setPrompt(``)
//         console.log(saying);
//     })


// })
// var path = require('path');
// const util = require('util');

// var Mpath =path.basename(__filename);
// util.log(Mpath);

// // process.on('exit', data => {
// //     // process.stdout.write(">>>>>>>>>>>>>>>>>")
// //     process.stdout.write(answers)

// // })


// var wait = 3000;
// var cur = 0;
// var waitInterval = 500;
// var waitpercent = 0;

// writeWaiting = waitpercent => {
//     process.stdout.clearLine();
//     process.stdout.cursorTo(0);
//     process.stdout.write(`wainting ... ${waitpercent}`)
// }
// let invert = setInterval(() => {
//     cur += waitInterval;
//     waitpercent = Math.floor((cur/waitInterval)*100)
//     writeWaiting(waitpercent);

//     console.log(`waiting ${cur/1000} .... secondss`);
// })


// setTimeout(() => {
//     console.log("YOU WAITED!!!")
//     clearInterval(invert);
//     writeWaiting(100)
// }, wait)


// writeWaiting(0)

// async () => {
//     try {
//         await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
//       } catch (error) {
//         // Error saving data
//       }
// }