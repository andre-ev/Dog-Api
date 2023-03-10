import style from "./Cards.module.css";
import { Link } from "react-router-dom";

export default function Card({
  id, name, bred_for, onClose, breed_group, image
}) {

   return (
      <div className={style.card}>
        <button onClick={onClose}>X</button>
        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
        <h3>{bred_for}</h3>
        <h3>{breed_group}</h3>
        <img  src={image} alt={name} className={style.imgNormalizada} /> 
      </div>
   );
}
