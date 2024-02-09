const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const {PORT, mongoDBURL}  = require('./config.js');
const booksRoute  = require('./routes/booksRoute.js')

//add document to mongoDB
// {
// "title": "dsdd",
// "author": "Damain",
// "publishYear":1233
// }

const app = express();

app.use(express.json());

app.use(cors());

app.get('/',(req, res) =>{
    console.log(req)
    return res.status(234).send("Welcome To MERN")
});

app.use('/books', booksRoute);


mongoose.connect(mongoDBURL).then(() => {
    console.log('App connected to database')
    app.listen(PORT, () =>{
        console.log(`App is listening to port: ${PORT}`);
    })
}).catch((error) => {
    console.log(error)
})