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
          <h4>Bienvenidos a</h4>
    <h3 className ="game">PIEDRA PAPEL TIJERA LAGARTO SPOCK</h3>
          <Tablero/>
       
        </div>
      
     
      </header>
     
    </div>
    


  );
  

};

ReactDOM.render(<app/>,  document.getElementById('root'))

export default App;
