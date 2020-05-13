const express = require('express')
const cors = require('cors')
const index = require("./routes/index");
const app = express() 
const bodyParser  = require('body-parser')
const mongoose = require('mongoose')


mongoose
  .connect("mongodb://localhost/fullStackApp", { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });


  


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())


app.use("/", index);








app.listen(process.env.PORT || 5000)