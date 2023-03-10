import style from "./Detail.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
  const { detailId } = useParams();
  const [ breed, setBreed ] = useState({});

  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/breeds/${detailId}`)
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
          setBreed(data);
          fetch(`https://api.thedogapi.com/v1/images/${data.reference_image_id}`)
          .then(response => response.json())
          .then(char => {
            if(char !== undefined) {
                dog.image = char.url; 
            } else {
                window.alert("No se pudo obtener la url de la imagen.");
            }
          })
          .catch(error => "No hay personajes con ese ID")
          .finally(() => {
            setBreed(dog);
          });
        } else {
          window.alert("No hay personajes con ese ID");
        }
    })
    .catch((error) => {
      window.alert("No hay personajes con ese ID")
    });
    return setBreed({});
  }, [detailId])

  return(
    <div className={style.card}>
      <h2>Detail</h2>
      <button>
        <Link to="/home">Home</Link>
      </button>
      <h1>{breed?.name}</h1>
      <p>{breed?.bread_for}</p>
      <p>{breed?.breed_group}</p>
      <img src={breed?.image} alt={breed.name} className={style.imgNormalizada} />
    </div>
  );
}

export default Detail;
