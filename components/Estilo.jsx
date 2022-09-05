export default function Estilo(props) {
	const classeAplicada = props.numero >= 0 ? "azul" : "vermelha"

	return (
		<div>
			<h1 style={{
				backgroundColor: props.numero >= 0 ? "#2d2" : "#d22",
				color: props.color,
				textAlign: props.direita ? "right" : "left",	
				textAlign: props.centro ? "center" : "left",	
			}}>
				Texto #01
			</h1>
			<div>
				<h2 className={classeAplicada}>Texto #02</h2>
			</div>
		</div>
	)
}
