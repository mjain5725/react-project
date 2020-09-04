import axios from 'axios';

const instance =axios.create({
    baseURL:'https://react-project-576ef.firebaseio.com/'
});

export default instance;