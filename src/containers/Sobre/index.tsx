import React from "react";
import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
	<section>
		<Titulo fontSize={16}>Sobre mim</Titulo>
		<Paragrafo>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum nostrum officia quam et dignissimos veniam quia, sequi nesciunt enim excepturi recusandae dicta exercitationem maiores eveniet, dolore similique? Temporibus, obcaecati?
		</Paragrafo>

		<GithubSecao>
			<img src="https://github-readme-stats.vercel.app/api?username=marlonnl&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
			<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=marlonnl&layout=compact&langs_count=7&theme=dracula" />
		</GithubSecao>
	</section>
)

export default Sobre
