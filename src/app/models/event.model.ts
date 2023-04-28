import { Team } from "./team.model";

export interface Event {
    _id:any;
    name:string;
    type:string;
    max:number;
    subtraction: number;
    leaderboard?: Array<any>;

}
