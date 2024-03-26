// This document is using Express to create an API specific for the app

const express = require('express');
const app = express();
const cors = require('cors');          // CORS allows different ports to communicate
const mongoose = require('mongoose');  // Connect Mongoose to MongoDB

app.use(express.json()); // Middleware to parse JSON requests
app.use(cors()); 

// If app not in production mode, then use the enviornment vars from the .env file
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const PORT = process.env.PORT || 3001;
const CONNECTION = process.env.CONNECTION;



// Mount enpoint routers
const usersRouter = require('./api_endpoints/users_endpoints');
const productsRouter = require('./api_endpoints/products_endpoints');
const cartRouter = require('./api_endpoints/cart_endpoints');
app.use('/api', usersRouter);
app.use('/api', productsRouter);
app.use('/api', cartRouter);



/* -------------------- ADD CODE HERE ------------------------ */

// // Load the models
// const Users = require('./models/users');

// app.get('/api/users', async (req, res) =>{
//     try {
//         const result = await Users.find(); // return all users from the Users schema
//         res.status(200).send({"Users": result});
//     }
//     catch(err) {
//         res.status(500).send(err.message);
//     }
// });

// // Add user to DB
// app.post('/api/users', async (req, res) => {
//     try{
//         console.log(req.body);
//         const user = new Users(req.body);          // Create new user
//         await user.save();                         // Save user into DB. await added to wait for user to be saved before sending the response
//         res.status(201).send({"Users": user});
//     }
//     catch(err){
//         res.status(400).send(err.message);   // status 400 = user submitted bad request
//     }
// });


// // Setting up parameterized URL and Query Stiring param
// app.get('/api/users/id/:id', async (req, res) => {
    
//     console.log({
//         "requestParams": req.params,
//         "requestQuery": req.query, 
//     });
//     try{
//         const {id: userID} = req.params; //destructuring
//         // console.log('here');
//         // console.log(userID);
//         const result = await Users.findById(userID);
//         // console.log(result);
//         // Check to see if user with specified id exists in DB
//         if(!result) {
//             res.status(404).send({'error': `No user found with id ${userID}`});
//         }
//         else{
//             res.status(200).send(result);
//         }
//     }
//     catch(err) {
//         res.status(500).send({'error': err.message});
//     }
// });

// // app.get('/api/users/studentID/:studentID', async (req, res) => {
// //     console.log({
// //         "requestParams": req.params,
// //         "requestQuery": req.query, 
// //     });
// //     const {studentID: studentNo} = req.params; //destructuring
// //     // console.log(studentNo);
// //     const result = await Users.find({"studentID":studentNo});   // retreive specific user based on studentID
// //     // Check to see if returned result has length of 0
// //     if(result.length === 0) {
// //         res.status(404).send({'error': `No user found with student ID ${studentNo}`});
// //     }
// //     else{
// //         // console.log(result);
// //         res.status(200).send(result);
// //     }
// // });

// // Update a particular user completely in DB
// app.put('/api/users/id/:id', async (req, res) => {
//     try{
//         const {id: userID} = req.params;
//         const result = await Users.findOneAndReplace({_id: userID}, req.body, {new: true});  // Find the object in DB and replace it. the new args is a flag returning the changed data
//         console.log(result);
//         res.send({result});
//     }
//     catch(err) {
//         res.status(500).send({'error': err.message});
//     }
// });


// // Update specific properties of user insteadof replacing entire entry
// app.patch('/api/users/id/:id', async (req, res) => {
//     try{
//         const {id: userID} = req.params;
//         const result = await Users.findOneAndUpdate({_id: userID}, req.body, {new: true});  // Find the object in DB and replace it. the new args is a flag returning the changed data
//         console.log(result);
//         res.send({result});
//     }
//     catch(err) {
//         res.status(500).send({'error': err.message});
//     }
// });

// // Delete user from DB
// app.delete('/api/users/id/:id', async (req, res) => {
//     try{
//         const {id: userID} = req.params;
//         const result = await Users.deleteOne({_id: userID});
//         res.send({'deletedCount': result.deletedCount})
//     }
//     catch(err) {
//         res.status(500).send({'error': err.message});
//     }
// });

// // Update specific proeprties of nested objects
// app.patch('/api/users/test/:id', async (req, res) => {
//     console.log(req.params);
//     const testID = req.params.id;
//     req.body._id = testID;      // prevent mongodb from overwriting current id
//     try{
//         const result = await Users.findOneAndUpdate(
//             {'test._id': testID},           // Find user with testid
//             {$set: {'test.$': req.body}},   // Update the parameter associated with test object
//             {new: true}
//         );
//         console.log(result);

//         if(result) {
//             res.send(result);
//         }
//         else{
//             res.status(404).send({'error': 'Update failed'});
//         }
//     }
//     catch(err) {
//         res.status(500).send({'error': err.message});
//     }
// });

// app.get('/api/users/test/:id', async (req, res) => {
//     try{
//         const result = await Users.findOne({'test._id': req.params.id});  // returns the enture document with all the info
//         if(result) {
//             res.send(result.test);                                        // return specific part of the document, in this case its the test attribute                             
//         }
//         else{
//             res.status(404).send({'error': 'Not found'});
//         }
//     }
    
//     catch(err){
//         res.status(500).send({'error': err.message});
//     }
// });





/* -------------------- END OF ADDING CODE HERE ------------------------ */

// Starting up of the DB from MongoDB Atlas
const startBackend = async() => {

    // await mongoose.connect('mongodb://127.0.0.1:27017/blogDB', { useNewUrlParser: true, useUnifiedTopology: true })
    try{

        // Wait for mongoose to connect to the CPS630 DB created on Atlas
        await mongoose.connect(
            CONNECTION, 
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        .then(() => console.log('MongoDB connected successfully'))

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
    catch(error) {
        console.error('Error connecting to MongoDB:', error.message);
    }

}

startBackend();
