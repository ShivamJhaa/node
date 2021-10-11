// const http = require('http')
// const { url } = require('inspector')

// const server = http.createServer((req,res)=>{
//     if (req.url === '/'){
//         res.end('Welcome to my home page')
//     }
//     if (req.url === '/about'){
//         res.end('This is our about page')
//     }

//     res.end(`
//     <h1>Oops!</h1>
//     <a href="/">Back Home</a>
//     `)
// })

// server.listen(5000)

const _ = require('lodash')

const items= [1,[2,[3,4]]]

const mewItems = _.flattenDeep(items)

console.log(mewItems);