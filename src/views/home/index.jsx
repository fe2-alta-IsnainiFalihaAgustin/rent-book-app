import React, { Component } from "react";
import { Button, } from "react-bootstrap";
import "./home.css"
import CardHome from "./cardHome.jsx";


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTypeBook: [
        'Science',
        'Computer',
        'Kids',
        'Social',
        'Leadership'
      ],
      listBook: [
        {
          title: "Toy Story",
          imgUrl: "https://tse3.mm.bing.net/th?id=OIP.gAHk8pbMiwvMpeWh5rHVzQHaLD&pid=Api&P=0&w=300&h=300"
        },
        {
          title: "Frozen",
          imgUrl: "https://gpu.id/data-gpu/images/uploads/dirimg_buku/re_buku_picture_87398.jpg"
        },
        {
          title: "Coco",
          imgUrl: "https://tse4.mm.bing.net/th?id=OIP.PNsCCXdO4Qs7lI6tTCI0sQHaK5&pid=Api&P=0&w=300&h=300"
        },
        {
          title: "Moana",
          imgUrl: "https://tse1.mm.bing.net/th?id=OIP.jq-EDPcaGaaiMwmBpgy6TwHaLJ&pid=Api&P=0&w=300&h=300"
        },
        {
          title: "Bulan Terbelah di Langit Amerika",
          imgUrl: "http://d.gr-assets.com/books/1401419779l/22374443.jpg"
        },
        {
          title: "Pergi",
          imgUrl: "https://www.goodnewsfromindonesia.id/uploads/post/large-pergi-f4cf01d2dca5f281b8c529a9d8dc6d85.jpg"
        },
        {
          title: "Bulan",
          imgUrl: "https://s0.bukalapak.com/img/579487825/w-1000/Paket_Novel_Bumi_Dan_Bulan___Tere_Liye__Books_shop.jpg"
        },
        {
          title: "Bintang",
          imgUrl: "https://tse3.mm.bing.net/th?id=OIP.gr8-zTJxXkNUamchhasRkAHaK-&pid=Api&P=0&w=300&h=300"
        },
      ]
    };
  }

  render() {
    return (
      <div>
        <div className="w-100 py-5 home-div">

          <div className="home-button w-100 d-flex justify-content-around align-items-center my-4 p-4 border">
            {this.state.listTypeBook.map((el, i) => (
              <Button variant="light" key={i} ><b>{ el }</b></Button>
            ))}
          </div>
         
          <CardHome listBook={this.state.listBook} />
        
        </div>
       <div className="footer"></div> 
      </div>
      
    );
  }
}
export default Home;
