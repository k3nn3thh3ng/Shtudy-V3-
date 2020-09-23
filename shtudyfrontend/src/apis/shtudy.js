const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://testingexpressandreact.run.goorm.io',
  withCredentials: true
});



export default instance