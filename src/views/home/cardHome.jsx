import React, { Component } from "react";
import { Card } from "react-bootstrap"

class CardHome extends Component {

  // componentDidMount() {
  //   console.log(this.props);
  // }

  render() {
    return (

      <div className=" d-flex justify-content-between flex-wrap my-5 p-5 border card-color">

        {this.props.listBook.map(({ title, imgUrl }, i) => (
          <Card className="home-card mx-1 mb-5" key={i}>
            <Card.Img variant="top" src={imgUrl}/>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
              </Card.Body>
          </Card>
        ))}

      </div>
    );
  }
}
export default CardHome;