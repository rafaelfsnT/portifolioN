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
                    <p>Esse projeto foi desenvolvido em sala em equipes. O intuito desse projeto era trazer algo mais moderno,e eles queriam que nós alunos, desenvolvessemos um site mais intuitivo. Não foi concluído 100% por questão de tempo.</p>
                    <Link
                        href="https://github.com/rafaelfsnT/projCDP"
                        target="_blank"
                    >
                        Link projeto
                    </Link>
                </ServiceCard>
                <ServiceCard>
                    <ServiceTitle>Projeto JavaScript</ServiceTitle>
                    <ServiceImage src="/projeto2.png" alt="Imagem 2" />
                    <p>Esse foi um projeto que tinha o incentivo de melhorar a estilização, colocar novas animações e etc. O site que usei para fazer esse projeto foi o Front End Mentor, onde você pode encontrar mais chalenges para melhorar seu CSS.</p>
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
                    <p>Esse projeto é as aulas que fiz de Next, aqui mostra diversos itens criados dentro de um arquivo "db.json", onde na navbar, fizemos que aparecesse somentes os produtos relacionados a determinada categoria.</p>
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