import React, { Component } from "react";
import {Link} from "react-router-dom"
import Typed from "typed.js";
import "./Title.scss";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tagline: "",
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value // dynamic key & value to target imputfield = i.e. name Name : Value = input
    });
  }
  handleSubmit(e) {
    e.preventDefault(); // prevent the default behaviour of the form. Being: redirecting to another route
  }
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      loop: true,
      strings: strings,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 3000,
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div className="boxTitle">
        <div className="wrap">
          <h1 id="rentTitle">Rent a</h1>
          <div className="type-wrap">
            <span
              style={{ whiteSpace: "pre" }}
              ref={el => {
                this.el = el;
              }}
            />

            <div className="searchBar">
              <form onSubmit={""}>
                <input
                  className="searchValue"
                  onChange={this.handleChange}
                  value={this.state.value}
                  placeholder="Product or keyword"
                  type="text"
                  name="name"
                />
                

               
              </form>


              <Link to="/search"
              className="submitButton">
              <input
              className="submitButton"
              onChange={"this.handleChange"}
              type="submit"
            />
            </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
