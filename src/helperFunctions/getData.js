import axios from 'axios';

export default function getData(urlAddOn, callback) {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/${urlAddOn}`, {
<<<<<<< HEAD
    headers: { Authorization: TOKEN },
=======
    headers: { Authorization: process.env.TOKEN },
>>>>>>> master
  })
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
}
