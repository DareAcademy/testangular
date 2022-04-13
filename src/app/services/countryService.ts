import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class countryService{
constructor(private http:HttpClient){}

loadAll():Observable<any> {
    debugger
    return this.http.get("http://localhost/DemoAngularApi/api/Country");
}

}