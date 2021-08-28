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
						<a href="#">Aprenda no seu ritmo</a>
						<a href="#">Escolha seu caminho de treinamento</a>
						<a href="#">Treine com um expert da AWS</a>
						<a href="#">Obtenha um certificado AWS</a>
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
