import express from "express"
import bodyParser  from "body-parser"
import mongoose from "mongoose"
import cors from 'cors'
import postRoutes from './routes/posts.js'
const app = express();

app.use(bodyParser({limit:'30mb',extended:true}))
// app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())
const CONNECTION_URL ="mongodb+srv://ankit99aug:root@cluster0.hxf156l.mongodb.net/"
const PORT = process.env.PORT || 5000
mongoose.connect(CONNECTION_URL)
.then(()=>{
    app.listen(PORT,()=>console.log(`Server running on ${PORT}`))
}).catch((err)=>console.log(err.message));
app.use('/posts',postRoutes);

mongoose.set();
