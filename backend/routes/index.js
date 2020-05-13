const express = require("express");
const router = express.Router();
const Plant = require('../models/Plant')
const Animal = require('../models/Animal')


/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ name: 'penguin' });
});


//Axios.get("/plants")
router.get("/plants", (req, res, next) => {
  Plant.find().then(plantsFromDb => {
    res.json({ plants: plantsFromDb }); //Sending plants to the client
  })
});

router.post("/plants", (req, res, next) => {  //Listening to post from client 6 
  Plant.create(req.body).then(response => {
    res.json({message:"success", newPlantId: response._id}) //Back to the front end sending another message 7
  }).catch(err => res.json({err}))
})






module.exports = router;