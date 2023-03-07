import style from './Cards.module.css'

export default function Card({
  name, bred_for, onClose, breed_group, image
}) {

   return (
    <div className={style.card}>
      <button onClick={onClose}>X</button>
      <h2>{name}</h2>
      <h3>{bred_for}</h3>
      <h3>{breed_group}</h3>
      <img  src={image} alt={name} className={style.imgNormalizada} /> 
    </div>
   );
}
