import React from "react";
import {Link} from 'react-router-dom'
import './ProductDetails.scss';

function Product(props){

    return (
        <Link className="links" to={{
            pathname:`/product-detail/${props._id}`,
            state: {
                id: props._id,
                title: props.title,
                description: props.description, 
                category: props.category, 
                customer: props.customer, 
                picture: props.picture}
           }}>
        <div className='productBox'>
       
      
        <div className="boxContent">
        <img className="productPicture" src={props.picture}/>
        <h1 className="listTitle">{props.title}</h1>
        <p className="listCat">{props.category}</p>
        <h3 className="priceList">€{props.price}Hr.</h3>
        </div>
        </div>
        </Link>
    )
}

export default Product

