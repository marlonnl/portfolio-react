import styled from 'styled-components'
import React  from 'react'

type BotaoProps = {
	principal: boolean
	fontSize: string
}

const Botao = styled.button<BotaoProps>`
	background-color: ${props => (props.principal ? 'green' : 'blue')};
	font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
	background-color: red;
	color: #fff;

	span {
		text-decoration: line-through;
	}
`

function Teste() {
	return (
		<>
			<Botao fontSize="18px" principal>Enviar</Botao>
			<Botao fontSize="24px" principal={false}>Cancelar</Botao>

			<BotaoPerigo as='a' principal fontSize='24px'>
				<span>Testando o span</span>
			</BotaoPerigo>
		</>
	)
}

export default Teste
