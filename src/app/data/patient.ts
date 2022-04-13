import { country } from "./country";

export class patient{
    id:number;
    name:string;
    phone:string;
    country_Id:number;
    status:number;
    country:country;
}