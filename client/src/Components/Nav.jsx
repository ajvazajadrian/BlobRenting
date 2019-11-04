import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { slide as Menu } from 'react-burger-menu'
import cross from "../image/cross.png"
import icon from "../image/icon.png"
import "./Nav.scss";


export default class Nav extends Component {
    
    render() {
        return (
            <div className="Navigation">
            <a className="menu-item navi" href="/">Home</a>
            <a className="menu-item navi" href="/rent">Rent</a>
            <a className="menu-item navi" href="/create">Create</a>
            <Link to="/login"
              className="LoginButton">LogIn</Link>
            </div>
        )
    }
}


