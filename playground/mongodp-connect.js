
console.log('mongodb-connnect.js is started');
//for this we hav to install the mongodb module from the npm.
// const MongoClient = require('mongodb').MongoClient;
const r = require;

// this is ES6 object Destructuring.
 var {MongoClient,ObjectId} =  r('mongodb');
 var obj =  new ObjectId();
 console.log(obj);
//object destructuring
// MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
//   if(err){
//   	console.log('We Are Unable to connect the dataBase');
//   	return true;
//   }
//   console.log('Connect to the datbase');
//   //remeber this is version 3.
//   const db = client.db('TodoApp');  

  //insert a new Data.
  // db.collection('csDept').insertOne({
  // 	staus:'LatKhor',
  // 	rating:5
  // }, (err,result) => {
  // 	//code to handle the error.
  // 	if(err){
  // 		return console.log('Unable to insert',err);
  // 	} else {
  // 		//there result.ops gives the object that we have created.
  // 		console.log(JSON.stringify(result.ops, undefined,2));
  // 	}
  // })
//   db.collection('Users').insertOne({
//   	name:'Subahjit',
//   	age:25,
//   	location:'Garh Haripure'
//   },(error,result) => {
//   	if(error){
//   		console.log('Unable to insert the the object');
//   	} else { 
//   		console.log(result.ops[0]._id.getTimestamp());
//   	}
//   });
//  client.close();
// });
//create a another Mongoclient Server.
// MongoClient.connect('mongodb://localhost:27017/Admin',(error,client) => {
// 	if(error){
// 		console.log('unable to connect to the mongodb');
// 	} else {
// 		const db = client.db('Admin');
// 		db.collection('details').insertOne({
// 			           name:'Subhajit Manna',
// 			           age:22,
// 			           relationship:'single'
// 			       },(error,result) => {
// 			if(error){
// 				console.log('unable to insert',JSON.stringify(error,undefined,2));
// 			} else{
// 				console.log(result.ops);
// 			}
// 		});
// 	}
// 	client.close();
// });