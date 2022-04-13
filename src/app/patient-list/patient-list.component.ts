import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { patient } from '../data/patient';
import { patientService } from '../services/patientService';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
@ViewChild('txtName') txtName:ElementRef;
  message:string;
  liPatient:patient[]=[];
  isAlert=false;
  isSucceed=true;
  constructor(private patientService:patientService) { }

  ngOnInit(): void {
    debugger

    this.patientService.LoadAll().subscribe(
      //{
    // next:data=>{
    //   this.isAlert=true;
    //   this.message="successfuly";
    //   this.isSucceed=true;
    //   setTimeout(() => {
    //     this.isAlert=false;
    //   }, 5000);
    // },
    // error:err=>{
    //   this.isAlert=true;
    //   this.message="Ops. there is an error";
    //   this.isSucceed=false;
    //   setTimeout(() => {
    //     this.isAlert=false;
    //   }, 5000);
    // }
    //}
data=>{
  debugger;
  this.liPatient=data;
}
    )
    

  }

  onSearch(){
      var name=this.txtName.nativeElement.value;
      this.patientService.LoadByName(name).subscribe(
        data=>{
          debugger
          this.liPatient=data;
        } 
      )


  }

}
