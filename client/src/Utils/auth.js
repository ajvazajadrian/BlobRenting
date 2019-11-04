import Axios from 'axios';
import qs from 'querystring';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const axios = Axios.create({
    withCredentials: true, // you need it for CORS
    baseURL: process.env.REACT_APP_API
});
// https://github.com/zeit/next.js/issues/153
export const login = function(email, password) {
    return axios({
        method: 'POST',
        url: 'api/auth/login',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({email, password}),
    })
    .then((response)=>{
        setUser(response.data)
    })
}

export const signup = function({email, password, firstname, lastname}) {
    return axios({
        method: 'POST',
        url: "api/auth/signup",
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: qs.stringify({email, password, firstname, lastname})
    })
    .then((response) => {
        setUser(response.data)
    })
}

export const loggedIn = function() {
    const user = getUser() 
    return !!user; // why !! 2x ? 
}

export const setUser = function(user){
    localStorage.setItem('user', JSON.stringify(user));
}

export const getUser = function(){ //you save session in your local storage 
    return JSON.parse(localStorage.getItem('user'))
}

export const logout = function(){
    return axios({
        url: 'api/auth/logout'
    })
    .then((res)=> {
        localStorage.removeItem('user');
        history.push('/home');
    })
}