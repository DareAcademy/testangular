import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { country } from '../data/country';
import { patient } from '../data/patient';
import { countryService } from '../services/countryService';
import { patientService } from '../services/patientService';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

  @ViewChild('f') form:NgForm;
  liCountry:country[]=[];
  constructor(private countryService:countryService,
               private patientSer:patientService) { }

  ngOnInit(): void {
    debugger
    this.countryService.loadAll().subscribe(
      data=>{
        debugger;
        this.liCountry=data;
        //console.log(data)
      }
    );

  }

  onSave(){
    debugger;
    var obj=new patient();
    obj.name=this.form.value["txtName"];
    obj.phone=this.form.value["txtPhone"];
    obj.country_Id=parseInt(this.form.value["ddlCountry"]);
    obj.status=1;

    this.patientSer.save(obj);

  }

}
