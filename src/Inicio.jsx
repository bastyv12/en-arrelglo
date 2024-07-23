import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Tabla from './Tabla';
import Incertar from './Incertar';



const Inicio = () => {

    
    const url = "http://45.236.130.191/paises.php";
  
      
      
      useEffect(() => {
  
          fetch(url).then(response => response.json()).then((data) => {
            localStorage.setItem("paises", JSON.stringify(data))
          })
  
  
      }, [])
    
    
  return (
    <>
        <div>Inicio</div>

        <Router>
                <div>
                    <nav>
                        <ul>
                            <li><Link to={"/"}>Inicio</Link></li>
                            <li><Link to={"/table"}>Tabla</Link></li>
                            <li><Link to={"/update"}>Insertar</Link></li>
                        </ul>
                    </nav>
                </div>


                <Routes>
                    
                    <Route path="/table" element={<Tabla />}></Route>
                    <Route path="/update" element={<Incertar />}></Route>
                </Routes>
        </Router>

    </>
    
  )
}

export default Inicio