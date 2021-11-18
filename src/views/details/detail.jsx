import React, { Component } from 'react'
import { Button, Card } from "react-bootstrap";
import "./detail.css"

class Detaill extends Component {
  render() {
    return (

      <div>
        
        <div className="w-100 py-5 home-div">

          <div className="home-button w-100 d-flex justify-content-around align-items-center my-4 p-4 border">
            <Button variant="light"><b>Science</b></Button>
            <Button variant="light"><b>Computer</b></Button>
            <Button variant="light"><b>Kids</b></Button>
            <Button variant="light"><b>Social</b></Button>
            <Button variant="light"><b>Leadership</b></Button>
          </div>
          <div className=" d-flex justify-content-around flex-wrap my-5 p-5 border card-color">
            <Card className="home-card mx-1 mb-5">
            <Card.Img variant="top" src="https://tse3.mm.bing.net/th?id=OIP.gAHk8pbMiwvMpeWh5rHVzQHaLD&pid=Api&P=0&w=300&h=300" height="300px"/>
            <Card.Body>
              <Card.Title>Tittle : Toy Story</Card.Title>
              <Card.Title>ISBN : 1010-10</Card.Title> <br></br>
            <Button variant="outline-dark">RENT</Button>
            </Card.Body>
            </Card>
          </div>

        </div>
        <div className="footer"></div>
      </div>
    )
  }
}
export default Detaill