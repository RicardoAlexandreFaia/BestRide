export class RoadMap {
  id: number;
  title: string;
  duration: string;
  price: number;
  description: string;

  constructor(
    id: number,
    title: string,
    duration: string,
    price: number,
    description: string
  ) {
    this.id = id;
    this.title = title;
    this.duration = duration;
    this.price = price;
    this.description = description;
  }
}

export class InterestPoints {
  title: string;
  lat: number;
  lng: number;

  constructor(title: string, lat: number, lng: number) {
    this.title = title;
    this.lat = lat;
    this.lng = lng;
  }
}
