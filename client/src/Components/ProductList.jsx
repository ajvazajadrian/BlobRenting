import React, {Component} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Product from './Product.jsx'
import './ProductListBox.scss';

class ProductList extends Component{
    constructor(props){
        super(props)
    }
    state= {
        list: []
    }

    componentDidMount(){
        axios({
            method: "GET",
            url: "http://localhost:3001/api/product/products"
        })
        .then((products)=>{
            this.setState({list:products.data})
        
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        console.log(this.state.list)
        return (
            <div className="productList">
            <h1>Products</h1>
        
        
            {
            this.state.list.map((product, index) => 
                <Product {...product} productInfo={product}/>
            )}
            </div>
        )
    }
   
}

export default ProductList;