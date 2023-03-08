import Card from './Card';
import style from './Cards.module.css'

export default function Cards({dogs, onClose}) {

   return(
    <div className={style.contenedor}>
      {
        dogs.map(({
          id, name, bred_for, breed_group, image
        }) => {
          return(
              <Card
                key={id}
                name={name}
                bred_for={bred_for}
                breed_group={breed_group}
                image={image}
                onClose={() => onClose(id)}
              />
          );
        })
      }
    </div>
   );
}
