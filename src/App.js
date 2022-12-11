import "./App.css";
import React from 'react';
import NavBar from './components/NavBar/NavBar'
import Card from "./components/Card/Card";
import logo from "./logo.svg";

function App() {
  let styles = {
    color: "white",
    backgroundColor: "blue"
  };

  const cards = [
    {
      titulo:"Hola soy componente",
      descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum eius excepturi quo in quibusdam?",
      img:"https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg",
      btnText:"Comprar Juego",
      btnClassName:"btn btn-danger fs-1"
    },
    {
      titulo:"Hola soy componente 2",
      descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum eius excepturi quo in quibusdam?",
      img:"https://cdn2.unrealengine.com/fortnite-chapter-3-season-1-battle-pass-1920x1080-2d1c65b223c1.jpg",
      btnText:"Comprar Demo"
    }
  ]
  return (      
        <div>

          <main>
           <NavBar/>          
           
           <div className="d-flex">
           {cards.map(({titulo,descripcion,img,btnText,btnClassName},index) => 
           (<Card
           key={index}
           titulo={titulo} 
           descripcion={descripcion} 
           img={img} 
           btnText={btnText} 
           btnClassName={btnClassName}
           />)
           )}
           </div>

          </main>
                   
        </div>
      
  );
  
}
export default App;

