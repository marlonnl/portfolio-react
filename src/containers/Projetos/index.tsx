import React from "react";
import Titulo from "../../components/Titulo";
import Projeto from "../../components/Projeto";
import { ListaDeProjetos } from "./styles";

const Projetos = () => (
	<section>
		<Titulo fontSize={16}>Projetos</Titulo>
		<ListaDeProjetos>
			<li>
				<Projeto />
			</li>
			<li>
				<Projeto />
			</li>
			<li>
				<Projeto />
			</li>
			<li>
				<Projeto />
			</li>
		</ListaDeProjetos>
	</section>
)

export default Projetos
