import React from "react"
import Titulo from "../Titulo"
import Paragrafo from "../Paragrafo"
import { Card, LinkBotao } from "./styles"

const Projeto = () => (
	<Card>
		<Titulo>Nome do Projeto</Titulo>
		<Paragrafo tipo="secundario">
			Lista de tarefas feita com VUEjs
		</Paragrafo>
		<LinkBotao>Visualizar</LinkBotao>
	</Card>
)

export default Projeto
