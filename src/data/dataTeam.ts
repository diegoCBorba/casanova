import imgTeste from "../../public/team/marceneiro.webp"

export interface Person {
  img: string;
  nome: string;
  insta: string;
}

export interface TeamData {
  lider: Person[];
  marceneiros: Person[];
  arquitetos: Person[];
}

export const dataTeam = {
  lider: [
      {
        img: imgTeste,
        nome: "Josimar dos Santos",
        insta: "@insta"
      }
  ],
  marceneiros: [
    {
      img: imgTeste,
      nome: "Robinho Brabo",
      insta: "@insta" 
    },
    {
      img: imgTeste,
      nome: "Trambiqueiro Zé",
      insta: "@insta" 
    },
    {
      img: imgTeste,
      nome: "Beiçola Mister",
      insta: "@insta" 
    }
  ],
  arquitetos: [
    {
      img: imgTeste,
      nome: "Junior Borba",
      insta: "@insta" 
    }
  ]
}