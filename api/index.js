//!/* ------------------------------ adding pakage ----------------------------- */
//jshint esversion:6 
require('dotenv').config();
const express=require('express');
const request=require('request');
const mongoose=require('mongoose');

const app =express();
const port =8800;

//!/* --------------------------------- setting -------------------------------- */
// form input 
app.use(express.urlencoded())

//using public file
app.use('/public',express.static('public'))


//!/* -------------------------------- mongoose -------------------------------- */
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// 	console.log("we are connected to the mongoDB at port 27017");
// });


//!/* ---------------------------------- route --------------------------------- */

app.get('/',(req,res)=>{
	res.render("../index.html")
})


//!/* --------------------------------- listen --------------------------------- */
app.listen(port,function(){
	console.log("server running in port "+port);
});
