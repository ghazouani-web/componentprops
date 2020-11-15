import './App.css';
import React from "react";
import Profil from "./Profile/Profil";




function App() {
  const listPerson=[{FullName:6, Bio:"bio" ,Profission:"Devlopper"},
  {FullName:" tayachi yosra " , Bio:"bio" ,Profission:"engineer"},
  {FullName:"youssef rammeh" , Bio:"bio" ,Profission:"programmer"},

];



const styleObject={color: "red ", textAlign:'center',  border:"solid"}



  return (
    <div className="App"    style={styleObject}>
     
{listPerson.map((currentUser,i)=>(<Profil    key={i} user={currentUser}  children={ <img src="/photo.png"  style={styleObject} /> }  /> ))}


        
    </div>
  );
}



export default App;
