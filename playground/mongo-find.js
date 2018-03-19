console.log('mongo-find.js is started');
const r = require;
//this is ES6 object Destructuring.
 var {MongoClient,ObjectId} =  r('mongodb');
 // var obj =  new ObjectId();
 // console.log(obj);
 MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
 if(err){
 	console.log('We Are Unable to connect the dataBase');
 	return;
  }
  console.log('Connect to the Mongodb');
 const db = client.db('TodoApp');  
	//Here toArray return the Promise.  
	db.collection('Users').find(
//now here we can add the specific query on basis of this to fecth the object which.
//satisfy this query.
   		{
			age:22
 		}
 		).toArray().then((docs) => {
 			//explore promise.
   console.log('Todos');
   console.log(JSON.stringify(docs,undefined,2));    
   //remmeber this docs file is a array.
   //find the text which object has complted false;
   // docs.forEach((obj,i) => {
   // if(obj.completed === false){
   // 	console.log(obj.text);
   // } else {
   //    console.log("index: Don't",i);
   // }
   // });
  	},(err)=>{
  		console.log('Unable to fetch todos',err);
  	});
//  // client.close();
});