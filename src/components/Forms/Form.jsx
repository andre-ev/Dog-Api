import { useState } from "react";

const Form = () => {

  const [form, setForm] = useState({
    nombre: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const validate = () => {
    if(/\S+@\S+\.\S+/.test(form.email)){
      console.log(/\S+@\S+\.\S+/.test(form.email));
    } else {
      setErrors({
        ...errors,
        email: 'Formato de correo inválido'
      });
    }

    if(form.password.includes('1')) {
      setErrors({
        ...errors,
        password: 'No puede ir el numero 1'
      })
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

    validate();
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
        <h1>Formulario</h1>
        <label htmlFor="nombre">Nombre: </label>
        <input type="text" name="nombre" value={form.nombre} 
          autoComplete="off" onChange={handleFormChange}/>
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" value={form.email} 
          autoComplete="off" onChange={handleFormChange}/>
        {errors.email !== '' ? <p>{errors.email}</p> : ''}
        <br />
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" value={form.password}
          autoComplete="off" onChange={handleFormChange}/>
        {errors.password !== '' ? <p>{errors.password}</p> : ''}
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Form;
