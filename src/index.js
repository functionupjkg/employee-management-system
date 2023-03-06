const express=require('express');
const bodyParser = require('body-parser');
const route = require('./routes/routes');
const mongoose  = require('mongoose');
const app = express()

app.use(bodyParser.json())

//connecting to DB
mongoose.connect("mongodb+srv://Jyoti273-db:djukOqR9QbI5Itvc@cluster0.nzuylps.mongodb.net/meet-assignment", {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route)

// ruuning on port 3000
app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});