import Card from './Card';
import style from './Cards.module.css'

export default function Cards({dogs, onClose}) {
   const sliceDogs = dogs.slice(0, 10);

   return(
    <div className={style.contenedor}>
      {
        sliceDogs.map(({
          id, name, bred_for, breed_group, image
        }) => {
          return(
            <div>
              <Card
                key={id}
                name={name}
                bred_for={bred_for}
                breed_group={breed_group}
                image={image}
                onClose={() => onClose(id)}
              />
            </div>
          );
        })
      }
    </div>
   );
}
