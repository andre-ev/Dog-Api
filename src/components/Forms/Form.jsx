import { useState } from "react";

const Form = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = userState('');

  const validate = () => {
    if(/\S+@\S+\.\S+/.test(form.email)){
      setErrors('');
    } else {
      setErrors('El email es inválido')
    }
  }

  const handleFormChange = (event) => {
    /* const name = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [name]: value
    }) */
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Info enviada correctamente');
    setForm({
      email: '',
      password: ''
    })
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Holi, soy el Form</h1>
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" value={form.email} 
          autoComplete="off" onChange={handleFormChange}/>
        <br />
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" value={form.password}
          autoComplete="off" onChange={handleFormChange}/>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Form;
