import React from 'react'

import style from './style.module.css'



const Formulario = () => {

  return (
    <form className={style.form}>
      <div className={style.inputs}>
        <label className={style.label}>Nome</label>
        <input className={style.input} type="text"/>
      </div>
      <div className={style.inputs}>
        <label className={style.label}>Telefone</label>
        <input className={style.input} type="text"/>
      </div>
      <div className={style.inputs}>
        <label className={style.label}>E-mail</label>
        <input className={style.input} type="email" />
        <input className={style.submit} type="submit" value="Cadastrar" />
      </div>
    </form>
  )
}

export default Formulario
