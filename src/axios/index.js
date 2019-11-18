import axios from 'axios';

let baseUrl = '';
if(process.env.NODE_ENV === 'development') {
  baseUrl = ''
} else {
  baseUrl = ''
}

const Axios = axios.create({
  baseURL: baseUrl
});

Axios.defaults.baseURL = baseUrl;
Axios.defaults.headers.post['Content-Type'] = 'application/json';

export default Axios;
