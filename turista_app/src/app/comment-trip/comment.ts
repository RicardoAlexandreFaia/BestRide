export class Comment {
    id : number;
    rating : number; //rate, rating, evaluation, assessment //stars
    comment : String;
    author : User;

    constructor(
      id: number,
      rating : number,
      comment : String,
      userId : number,
    ) {
      this.id = id;
      this.rating = rating;
      this.comment = comment;
      this.author = new User(userId)
    }
}

export class User {
  id : Number;
  name : String;

  constructor(
    id: number
  ) {
    this.id = id;
  }
}