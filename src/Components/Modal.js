import React from 'react'
import './Modal.css'
import jwtDecode from 'jwt-decode';
import { useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
function Modal({ setOpenModal }) {
  const [userData , setUserData]= useState(false) ; 
  const [n,setN]=useState(1); 
  const navigate = useNavigate();
  function handleCallbackResponse(response)  {
    console.log("Encoded JWT ID token: " + response.credential ) ; 
    var userObject = jwtDecode(response.credential);
    console.log(userObject); 
    setUserData(userObject); 
  }
  useEffect( () => {
      /* global google */
      google.accounts.id.initialize ({
      client_id:"608315267969-128kfg6d9sdj20l40k7s5vchb7inbvlb.apps.googleusercontent.com",
      callback : handleCallbackResponse
  }) ; 
      google.accounts.id.renderButton(
      document.getElementById ("sighInDiv"),
      { theme: "outline" , size : "large" }
  ); 
  
  google.accounts.id.prompt(); 
  
  } , []);  


  /*fetch("http://localhost:5000/authe",  {
    method: 'POST' , 
    headers : {
      'Content-Type' :'application/json'
    }, 
    body: JSON.stringify(userData)
   }) 
   .then(res=> res.json())
   .then( userData => console.log(userData) )
  .catch (error => {
    console.error(error)
  }); */
  return (
    <div className="Modal">
      <div className="modalBackground">
      <div className="modalContainer">
      <div className="close">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Créer votre compte</h1>
        </div> 

        <h6>En cliquant sur Inscrivez vous, vous indiquez que vous avez lu, compris et accepté les conditions d'utilisation de AQAR.</h6>
      
      <div className="google" id="sighInDiv" >
       { n===1 ?
       navigate('/main') : navigate('/') }
         
      </div>
      
      </div>
      </div>
    </div>
  );
}
 

export default Modal
