import axios from 'axios'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'https://cnodejs.org/api/v1';

export default axios