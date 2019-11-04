import React, {Component} from "react";
import {login} from "../Utils/auth";
import './auth.scss';


export default class Login extends Component{
    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: "",
        }
    }
        changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    submitHandler = (e) => {
        e.preventDefault()
        login(this.state.email, this.state.password)
        .then((response)=> {
            this.props.history.push("/") // redirect to /home
            console.log("signed in")
        })
        .catch((error) => {
            console.log(error)
            
        })
    }

render() {
    return( 
        <div className="textCenter">
        <img id="fingerprint" src="images/fingerprint.png"></img>
        <div className="inputBox">
        <form className="inputForm" onSubmit={this.submitHandler} className="inputForm">
        <div className="fake-input">
            <input required className="input" placeholder="Email" type="text" name="email" value={this.state.email} onChange={(e) => this.changeHandler(e)} />
        
            <input required className="input" type="text" placeholder="Password" name="password" value={this.state.password} onChange={(e) => this.changeHandler(e)} />
            <img id="inputLock" src="../images/inputLock.png" width="20" />
            <button id="buttonBlack" type="submit" Value="Submit">Login</button>

        </div>
        </form>
        </div>
        </div>
        
    )
}


}


