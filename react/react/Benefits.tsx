import React, { useEffect } from "react"
import classes from "./styles/Benefits.module.css"
import { useState } from "react"

const Benefits: React.FC = () => {
	const [display, setDisplay] = useState("none")
	useEffect(() => {
		setDisplay("initial")
	}, [])
	return (
		<div style={{ display, marginBottom: "5rem" }}>
			<div className={classes.container}>
				<div className={classes.background}>
					<div className={classes.content}>
						<p>➤ Aprenda no seu ritmo</p>
						<p>➤ Escolha seu caminho de treinamento</p>
						<p>➤ Treine com um expert da AWS</p>
						<p>➤ Obtenha um certificado AWS</p>
					</div>
					<div className={classes.link}>
						<a href="#">Saiba mais sobre a AWS</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Benefits
