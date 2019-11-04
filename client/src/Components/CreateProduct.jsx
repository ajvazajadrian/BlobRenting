import React, { Component } from 'react'
import { getUser } from '../Utils/auth'
import axios from 'axios'
import './Create.scss';

export default class CreateProduct extends Component {
    constructor(props){
        super(props)
        this.formRef = React.createRef()
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            customer: getUser()
        }
    }

    handleSubmit(e) {
        e.preventDefault(); // prevent the default behaviour of the form, being redirecting to another route

        var formData = new FormData(this.formRef.current); // more info: https://developer.mozilla.org/en-US/docs/Web/API/FormData
        formData.append('customer', this.state.customer.id)
        
        axios({
            url: "http://localhost:3001/api/product/create",
            data: formData,
            headers: {
                'content-type': 'multipart/form-data'
            },           
            method: "POST"
        })
        .then((response)=> {
           this.props.history.push(`/search`) // redirect to /home
            console.log(response)
          
        })
        .catch((error)=> {
           console.log(error)
        })
    }

    render() {
        return (
            <div className="createProduct">
            <h1>Create a product</h1>
            <form  onSubmit={this.handleSubmit} ref={this.formRef}> {/* React equivalent of an id  */}
            <input className="inputFormLogin" placeholder="Title" type="text" name="title"/>
            <input className="inputFormLogin" placeholder="Description"  type="text" name="description"/>
            <input className="inputFormLogin" placeholder="Category" type="text" name="category"/>
            <input className="inputFormLogin" placeholder="Price" type="number" name="price"/>
            <label className="custom-file-upload">
                <input type="file" name="picture"/>
                
            </label>

            <button id="buttonBlack" type="submit">Submit </button>
        </form>
            </div>
        )
    }
}
