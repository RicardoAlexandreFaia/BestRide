export interface Roteiro {
  titulo: string;
  pontosInteresse: Array<PontoInteresse>;
  duracao: string;
  preco: number;
  descricao: string;
}

export interface PontoInteresse {
  titulo: string;
  lat: number;
  lng: number;
}
