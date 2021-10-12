// const os = require('os')

// // info about the user
// const user = os.userInfo()

// console.log(user)

// //method returns the sysytem uptime in seconds

// console.log(`The system uptime is ${os.uptime()} seconds`)

// const currentOs = {
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }

// console.log(currentOs)

//Path module
// const path = require('path')

// const absolute = path.resolve(__dirname,'app.js')

// console.log(absolute)

//File Module

// const {readFileSync,writeFileSync} = require('fs')

// const first = readFileSync('./nodejs/content/first.txt','utf8')
// const sec = readFileSync('./nodejs/content/subfolder/test.txt','utf8')

// // console.log(first,sec)

// writeFileSync('./nodejs/content/result.txt',`Here is the result : ${first} and ${sec}`,{flag : 'a'})

// const {readFile,writeFile} = require('fs')

// readFile('./nodejs/content/first.txt','utf8',(err,result)=>{
//     if (err){
//         console.log(err)
//         return
//     }
//     const first = result
//     readFile('./nodejs/content/subfolder/test.txt','utf8',(err,result)=>{
//         if (err){
//             console.log(err)
//             return
//         }
//         const second = result

//         writeFile('./nodejs/content/resukt-async.txt',`Here is the result : ${first} and ${second}`,(err,result)=>{
//             if (err){
//                 console.log(err);
//                 return
//             }
//             console.log(result)
//         })
//     })
// })


setInterval(()=>{
    console.log("Hello World");
},2000)
