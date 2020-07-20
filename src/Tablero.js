import React, {useState,Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './App.css';

import PPTLS from './img/PPTLS.gif';
import central from './img/pptls central.jpg';
import lagarto from './img/lagarto.png';
import lagartoR from './img/lagartoR.png';
import papel from './img/papel.png';
import papelR from './img/papelR.png';
import piedra from './img/piedra.png';
import piedraR from './img/piedraR.png';
import spock from './img/spock.png';
import spockR from './img/spockR.png';
import tijera from './img/tijera.png';
import tijeraR from './img/tijeraR.png';
import play1 from './img/play1.png';
import play2 from './img/play2.png';










export default class Tablero extends Component{

  
    
    render(){
      
     
      return(
        <div>

           <div className="header" > 
              <div className="header" > 
                <h1 clasName="titulo">PLAYER1 </h1>
                 
                    <section  >
                          <button class="boton_p" type="button" id="tijb"  ><img width="100%" src= {piedra}  alt="logo"  /></button>
                          <button class="boton_p" type="button" id="tijb"  ><img width="100%" src= {papel}  alt="logo"  /></button>
                          <button class="boton_p" type="button" id="tijb"  ><img width="100%" src= {tijera}  alt="logo"  /></button>
                          <button class="boton_p" type="button" id="tijb" ><img width="100%" src= {lagarto}  alt="logo"  /></button>
                          <button class="boton_p" type="button" id="tijb"  ><img width="100%" src= {spock}  alt="logo"  /></button>
                    </section>
                <h1 clasName="titulo">PLAYER2 </h1>
                
              </div>
            </div>
            <div className="header">
                      <img className = "boton_p2" src={play1}/>  
                      
                        <img className = "boton_p2" src={play2}/>
            </div>
        </div>
      
      );
    }

  }
