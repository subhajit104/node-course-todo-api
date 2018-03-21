console.log('mongo-find.js is started');
const r = require;
//this is ES6 object Destructuring.
 var {MongoClient,ObjectId} =  r('mongodb');
 // var obj =  new ObjectId();
 MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
 if(err){
 	console.log('We Are Unable to connect the dataBase');
 	return;
  }
  console.log('Connect to the Mongodb');
  // const db = client.db('TodoApp');  

  //   //deleteMany
  //    db.collection('Todos').deleteMany({
  //     text:'I am not ready'
  //    })
  //    .then((result) => {
  //      console.log(result);
  //    },(error)=>{
  //       console.log('delete is not successful');
  //    });
    //deleteOne
    //   const db = client.db('TodoApp');  

    // //deleteMany
    //  db.collection('Todos').deleteOne({
    //   text:'I am not ready'
    //  })
    //  .then((result) => {
    //    console.log(result);
    //  },(error)=>{
    //     console.log('delete is not successful');
    //  });
    //findOneAndDelete
  const db = client.db('TodoApp');  
     const id =  new ObjectId("5aafbfa951864c30b46b41df");
    //deleteMany
     db.collection('Users').findOneAndDelete({
      _id: id
    })
     .then((result) => {
       console.log(result);
     },(error)=>{
        console.log('delete is not successful');
     });

    //db.close();

//  // client.close();
});