export class RoadMap {
  id: number;
  title: string;
  duration: string;
  price: number;
  description: string;
  image: string;
  lat: number;
  lng: number;

  constructor(
    id: number,
    title: string,
    duration: string,
    price: number,
    description: string,
    image: string,
    lat: number,
    lng: number
  ) {
    this.id = id;
    this.title = title;
    this.duration = duration;
    this.price = price;
    this.description = description;
    this.image = image;
    this.lat = lat;
    this.lng = lng;
  }
}

export class InterestPoints {
  title: string;
  lat: number;
  lng: number;
  image: string;

  constructor(title: string, lat: number, lng: number, image: string) {
    this.title = title;
    this.lat = lat;
    this.lng = lng;
    this.image = image;
  }
}
