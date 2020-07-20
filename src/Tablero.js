import React, {useState,Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './App.css';
import PPTLS from './img/PPTLS.gif';
import central from './img/pptls central.jpg';
import Animation from './Animation.js'

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



let contador1= 0;
let contador2=0;
var sortres=0
function sortear(){
  sortres=Math.floor(Math.random() * (6- 1) + 1)
 
  return  sortres;
 
};





export default class Tablero extends Component{
    constructor(props){
        super(props);
        this.state={
         p1:0,
         p2:0,
         oponente:play2,
         foto: central,
         iam:play1
       }
       
       
    }
  
    
    render(){
      
     
      return(
        <div>

           <div className="header" > 
              <div className="header" > 
                <h1 clasName="titulo">PLAYER1 {this.state.p1}</h1>
                <h3 className ="game">    PIEDRA PAPEL TIJERA LAGARTO SPOCK    </h3>
                    {/* <section  >
                          <button class="boton_p" type="button" id="tijb" onClick= {this.btn_piedra.bind(this)} ><img width="100%" src= {piedra}  alt="logo"  /></button>
                          <button class="boton_p" type="button" id="tijb" onClick= {this.btn_papel.bind(this)} ><img width="100%" src= {papel}  alt="logo"  /></button>
                          <button class="boton_p" type="button" id="tijb" onClick= {this.btn_tijera.bind(this)} ><img width="100%" src= {tijera}  alt="logo"  /></button>
                          <button class="boton_p" type="button" id="tijb" onClick= {this.btn_lagarto.bind(this)}><img width="100%" src= {lagarto}  alt="logo"  /></button>
                          <button class="boton_p" type="button" id="tijb" onClick= {this.btn_spock.bind(this)} ><img width="100%" src= {spock}  alt="logo"  /></button>
                    </section> */}
                <h1 clasName="titulo">PLAYER2 {this.state.p2}</h1>
                
              </div>
              <div className="header">
                
                  
              </div>
            </div>
            <div className="header">
                      <img className = "boton_p2" src={this.state.iam}/>  
                      
                        <img className = "boton_p2" src={this.state.oponente}/>
            </div>
            
            <div>
                      <button className="fondo" type = "button" width="50%"  alt="logo" onClick= {this.reset.bind(this)} >RESET</button>
            </div>
            <Animation imagen= {this.state.foto} />
            <div className="header2"> 
            <section  >
                          <button class="boton_p" type="button" id="tijb" onClick= {this.btn_piedra.bind(this)} ><img width="100%" src= {piedra}  alt="logo"  /></button>
                          <button class="boton_p" type="button" id="tijb" onClick= {this.btn_papel.bind(this)} ><img width="100%" src= {papel}  alt="logo"  /></button>
                          <button class="boton_p" type="button" id="tijb" onClick= {this.btn_tijera.bind(this)} ><img width="100%" src= {tijera}  alt="logo"  /></button>
                          <button class="boton_p" type="button" id="tijb" onClick= {this.btn_lagarto.bind(this)}><img width="100%" src= {lagarto}  alt="logo"  /></button>
                          <button class="boton_p" type="button" id="tijb" onClick= {this.btn_spock.bind(this)} ><img width="100%" src= {spock}  alt="logo"  /></button>
                    </section>
            </div>
        </div>
      
      );
    }

 reset(){
  this.setState({p1:0, p2:0,iam:play1, oponente: play2,foto:central})
  contador2=0
  contador1=0
 }   
 btn_piedra(){
  setTimeout(this.setState({foto:PPTLS}),1000)
   var election=sortear();
   this.setOponent(election)
  b_piedra(election)
  this.setState({p1:contador1, p2:contador2,iam:piedra,foto:PPTLS})
  
 }

 btn_papel(){
  var election=sortear();
  this.setOponent(election)
  b_papel(election)
  this.setState({p1:contador1, p2:contador2,iam:papel,foto:PPTLS})
 }
 btn_tijera(){
  var election=sortear();
  this.setOponent(election)
  b_tijera(election)
  this.setState({p1:contador1, p2:contador2,iam:tijera,foto:PPTLS})
 }
 btn_lagarto(){
  var election=sortear();
  this.setOponent(election)
  b_lagarto(election)
  this.setState({p1:contador1, p2:contador2,iam:lagarto,foto:PPTLS})
 }
 btn_spock(){
  var election=sortear();
  this.setOponent(election)
  b_spock(election)
  this.setState({p1:contador1, p2:contador2,iam:spock,foto:PPTLS})
 }
 setOponent(op){
   switch(op){
case 1:
  this.setState({oponente:piedraR})
  break;
case 2:
  this.setState({oponente:papelR}) 
  break;
case 3:
  this.setState({oponente:tijeraR})
  break;
case 4:
  this.setState({oponente:lagartoR})
  break;
case 5:
  this.setState({oponente:spockR})
  break;
   }
 }

};



function perder(){
  
  contador2 = contador2+1
}
function ganar(){
  
  contador1 = contador1+1
 
};

function  b_piedra(you){
  
      if(you==1){
        // emp,
      
      }
      if(you==2 ||you==5){
        // winP2,
        perder()
      }
       if(you==3||you==4){
        // winP1,
      ganar()
      }
   
    };

    function  b_papel(you){
  
      if(you==2){
        // emp,
      
      }
      if(you==3||you==4){
        // winP2,
        perder()
      }
       if(you==1||you==5){
        // winP1,
      ganar()
      }

    }

    function  b_tijera(you){

      if(you==1||you==5){
        // winP2,
        perder()
      }
       if(you==2||you==4){
        // winP1,
      ganar()
      }
       if(you==3){
        // emp,
      
      }
  
    }   

    function  b_lagarto(you){
  
      if(you==4){
        // emp,
      
      }
      if(you==1||you==3){
        // winP2,
        perder()
      }
       if(you==2||you ==5){
        // winP1,
      ganar()
      }
  
    }

    function  b_spock(you){
  
      if(you==5){
        // emp,
      }
      if(you==2|| you==4){
        // winP2,
        perder()
      }
       if(you==1||you==3){
        // winP1,
      ganar()
      }
    
    }

