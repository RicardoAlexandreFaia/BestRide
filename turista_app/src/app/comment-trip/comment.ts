export class Comment {
    id : number;
    appraisement : number; //rate, rating, evaluation, assessment //stars
    comment : String;
    author : User;

    constructor(
      id: number,
      appraisement : number,
      comment : String,
      userId : number,
    ) {
      this.id = id;
      this.appraisement = appraisement;
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