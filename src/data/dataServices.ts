export interface DataService {
  title: string;
  img: string[]; // ou outro tipo apropriado para as imagens
}

export interface DataServiceGroup {
  [key: string]: DataService;
}

export interface DataServices {
  residenciais: DataServiceGroup;
  comerciais: DataServiceGroup;
}

export const dataServices: DataServices = {
  residenciais: {
    salas: {
      title: "Salas",
      img: [

      ]
    },
    dormitorios: {
      title: "Domitórios",
      img: [
        
      ]
    },
    cozinhas : {
      title: "Cozinhas",
      img: [
        
      ]
    },
    banheiros: {
      title: "Banheiros",
      img: [
        
      ]
    },
    gourmet : {
      title: "Área Gourmet",
      img: [
        
      ]
    },
    homeOffice: {
      title: "Home office",
      img: [
        
      ]
    }
  },
  comerciais: {
    escritorios: {
      title: "Escritórios",
      img: [
        
      ]
    },
    lojas: {
      title: "Lojas",
      img: [
        
      ]
    }, 
    clinicas: {
      title: "Clínicas",
      img: [
        
      ]
    }
  }
}