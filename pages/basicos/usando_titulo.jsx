import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
	return (
		<div>
			<Titulo
				principal="Página de Cadastro"
				secundario="Incluir, alterar e excluir cadastro"
				medio={true}
			/>									
			<Titulo
				principal="Página de Login"
				secundario="Informe o seu email e senha"
			/>									
			<Titulo
				principal="Página de Recuperar Senha"
				secundario="Informe senha atual"
				pequeno={true}
			/>									
		</div>
	)
}
