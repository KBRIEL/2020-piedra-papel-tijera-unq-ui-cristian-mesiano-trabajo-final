import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './App.css';

import PPTLS from './img/PPTLS.gif';
import central from './img/pptls central.jpg';









let foto=central


export default class Animation extends Component{
 
    constructor(props){
        super(props); 

    

        this.state= {
          mov: false,
                    
        };
         
    }

  
      push(){
        if(this.state.mov){
          this.foto=PPTLS
        }
      
      }
    setFoto(){
      if(foto==central){
        this.foto=PPTLS
      }
      if(foto==PPTLS){
        this.foto=central
      }
      
    }
    
      
     
   
    render(){
     
       
      const { imagen}= this.props;
      return(
       
        <div className = "Animation">      
            <img type = "button" width="30%" src={imagen}  ></img>
        <div>
  
</div>
      </div>
      
      )
    }
 
}



  
