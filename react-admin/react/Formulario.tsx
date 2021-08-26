import React, {useState} from 'react'
import axios from 'axios'
import style from './style.module.css'

interface FormularioProps{
  width: number;
  height: number;
}

const Formulario: StorefrontFunctionComponent<FormularioProps> = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  
  const handleNome = (e:React.ChangeEvent<any>) =>{ 
    setNome(e.target.value)
  }

  const handleTelefone = (e: React.ChangeEvent<any>) =>{ 
    setTelefone(e.target.value)
  }

  const handleEmail = (e: React.ChangeEvent<any>) =>{ 
    setEmail(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault;
    const data = {
      "nome": `${nome}`,
      "telefone": `${telefone}`,
      "email": `${email}`
    };
    axios.post('https://7slql6j8i0.execute-api.us-east-2.amazonaws.com/leads', data)
          .catch((err) => console.log(err.message))
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.inputs}>
        <label className={style.label}>Name</label>
        <input className={style.input} type="text" required onChange={handleNome} value={nome}/>
      </div>
      <div className={style.inputs}>
        <label className={style.label}>Phone</label>
        <input className={style.input} type="text" onChange={handleTelefone} value={telefone}/>
      </div>
      <div className={style.inputs}>
        <label className={style.label}>E-mail</label>
        <input className={style.input} type="email" required onChange={handleEmail} value={email}/>
        <input className={style.submit} type="submit" value="Cadastrar" />
      </div>
    </form>
  )
}

export default Formulario
