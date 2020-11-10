import React from "react";
import PropTypes from "prop-types";


function Profil(props) {
    
    const{
        user:{FullName,Bio,Profission},children
    }=props;


    const myFunction=()=>alert("hello");


    return (
      <div  onMouseEnter ={myFunction} >
             {children}
        <h1>  full name:{FullName}</h1> 
        <h1> bio:{Bio} </h1>
        <h1>profission:{Profission} </h1>


        
      </div>
    );
  }
   Profil.prototype={ 
    FullName:PropTypes.string,
    Bio:PropTypes.string,
    Profission:PropTypes.string

   };
  
  export default Profil;
  