export interface Roteiro {
  titulo: string;
  pontosInteresse: Array<PontoInteresse>;
}

export interface PontoInteresse {
  titulo: string;
  lat: number;
  lng: number;
}
