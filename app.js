const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const storeRouter = require('./routes/store');

const app = express();

app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/store', storeRouter);

var mongoDB = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.9yi0q.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.listen(5000);
  
  

/**
 * .then(() => {
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });
 */