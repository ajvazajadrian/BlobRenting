import React, {Component} from "react";
import {signup} from "../Utils/auth";
import './auth.scss';

export default class Signup extends Component{
    constructor(props){
        super(props);
        this.state= {
            email: "",
            password: "",
            firstname: "",
            lastname: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    inputEvent = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
handleSubmit = (event) => {
    event.preventDefault();
    const {
        email,
        password,
        firstname,
        lastname,
    } = this.state;

    
}


}


