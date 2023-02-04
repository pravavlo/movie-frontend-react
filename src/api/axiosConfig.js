import axios from 'axios';

export default axios.create({
    baseURL:'https://3853-45-123-221-23.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
});