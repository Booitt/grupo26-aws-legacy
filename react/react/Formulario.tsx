import React, { useState, useEffect } from "react"
import axios from "axios"
import { CircularProgress } from "@material-ui/core"
import classes from "./styles/Formulario.module.css"
import { LEADS_API_URL } from "./utils/constants"
import { phoneMask, validateEmail } from "./utils/utils"

const initial = {
	nome: "",
	email: "",
	telefone: "",
}

const Formulario: React.FC = () => {
	const [inputs, setInputs] = useState(initial)
	const [inputError, setInputError] = useState(initial)
	const [sending, setSending] = useState(false)
	const [showSucessMsg, setShowSuccessMsg] = useState(false)
	const [display, setDisplay] = useState('none')

	useEffect(() => {
		setDisplay('initial')
	}, [])

	const { nome, email, telefone } = inputs
	const errMsg = Object.values(inputError).filter((v) => v)

	const handleInput = (e: React.ChangeEvent<any>) => {
		const { id, value } = e.target
		setInputs((state) => {
			if (id === "telefone") {
				return { ...state, telefone: phoneMask(state.telefone, value) }
			}
			return { ...state, [id]: value }
		})
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (errMsg) setInputError(initial)
		if (nome.length < 3) {
			return setInputError((state) => ({
				...state,
				nome: "Nome deve ter pelo menos 3 caracteres",
			}))
		}
		if (!email) {
			return setInputError((state) => ({
				...state,
				email: "E-mail não deve estar vazio",
			}))
		}
		if (!validateEmail(email)) {
			return setInputError((state) => ({ ...state, email: "E-mail inválido" }))
		}
		if (telefone && telefone.length < 14) {
			return setInputError((state) => ({
				...state,
				telefone: "Telefone inválido",
			}))
		}
		setSending(true)
		setInputError(initial)
		const data = {
			nome,
			email,
			telefone,
		}
		axios
			.post(LEADS_API_URL, data)
			.then(() => {
				setSending(false)
				setShowSuccessMsg(true)
			})
			.catch(() => {
				setInputError((state) => ({ ...state, email: "E-mail já cadastrado." }))
				setSending(false)
			})
	}
	return (
		<div style={{ width: "100%", margin: "auto", display }}>
			<form className={classes.form} onSubmit={handleSubmit}>
				{!sending && !showSucessMsg && (
					<>
						<div className={classes.inputContainer}>
							<label
								className={`${classes.label} ${inputError.nome &&
									classes.errLabel}`}
								htmlFor="nome"
							>
								Nome*
							</label>
							<input
								className={`${classes.input} ${inputError.nome &&
									classes.inputError}`}
								onChange={handleInput}
								value={nome}
								id="nome"
							/>
						</div>
						<div className={classes.inputContainer}>
							<label
								className={`${classes.label} ${inputError.email &&
									classes.errLabel}`}
								htmlFor="email"
							>
								E-mail*
							</label>
							<input
								className={`${classes.input} ${inputError.email &&
									classes.inputError}`}
								onChange={handleInput}
								value={email}
								id="email"
								type="email"
							/>
						</div>
						<div className={classes.inputContainer}>
							<label
								className={`${classes.label} ${inputError.telefone &&
									classes.errLabel}`}
								htmlFor="telefone"
							>
								Telefone
							</label>
							<input
								className={`${classes.input} ${inputError.telefone &&
									classes.inputError}`}
								onChange={handleInput}
								value={telefone}
								id="telefone"
								style={{ width: "16ch" }}
							/>
						</div>
						{errMsg && <div className={classes.errMsg}>{errMsg}</div>}
						<button className={classes.button}>Cadastrar</button>
					</>
				)}
				{sending && (
					<CircularProgress
						size={60}
						style={{ color: "#ec7211", margin: "auto" }}
					/>
				)}
				{showSucessMsg && (
					<p className={classes.successMsg}>
						Cadastrado com sucesso!
						<br />
						Logo você receberá seu exame
						<br />
						por e-mail.
					</p>
				)}
			</form>
		</div>
	)
}

export default Formulario
