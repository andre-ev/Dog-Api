import "./App.css";
import Navs from "./components/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Forms/Form";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App () {
  const [dogs, setDogs] = useState([]);

  const onSearch = (dogs) => {
    fetch(`https://api.thedogapi.com/v1/breeds/${dogs}`)
    .then((response) => response.json())
    .then((data) => {
        if(data.name) {
          const dog = {
            id: data.id,
            name: data.name,
            bread_for: data.bread_for,
            breed_group: data.breed_group,
            image: ""
          };
          fetch(`https://api.thedogapi.com/v1/images/${data.reference_image_id}`)
          .then(response => response.json())
          .then(data => {
            if(data !== undefined) {
                dog.image = data.url;
            } else {
                window.alert("No se pudo obtener la url de la imagen.");
            }
          })
          .catch(error => console.error(error))
          .finally(() => {
            setDogs((oldDogs) => [...oldDogs, dog]);
          });
        } else {
          window.alert("No hay personajes con ese ID");
        }
    })
    .catch(error => console.error(error));
  };

  const onClose = (id) => {
    setDogs(
      dogs.filter((dog) => dog.id !== id)
    )
  };

  return (
    <div className="App" >
      <div style={{ padding: "25px" }}>
        <Navs onSearch={onSearch}/>
        <Routes>
          <Route 
            path="home" 
            element={<Cards dogs={dogs} onClose={onClose} />}
          />
          <Route path="about" element={<About />} />
          <Route path="detail/:detailId" element={<Detail />} />
          <Route path="form" element={<Form />} />
        </Routes>
      </div>
      <br />
      <footer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#00cba9" fill-opacity="0.7" d="M0,128L24,112C48,96,96,64,144,90.7C192,117,240,203,288,234.7C336,267,384,245,432,213.3C480,181,528,139,576,138.7C624,139,672,181,720,202.7C768,224,816,224,864,240C912,256,960,288,1008,293.3C1056,299,1104,277,1152,240C1200,203,1248,149,1296,128C1344,107,1392,117,1416,122.7L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
        </svg>
      </footer>
    </div>
  )
}

export default App;
