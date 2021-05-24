export interface Roteiro {
  titulo: string;
  pontosInteresse: Array<PontoInteresse>;
  duracao: Number;
  detalhes: String;
  preco: Number;
}

export interface PontoInteresse {
  titulo: string;
  lat: number;
  lng: number;
}
