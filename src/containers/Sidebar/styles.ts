import styled from "styled-components";
import { P } from "../../components/Paragrafo/styles";

export const Descricao = styled(P)`
	margin-top: 24px;
	margin-bottom: 40px;
`;

export const BotaoTema = styled.button`
	color: #eee;
	font-size: 10px;
	font-weight: bold;
	padding: 8px;
	border-radius: 12px;
	background-color: #282A35;
	border: none;
	cursor: pointer;
`;

export const SidebarContainer = styled.div`
	position: sticky;
	top: 80px;
	left: 0;
`;
