import React from "react"
import Titulo from "../../components/Titulo"
import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import { BotaoTema, Descricao, SidebarContainer } from "./styles"

const Sidebar = () => (
	<aside>
		<SidebarContainer>
			<Avatar />
			<Titulo fontSize={20}>Marlonn</Titulo>
			<Paragrafo tipo="secundario" fontSize={16}>
				marlonnl
			</Paragrafo>
			<Descricao tipo="principal" fontSize={12}>
				Programador e bioquímico
			</Descricao >

			<BotaoTema>Alterar tema</BotaoTema>
		</SidebarContainer>
	</aside>
)

export default Sidebar
