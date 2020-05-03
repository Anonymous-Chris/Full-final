 const express= require('express')
// const bodyparser = require('body-parser')
// const cookieparser=require('cookie-parser')
// const allRouter = require('./routes')

const app=express()
const port = process.env.PORT || 5000
// console.log(port)

// app.use(express.json())
// app.use(allRouter)

app.listen(port,()=>{
    console.log('server is up on port ' + port)
})

// const app = express()
// app.use(bodyparser.urlencoded({extended:true}))
// app.use(bodyparser.json())
// app.use(cookieparser())


// app.post("/api/hello",(req,res)=>{
//     console.log(req.body)
//    // sendMail(to,name,type)
// })

// app.listen(5001,()=>{
//     console.log('server is running at port 5001')
// })