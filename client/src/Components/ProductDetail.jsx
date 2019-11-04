import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import qs from 'querystring';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import './ProductDetails.scss';

const moment = extendMoment(Moment);

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      rentings: []
    };
  }

  startDateChanger = date => {

    this.setState({
      startDate: date
    });
  };
  endDateChanger = date => {
    this.setState({
      endDate: date
    });
  };
  componentDidMount() {

    axios({
      url: `http://localhost:3001/api/rent/list/${this.props.history.location.state.id}`,
      method: "GET"
    })
    .then((response)=> {
      var days = []
      for(let i = 0; i < response.data.length; i++) {
        if(response.data[i].startingTime && response.data[i].startingTime) {
          const start  = new Date(response.data[i].startingTime);
          const end    = new Date(response.data[i].endingTime);
          const range = moment.range(start, end);
          for (let day of range.by('day')) {
            days.push(day._d);
          }
        }
      }
      this.setState({
        rentings: response.data,
        excludeDates: days
      })
    })
    .catch((err)=> {
      this.setState({
        err: err.message
      })
    })
  }

  submitHandler = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API}/api/rent/create`,
      data: qs.stringify({
        startDate: this.state.startDate.toDateString(),
        endDate: this.state.endDate.toDateString(),
        productId: this.props.location.state.id,
        startingTime: this.state.startDate.toTimeString(),
        endingTime: this.state.endDate.toTimeString()
      }),
      withCredentials: true,
    })
      .then(response => {
        this.props.history.push("/"); // redirect to /home
        console.log("signed in");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="outBox">
      <img className="productPictureDetail" src={this.props.location.state.picture}/>
      <div className="boxBox">
      <div className="box">
      
        <h1>{this.props.location.state.title}</h1>
        <p>{this.props.location.state.description}</p>
        <h1>€{this.state.rentings[0] ? this.state.rentings[0].product.price : "Loading"} per Hr</h1>
        
        <h4>From:</h4>
        <form
          className="inputForm"
          onSubmit={this.submitHandler}
          className="inputForm"
        >
          <DatePicker
            name="startDate"
            excludeDates={this.state.excludeDates}
            selected={this.state.startDate}
            onChange={date => this.startDateChanger(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
            inline
          /></form>
          <form
          className="inputForm"
          onSubmit={this.submitHandler}
          className="inputForm"
        >
          <h4>to:</h4>
          <DatePicker
            excludeDates={this.state.excludeDates}
            name="endDate"
            selected={this.state.endDate}
            onChange={date => this.endDateChanger(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
            inline
          />
          <div className="buttonBox">
          <button id="buttonBlack" type="submit" Value="Submit">Rent</button>
          </div>
        </form>
      </div>
      </div>
      </div>
    );
  }
}

// props can be send to as many children as you want.
