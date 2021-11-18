import React, { Component } from 'react'
import { Button, Table } from "react-bootstrap";
import "./return.css"

class Returnn extends Component {

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
        
        <div className="w-100 py-5 return-div">

        <div className="return-button w-100 d-flex justify-content-around align-items-center my-4 p-4 border">
            {this.state.listTypeBook.map((el, i) => (
              <Button variant="light" key={i} ><b>{ el }</b></Button>
            ))}
         </div>

          <div className=" d-flex justify-content-between flex-wrap my-5 p-5 border Table-color">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Due Date</th>
                <th>Return</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bulan Terbelah di Langit Amerika</td>
                <td>01-12-2021</td>
                <td><Button variant="outline-secondary">Return</Button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Moana</td>
                <td>01-12-2021</td>
                <td><Button variant="outline-secondary">Return</Button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Toy Story</td>
                <td>01-12-2021</td>
                <td><Button variant="outline-secondary">Return</Button></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Spongebob Squarepants</td>
                <td>01-12-2021</td>
                <td><Button variant="outline-secondary">Return</Button></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Frozen</td>
                <td>01-12-2021</td>
                <td><Button variant="outline-secondary">Return</Button></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Dilan 1990</td>
                <td>01-12-2021</td>
                <td><Button variant="outline-secondary">Return</Button></td>
              </tr>
              <tr>
                <td>7</td>
                <td>Toy Story 3</td>
                <td>01-12-2021</td>
                <td><Button variant="outline-secondary">Return</Button></td>
              </tr>
              <tr>
                <td>8</td>
                <td>Coco</td>
                <td>01-12-2021</td>
                <td><Button variant="outline-secondary">Return</Button></td>
              </tr>
            </tbody>
          </Table>
          </div>

        </div>
        <div className="footer"></div>
      </div>
    )
  }
}
export default Returnn