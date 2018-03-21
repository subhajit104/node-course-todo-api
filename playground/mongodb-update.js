//this section is all about updating the data;
console.log('mongodb-update.js is started');
const r = require;
//this is ES6 object Destructuring.
 var {MongoClient,ObjectId} =  r('mongodb');
 // var obj =  new ObjectId();
 // console.log(obj);
 var url = 'mongodb://localhost:27017' ;
 MongoClient.connect(url,(err,client) => {

 if(err){
 	console.log('We Are Unable to connect the dataBase');
 	return;
  }

 console.log('Connect to the Mongodb');
 const db = client.db('TodoApp'); 

 db.collection('Admin').findOneAndUpdate({
 	name:"sagar jana"
 },{
 	$set:{
 		relationShipStatus:"Engaged"
 	},
 	$inc:{
 		//increase the age of the specified name is 1.
 		age:1
 	}
 }, {
 	returnOriginal:false
 }).then ((result) =>{
 	console.log(JSON.stingify(result));
 }, (error) => {
 	console.log('Unable to fetch the data');
 }); 
});