/*const num = 12;
if (num>10){
    console.log("Large number");
}
else {
    console.log("Small number");
}

console.log("my first prograamme");

setInterval(()=>{
    console.log("Hello world")
},2000)*/

// const names = require('./3')
// const sayHi = require('./4')

// const data = require('./6')

// console.log(data)

// sayHi('susan')
// sayHi(names.shivam) 

// const EventEmitter = require('events');

// const customEmitter = new EventEmitter()

// customEmitter.on('response',(name,id)=> {
//     console.log(`data recieved ${name} and ${id}`)
// })
// customEmitter.emit('response','john',25)
// customEmitter.on('response',()=> {
//     console.log(`Second point`)
// })

// customEmitter.emit('response','john',25) 

// const {createReadStream}= require('fs')

// const stream = createReadStream('./nodejs/content/big.txt',{encoding : 'utf8'})

// stream.on('data',(result)=>{
//     console.log(result)
// })S
var http = require('http')

var fs = require('fs')

http.createServer(function(req,res){
    const text = fs.readFileSync('./nodejs/content/big.txt','utf8')
    res.end(text)
}).listen(5000)

