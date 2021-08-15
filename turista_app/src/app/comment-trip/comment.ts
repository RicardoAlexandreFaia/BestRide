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
      userName : String
    ) {
      this.id = id;
      this.appraisement = appraisement;
      this.comment = comment;
      this.author = new User(userId,userName)
    }
}

export class User {
  id : Number;
  name : String;

  constructor(
    id: number,
    name: String
  ) {
    this.id = id;
    this.name = name;
  }
}