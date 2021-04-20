import axios from 'axios';
// import TOKEN from '../../config.js';
// require('dotenv').config() //this line tell a server to load anything that's in a file .env into an environment variable

console.log(process.env)

export default function getData(urlAddOn, callback) {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/${urlAddOn}`, {
    headers: { Authorization: process.env.TOKEN },
  })
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
}
