export interface Roteiro {
  titulo: string;
  pontosInteresse: Array<PontoInteresse>;
  duracao: string;
  preco: number;
}

export interface PontoInteresse {
  titulo: string;
  lat: number;
  lng: number;
}
