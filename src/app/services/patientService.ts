import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { patient } from "../data/patient";

@Injectable()
export class patientService{
    constructor(private http:HttpClient){}

    save(p: patient){
        debugger;
        this.http.post("http://localhost/DemoAngularApi/api/Patient",p).subscribe();
    }

    LoadAll():Observable<any>{
        debugger;
        return this.http.get("http://localhost/DemoAngularApi/api/Patient/LoadAll");
    }

    LoadByName(name:string):Observable<any>{
        debugger;
        return this.http.get("http://localhost/DemoAngularApi/api/Patient/LoadByName?name="+name);
    }

    
}