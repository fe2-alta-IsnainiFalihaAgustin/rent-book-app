import React, { Component } from 'react'
import { Button, FormControl } from "react-bootstrap";
import "./rent.css"
import Navbarr from '../../components/navbar'

class Rentt extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      listTypeBook: [
        'Science',
        'Computer',
        'Kids',
        'Social',
        'Leadership'
      ]
    };
  }

  render() {
    return (
      <div>
        < Navbarr />
        <div className="w-100 py-5 return-div">

          <div className="rent-button w-100 d-flex justify-content-around align-items-center my-4 p-4 border">
            {this.state.listTypeBook.map((el, i) => (
              <Button variant="light" key={i} ><b>{ el }</b></Button>
            ))}
         </div>

          <div className="my-5 p-5 border Table-color">

            <div className="">
              <p>Item:</p>
            </div>
            <div className="p-3 border">
              <h5> <b>Book title: This is Title Book</b> </h5>
              <div> <br></br>
                <h5><b>Return Date: </b><input type="date" /></h5>
              </div>
            </div> <br></br>

            <div>
              <p>Send to:</p>
            </div>
            <div className="p-3 border">
             <FormControl
                type="search"
                placeholder="Street"
                className="me-2"
                aria-label="Search"
              /> <br></br>
             <FormControl
                type="search"
                placeholder="City"
                className="me-2"
                aria-label="Search"
              /> <br></br>
              <FormControl
                type="search"
                placeholder="State / Province"
                className="me-2"
                aria-label="Search"
              /> <br></br>
              <FormControl
                type="search"
                placeholder="Zip Code"
                className="me-2"
                aria-label="Search"
              />
            </div>

          <br></br>
          <Button variant="outline-dark">PROCESS RENT</Button>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    )
  }
}
export default Rentt;