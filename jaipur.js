import React from 'react';
import Roll from 'react-reveal/Roll';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import {card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import "./jaipur.css";
import {
  BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


class RollExample extends React.Component {


  render() {
    return (
      <div style={{ 
        backgroundImage: `url('https://images.wallpaperscraft.com/image/blackberries_raspberries_berries_104785_1920x1080.jpg')`}} >
        <Roll left>
          <h1 style={{color: "pink"}}>Jaipur</h1>

        </Roll>
        <div classname="mapper">
          <div style={{float:"left",wordWrap:"break-word"}} classname="mappera">

            <p>Jaipur, the capital of Rajasthan state in India, was founded in 1727<br />
              by Maharaj Jai Singh II,[1] who ruled Jaipur State from 1699–1744. Initially, <br />
              his capital was Amber,which lies at a distance of 11 km ferest while designing this city of victory.<br />
               He consulted several books on architecture and architects before making the layout of Jaipur.</p>
             </div>  
        <Imagemapper/>
        </div>
        
        <div style={{clear:"right"}} className="cardsmapper">

          <h2 style={{color: "white"}}> Popular dishes</h2>
          <hr></hr>

          <Moredeets/>
          <hr></hr>

        <h3>top picks</h3>
          <Moredeets2/>
      
        </div>
        

        
      </div>
      
     
    );
  }
}
const Moredeets=()=>{
    
    const cardinfo=[
       
        {image:"https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800",title:"Gulab Jamun",text:"Sweet and delicious"},
        {image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2014/10/pav-bhaji-recipe-500x500.jpg",title:"Pav Bhaji",text:"Indias fav dishs"},
        {image:"https://www.lih.travel/wp-content/uploads/2019/02/Lassi-in-Jaipur.jpg",title:"Malai Lassi",text:"malai lassi is delicious"},
        {image:"https://www.lih.travel/wp-content/uploads/2019/02/Pyaz-Kachori-at-Rawat-restaurant-768x403.jpg",title:"Kachori",text:"Kachori is a good snack"},
        {image:"https://www.lih.travel/wp-content/uploads/2019/02/Hibiscus-Iced-Tea-in-Jaipur.jpg",title:"Sharbat",text:"Sharbart is for summer"}

      ];



 const Cardmap=(card,index)=> {
    return (
      <Card style={{ width: '18rem' , height:"18rem", padding:"0rem"}}>
      <Card.Img style={{height:"150px"}} variant="top" src={card.image} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
         {card.text}
        </Card.Text>
        <Link to={`/${card.title}`}>
        <Button variant="primary">More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
       
    
   
  return<div style={{display:'flex',flexDirection:'row'}} className="grid">
  {cardinfo.map(Cardmap)}
  </div>    
};

const Imagemapper=()=> {
    return (
      <Card style={{ float:"right",width: '18rem' , height:"18rem", padding:"0rem"}}>
      <Card.Img  variant="center" src="https://cdn1.goibibo.com/voy_ing/t_fs/rajasthan-jaipur-148046447735o.jpeg" />
      <Card.Body>
      </Card.Body>
    </Card>
  );
}
const Moredeets2=()=>{
    
  const topickcardinfo=[
     
      {image:"https://www.lih.travel/wp-content/uploads/2019/02/Daal-Tadka-768x511.jpg",title:"Daal Tadaka",text:"Sweet and delicious"},
      {image:"https://www.lih.travel/wp-content/uploads/2019/02/Parantha-Recipe-768x512.jpg",title:"Parantha",text:"Indias fav dishs"}

    ];



const Toppicks=(card,index)=> {
  return (
    <Card style={{ width: '18rem' , height:"18rem", padding:"0rem"}}>
    <Card.Img style={{height:"150px"}} variant="top" src={card.image} />
    <Card.Body>
      <Card.Title>{card.title}</Card.Title>
      <Card.Text>
       {card.text}
      </Card.Text>
      <Link to={`/${card.title}`}>
      <Button variant="primary">More</Button>
      </Link>
    </Card.Body>
  </Card>
);
}
     
  
 
return<div style={{display:'flex',flexDirection:'row'}} className="grid">
{topickcardinfo.map(Toppicks)}
</div>    
};




export default RollExample;
