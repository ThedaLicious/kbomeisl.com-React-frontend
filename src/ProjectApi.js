import axios from 'axios';  //import dependency called axios- which lets fe talk to be

export default axios.create({
    baseURL: 'https://infinite-journey-94180.herokuapp.com/api' // bkend adDy
});
