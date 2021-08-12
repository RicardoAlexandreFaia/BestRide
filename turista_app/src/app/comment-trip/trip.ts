import { User } from "./user";

export class Trip {
    id : Number;
    tourist : User;
    guide : User;

    constructor(
        id: number,
        tourist : User,
        guide : User
        
      ) {
        this.id = id;
        this.tourist = tourist;
        this.guide = guide;
      }
}