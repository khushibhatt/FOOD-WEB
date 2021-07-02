import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol,MDBIcon} from "mdbreact";
import './homepage.css';
import LottieAnimation from '../Lottie';
import home from '../lottie/logo.json';
import home2 from '../lottie/search.json';
import Roll from 'react-reveal/Roll';
import {
  BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

  const people = [
    "Jaipur",
    "Tokyo",
    "Bikaner",
    "Hawai",
    "Nagaland",
    "Germany",
  ];


const SearchPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = people.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
    return (
      <div className="search12" >
      <MDBCol md="6">
        <form className="form-inline">
          <MDBIcon icon="search" />
          <input className="form-control form-control-sm ml-3 w-75" input id="myInput" type="text" placeholder="Search" aria-label="Search" value={searchTerm}  onChange={handleChange} />
        </form>
      </MDBCol>
      <div className="searchbutton">
     <Link  to={`/${searchTerm}`}>
        
    <button type="button" className="btn btn-info">Search</button>
    

     </Link>
     
      </div>
      <div className="mapping">
      <ul>
         {searchResults.map(item =>(
          <li>{item}</li>

        ))}
      </ul>
      </div>
    
    </div>
      
      
      )
      }
  
    const Example = () => {
  
      return ( 
           <div className='example'> 
             <LottieAnimation lotti={home} height={300} width={300} />
             </div>
             
          
           
      )
  }
  
  function Example2 (){
  
    return ( 
         <div className='example2'> 
           <LottieAnimation id="searchicon" lotti={home2} height={50} width={50}/>
            
  
           </div> )
          
           


  }

  
  const Heading= () => {
  
    return ( 
         <div className='heading'> 
         <Roll left>
         <h1>FoOd WeB</h1> 
         
        </Roll>
        </div>
    )
  }
  
  

  
   function App() {
      return (
      <div className='App'> 
        <Example/>
        <Example2/>
        <Heading/>
        <SearchPage/>
      </div>
      )
    }
  
    
  export default App;
