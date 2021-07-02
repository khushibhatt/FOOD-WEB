import React from 'react';
import Roll from 'react-reveal/Roll';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import {card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import "./Tokyo.css";
import {
  BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


class RollExample2 extends React.Component {


  render() {
    return (
      <div style={{ 
        backgroundImage: `url('https://images.wallpaperscraft.com/image/blackberries_raspberries_berries_104785_1920x1080.jpg')`}} >
        <Roll left>
          <h1 style={{color: "pink"}}>Tokyo</h1>

        </Roll>
        <div classname="mapper">
          <div style={{float:"left",wordWrap:"break-word"}} classname="mappera">

            <p>JTokyo (/ˈtoʊkioʊ/ TOH-kee-oh, /-kjoʊ/ -⁠kyoh; Japanese: 東京, Tōkyō [toːkʲoː]<br/>  (About this soundlisten)), officially <br/>the Tokyo Metropolis (Japanese: 東京都, Tōkyō-to),<br/>  
              is the de facto capital[note 1][7] and most populous prefecture of Japan. Located<br/>  at the head of Tokyo Bay, the prefecture<br/> forms part of the Kantō region on the central Pacific coast<br/> 
               of Japan's main island of Honshu. Tokyo is the political and economic center of the<br/>  country, as well as the seat of the Emperor of<br/>  Japan and the national government. As of 2021, the prefecture has an estimated<br/>
                population of 13,960,236.[4] The Greater Tokyo Area is the most populous metropolitan<br/>  area in the world, with more than 37.393 million<br/>  residents as of 2020</p>
             </div>  
        <Imagemapper/>
        </div>
        
        <div style={{clear:"right"}} className="cardsmapper">

          <h2 style={{fload:"left",color: "white"}}> Popular dishes</h2>
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
       
        {image:"https://img.travel.rakuten.co.jp/mytrip/content/gourmet/tabimeshi-tokyo/images/01.jpg",title:"Edome Zushi",text:"One of the best sushi"},
        {image:"https://img.travel.rakuten.co.jp/mytrip/content/gourmet/tabimeshi-tokyo/images/02.jpg",title:"Monjayaki",text:"Monjayaki is best fast food"},
        {image:"https://img.travel.rakuten.co.jp/mytrip/content/gourmet/tabimeshi-tokyo/images/03.jpg",title:"Ramen",text:"Ramen tops the food list"},
        {image:"https://img.travel.rakuten.co.jp/mytrip/content/gourmet/tabimeshi-tokyo/images/04.jpg",title:"Tempura",text:"Summer time food"},
        {image:"https://img.travel.rakuten.co.jp/mytrip/content/gourmet/tabimeshi-tokyo/images/06.jpg",title:"Unaju",text:"Have a break take Unaju"}

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
      <Card.Img  variant="center" src="https://lp-cms-production.imgix.net/2021-02/Tokyo%20Main.jpg" />
      <Card.Body>
      </Card.Body>
    </Card>
  );
}
const Moredeets2=()=>{
    
  const cardinfo=[
     
      {image:"https://img.travel.rakuten.co.jp/mytrip/content/gourmet/tabimeshi-tokyo/images/01.jpg",title:"Edome Zushi",text:"One of the best sushi"},
      {image:"https://img.travel.rakuten.co.jp/mytrip/content/gourmet/tabimeshi-tokyo/images/02.jpg",title:"Monjayaki",text:"Monjayaki is best fast food"},
     

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

export default RollExample2;