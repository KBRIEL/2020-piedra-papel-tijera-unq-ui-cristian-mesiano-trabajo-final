import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './App.css';
import Tablero from './Tablero';










function App() {

 
  return (
    
    <div className="App" >      
      <header className="App-header">
        <div className = "caja">
          
   
          <Tablero/>
       
        </div>
      
     
      </header>
     
    </div>
    


  );
  

};

ReactDOM.render(<app/>,  document.getElementById('root'))

export default App;
