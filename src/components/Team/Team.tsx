import team from "./Team.module.css";

import { useState } from 'react';

import { Title } from "../Title/Title";
import { ContainerTeam } from "./division/CarouselTeam";

export const Team = () => {
  // Estado para armazenar a categoria selecionada
  const [selectedCategory, setSelectedCategory] = useState<string>('lider');

  // Função para lidar com a seleção de categoria
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section id="team" className="container-section">
      <div className={team.containerMaster}>
        <div className={team.containerTitle}>
          <Title>Nossa Equipe</Title>
          <h2>Nós somos orgulhosos do nosso time de <span>profissionais</span></h2>
        </div>
        <div className={team.containerTeam}>
          <div className={team.containerOptions}>
            <ul>
              <li 
              onClick={() => handleCategorySelect('lider')}
              className={selectedCategory === 'lider' ? team.select : ""}
              >Lider</li>
              <li 
              onClick={() => handleCategorySelect('marceneiros')}
              className={selectedCategory === 'marceneiros' ? team.select : ""}
              >Marceneiros</li>
              <li
              onClick={() => handleCategorySelect('arquitetos')}
              className={selectedCategory === 'arquitetos' ? team.select : ""}
              >Arquiteto(s)</li>
            </ul>
          </div>
          <ContainerTeam selectedCategory={selectedCategory}/>
        </div>
      </div>
    </section>
  );
};
