import axios from 'axios';

console.log(process.env)

export default function getData(urlAddOn, callback) {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/${urlAddOn}`, {
    headers: { Authorization: process.env.TOKEN },
  })
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
}
