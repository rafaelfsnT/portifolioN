'use client';

import { HomeSection, ServiceCard, ServiceContainer, ServiceImage, ServiceTitle } from "@/styles/style";
import Link from "next/link";
export default function Servicos() {
    return (
        <HomeSection id="servicos">
            <h1>Serviços</h1>
            <ServiceContainer>
                <ServiceCard>
                    <ServiceTitle>Projeto Casa da Paz Umuarama-PR (NextJS)
                    </ServiceTitle>
                    <ServiceImage src="/projeto1.png" alt="Imagem 1" />
                    <p style={{
                        margin: "1rem 0",
                        flexGrow: 1,
                    }}>Esse projeto foi desenvolvido em sala em equipes. O intuito desse projeto era trazer algo mais moderno,e eles queriam que nós alunos, desenvolvessemos um site mais intuitivo. Não foi concluído 100% por questão de tempo.</p>
                    <Link
                        href="https://github.com/rafaelfsnT/projCDP"
                        target="_blank"
                    >
                        Link projeto
                    </Link>
                </ServiceCard>
                <ServiceCard>
                    <ServiceTitle>Calculadora IMC Flutter</ServiceTitle>
                    <ServiceImage src="/projeto2.png" alt="Imagem 2" />
                    <p style={{
                        margin: "1rem 0",
                        flexGrow: 1,
                    }}>Trabalho com o intuito de calcular o IMC de uma pessoa, no começo das aulas em Flutter. Contém validações de campos vazios e de formatos incorretos.</p>
                    <Link
                        href="https://github.com/rafaelfsnT/projetoJS"
                        target="_blank"

                    >
                        Link projeto
                    </Link>
                </ServiceCard>
                <ServiceCard>
                    <ServiceTitle>Projeto com Filtro de Produtos (NextJS)</ServiceTitle>
                    <ServiceImage src="/projeto3.png" alt="Imagem 3" />
                    <p style={{
                        margin: "1rem 0",
                        flexGrow: 1,
                    }}>Esse projeto é as aulas que fiz de Next, aqui mostra diversos itens criados dentro de um arquivo "db.json", onde na navbar, fizemos que aparecesse somentes os produtos relacionados a determinada categoria.</p>
                    <Link
                        href="https://github.com/rafaelfsnT/aulaNext"
                        target="_blank"
                    >
                        Link projeto
                    </Link>
                </ServiceCard>

            </ServiceContainer>
        </HomeSection>
    )
}