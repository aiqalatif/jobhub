const express=require('express')
const app=express()
const port=3000
const dotenv=require('dotenv');
 const mongoose=require('mongoose') ; 

 dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(()=>console.log('connect to  ve database')).catch((err)=>console.log(err));

app.get('/',(req,res)=>res.send('Hello World!'))
app.listen(process.env.PORT || port, () => console.log(`The Hub example app is listening on ${process.env.PORT || port}!`));


