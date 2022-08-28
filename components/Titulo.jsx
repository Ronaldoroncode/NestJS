export default function Titulo(props) {
	if( props.pequeno) {
		return (
			<>
				<p>{props.principal}</p>
				<p>{props.secundario}</p>
			</>
		)	
	} else if(props.medio) {
		return (
			<>
				<h3>{props.principal}</h3>
				<h4>{props.secundario}</h4>
			</>
		)	
	} else {
		return (
			<>
				<h1>{props.principal}</h1>
				<h2>{props.secundario}</h2>
			</>
		)	
	}
}

