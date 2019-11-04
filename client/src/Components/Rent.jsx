import React, { Component } from 'react'
import { getUser } from '../Utils/auth'
import axios from 'axios';

export default class Rent extends Component{
    constructor(props){
        super(props)
    }
state= {
    updatedProduct: ""
}

    componentDidMount(){
        axios({
            method: "GET",
            url: "http://localhost:3001/api/product/products"
        })
        .then((products)=>{
            this.setState({updatedProduct:products.data})
            console.log(this.state.updatedProduct)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <div>
            <h1>Rent</h1>
                

            </div>
        )
    }
}