export class User {
    id : Number;
    name : String;
    guide: Boolean;

    constructor(
        id: number,
        name: String,
        guide: Boolean
      ) {
        this.id = id;
        this.name = name;
        this.guide = guide;
      }
}