import React, {useState,Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './App.css';
import PPTLS from './img/PPTLS.gif';
import central from './img/pptls central.jpg';
import Animation from './Animation.js'
import w1 from './img/w1.png';
import w2 from './img/w2.png';
import GANADOR from'./img/GANADOR.png';
import PERDEDOR from './img/PERDEDOR.png';

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
         iam:play1,
         reset:"RESET"
       }
       
       
    }
  
    
    render(){
      
     
      return(
        <div>

           <div className="header" > 
              <div className="header" > 
                <h1 clasName="game">PLAYER1 {this.state.p1}</h1>
                <h3 className ="game">    PIEDRA PAPEL TIJERA LAGARTO SPOCK    </h3>
                <h1 clasName="game">COMPUTER {this.state.p2}</h1>
                
              </div>
            </div>
            <div className="header">
                      <img className = "boton_p2" src={this.state.iam}/>  
                      
                        <img className = "boton_p2" src={this.state.oponente}/>
            </div>
            <Animation imagen= {this.state.foto} />
            <div>
                      <button className="fondo" type = "button" width="50%"  alt="logo" onClick= {this.reset.bind(this)} >{this.state.reset}</button>
            </div>
            
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

    gameWin(){
        if(this.state.p1>=5){
          setTimeout(()=>{this.w_play1()},700)
        }
          if(this.state.p2>=5){
            setTimeout(()=>{this.w_play2()},700)
          }
    }
    w_play1(){
      this.reset()
    this.setState({foto: GANADOR,reset: "START NEW GAME"})
    }

    w_play2(){
      this.reset()
    this.setState({foto: PERDEDOR,reset: "START NEW GAME"})
    }

 reset(){
  this.setState({p1:0, p2:0,iam:play1, oponente: play2,foto:central, reset:"RESET"})
  contador2=0
  contador1=0
 }   
 btn_piedra(){
  
 this.setState({foto:PPTLS,iam:play1, oponente: play2})
 
  setTimeout(()=>{this.jugadaPiedra()},500)

 }
jugadaPiedra(){
   var election=sortear();
   this.setOponent(election)
  this.b_piedra(election)
  this.setState({p1:contador1, p2:contador2,iam:piedra});
  this.gameWin()

}


 btn_papel(){
  this.setState({foto:PPTLS,iam:play1, oponente: play2})
  setTimeout(()=>{this.jugadaPapel()},500)
  

 }

 jugadaPapel(){
  var election=sortear();
  this.setOponent(election)
  this.b_papel(election)
  this.setState({p1:contador1, p2:contador2,iam:papel})
  this.gameWin()
 }

 btn_tijera(){
  this.setState({foto:PPTLS,iam:play1, oponente: play2})
  setTimeout(()=>{this.jugadaTijera()},500)
 
 }

 jugadaTijera(){
 var election=sortear();
  this.setOponent(election)
  this.b_tijera(election)
  this.setState({p1:contador1, p2:contador2,iam:tijera})
  this.gameWin()
 }

 btn_lagarto(){
  this.setState({foto:PPTLS,iam:play1, oponente: play2})
  setTimeout(()=>{this.jugadaLagarto()},500)
 
 }

 jugadaLagarto(){
  var election=sortear();
  this.setOponent(election)
  this.b_lagarto(election)
  this.setState({p1:contador1, p2:contador2,iam:lagarto})
  this.gameWin()
  
 }
 
 btn_spock(){
  this.setState({foto:PPTLS,iam:play1, oponente: play2})
  setTimeout(()=>{this.jugadaSpock()},500)
  
 }

 jugadaSpock(){
    var election=sortear();
  this.setOponent(election)
  this.b_spock(election)
  this.setState({p1:contador1, p2:contador2,iam:spock})
  this.gameWin()
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



 perder(){
  this.setState({foto:w2});
  contador2 = contador2+1
}
ganar(){
  this.setState({foto:w1});
  contador1 = contador1+1
 
};

 b_piedra(you){
  
      if(you==1){
        // emp,
        this.setState({foto:central});
      }
      if(you==2 ||you==5){
        // winP2,
        this.perder()
      }
       if(you==3||you==4){
        // winP1,
        this.ganar()
      }
   
    };

 b_papel(you){
  
      if(you==2){
        // emp,
        this.setState({foto:central});
      }
      if(you==3||you==4){
        // winP2,
        this.perder()
      }
       if(you==1||you==5){
        // winP1,
        this.ganar()
      }

    }

 b_tijera(you){

      if(you==1||you==5){
        // winP2,
        this.perder()
      }
       if(you==2||you==4){
        // winP1,
        this.ganar()
      }
       if(you==3){
        // emp,
        this.setState({foto:central});
      }
  
    }   

  b_lagarto(you){
  
      if(you==4){
        // emp,
        this.setState({foto:central});
      }
      if(you==1||you==3){
        // winP2,
        this.perder()
      }
       if(you==2||you ==5){
        // winP1,
        this.ganar()
      }
  
    }

  b_spock(you){
  
      if(you==5){
        // emp,
        this.setState({foto:central});
      }
      if(you==2|| you==4){
        // winP2,
        this.perder()
      }
       if(you==1||you==3){
        // winP1,
        this.ganar()
      }
    
    }

 


};



// function perder(){
  
//   contador2 = contador2+1
// }
// function ganar(){
  
//   contador1 = contador1+1
 
// };

// function  b_piedra(you){
  
//       if(you==1){
//         // emp,
      
//       }
//       if(you==2 ||you==5){
//         // winP2,
//         perder()
//       }
//        if(you==3||you==4){
//         // winP1,
//       ganar()
//       }
   
//     };

//     function  b_papel(you){
  
//       if(you==2){
//         // emp,
      
//       }
//       if(you==3||you==4){
//         // winP2,
//         perder()
//       }
//        if(you==1||you==5){
//         // winP1,
//       ganar()
//       }

//     }

//     function  b_tijera(you){

//       if(you==1||you==5){
//         // winP2,
//         perder()
//       }
//        if(you==2||you==4){
//         // winP1,
//       ganar()
//       }
//        if(you==3){
//         // emp,
      
//       }
  
//     }   

//     function  b_lagarto(you){
  
//       if(you==4){
//         // emp,
      
//       }
//       if(you==1||you==3){
//         // winP2,
//         perder()
//       }
//        if(you==2||you ==5){
//         // winP1,
//       ganar()
//       }
  
//     }

//     function  b_spock(you){
  
//       if(you==5){
//         // emp,
//       }
//       if(you==2|| you==4){
//         // winP2,
//         perder()
//       }
//        if(you==1||you==3){
//         // winP1,
//       ganar()
//       }
    
//     }

