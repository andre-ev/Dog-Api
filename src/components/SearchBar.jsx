import { useState } from 'react';

export default function SearchBar({onSearch}) {
  const [dogs, setDogs] = useState('');

  const handleChange = (event) => {
    setDogs(event.target.value);
  }

  return (
    <div>
       <input type='search' value={dogs} onChange={handleChange}/>
       <button onClick={() => onSearch(dogs)}>Agregar</button> 
    </div>
  );
}
