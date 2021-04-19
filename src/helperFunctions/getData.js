import axios from 'axios';
import TOKEN from '../../config.js';

export default function getData(urlAddOn, callback) {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/${urlAddOn}`, {
    headers: {'Authorization': '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'}
  })
    .then(res => callback(null, res))
    .catch(err => callback(err));
}
