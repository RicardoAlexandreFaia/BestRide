import { Trip } from "./trip";

export class Comment {
    id : number;
    trip : Trip;
    appraisement : number; //rate, rating, evaluation, assessment //stars
    comment : String;

    constructor(
      id: number,
      appraisement : number,
      comment : String,
      trip : Trip
    ) {
      this.id = id;
      this.appraisement = appraisement;
      this.trip = trip;
      this.comment = comment;
    }
}