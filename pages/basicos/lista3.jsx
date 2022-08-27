function gerarLista() {
	const lista = [];

	for(let i = 1; i <= 50; i++) {
		lista.push(<span>{i},<br /></span>)	
	}
	return lista	
}

export default function lista() {
	return (
		<div>
			{gerarLista()}
		</div>	
	)
}
