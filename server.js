const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("app/public"));

const axios = require('axios');
const { response } = require('express');
var router = require("express").Router();

require("dotenv").config();
//var keys = require ("../../keys");

var YELP_Key = process.env.YELP_Key;
router.get("/api/search", function(req, res) {
let yelpREST = axios.get({
    // "https://api.yelp.com/v3/businesses/search", function(req, res)
    baseURL: "https://api.yelp.com/v3/businesses/search",
    headers: {
      Authorization: `Bearer ${YELP_Key}`,
      "Content-type": "application/json",
    },
    data: {
        term: "brewery",
        location: userLocation }
  })
  
  yelpREST(ENDPOINT, { params: { key: value } }).then(({ data }) => {
      console.log(value);
    // Do something with the data
  })
});


// axios.get(`https://api.yelp.com/v3/businesses/search`)
// .then(response => {
//     console.log(response.data.url);
//     console.log(response.data.explanation);
// })
// .catch(error => {
//     console.log(error);
// })


//Require Routes Here...
// require("./app/routes/apiRoutes")(app);
// var apiRoutes = require("./app/routes/apiRoutes")
// app.use(apiRoutes)


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})