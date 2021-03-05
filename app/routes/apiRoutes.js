const axios = require('axios');
const { response } = require('express');

require("dotenv").config();

axios.get(`https://api.yelp.com/v3/businesses/search`)
.then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
})
.catch(error => {
    console.log(error);
})