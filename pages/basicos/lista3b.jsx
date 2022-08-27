function gerarLista(final = 10) {
	const lista = []
	for(let i = 1; i <= final; i++) {
		lista.push(<span>{i}</span>)
	} 
	return lista
}

export default function lista() {
	return (
		<div>
			<div>
				{gerarLista(20)}
			</div>
			<div>
				{gerarLista(2)}
			</div>
			<div>
				{gerarLista(5)}
			</div>
			<div>
				{gerarLista(7)}
			</div>
		</div>
	)
}
