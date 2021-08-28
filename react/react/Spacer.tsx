import React from "react"

interface SpacerProps {
	horizontalSpace?: string
	verticalSpace?: string
}

const Spacer: StorefrontFunctionComponent<SpacerProps> = ({
	horizontalSpace = "",
	verticalSpace = "",
}) => {
	return (
		<div
			style={{ width: horizontalSpace, height: verticalSpace}}
		/>
	)
}

export default Spacer

Spacer.schema = {
	type: "object",
	properties: {
		horizontalSpace: {
			title: "Espaço horizontal",
			description: "Largura para espaçar um bloco de outro",
			type: "string",
			default: null,
		},
		verticalSpace: {
			title: "Espaço vertical",
			description: "Altura para espaçar um bloco de outro",
			type: "string",
			default: null,
		},
	},
}
