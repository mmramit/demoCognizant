import { Component, OnInit } from '@angular/core';
import { VaccineService } from '../../services/vaccine.service';
import { Vaccine } from '../../models/vaccine';
import { Producer } from '../../models/producer';
import { Observable,Subject } from "rxjs";

import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-vaccine-list',
  templateUrl: './vaccine-list.component.html',
  styleUrls: ['./vaccine-list.component.css']
})
export class VaccineListComponent implements OnInit {

 constructor(private vaccineservice:VaccineService) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  vaccines: Observable<Vaccine[]>;
  vaccine : Vaccine=new Vaccine();
  producer:Producer = new Producer();
  updVaccine: Vaccine=new Vaccine();
  deleteMessage=false;
  vaccineslist:any;
  isupdated = false;    
 

  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.vaccineservice.getVaccineList().subscribe(data =>{
    this.vaccines =data;
    this.dtTrigger.next();
    })
  }
  
  deleteVaccine(id: string) {
    this.vaccineservice.deleteVaccine(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.vaccineservice.getVaccineList().subscribe(data =>{
            this.vaccines =data
            })
        },
        error => console.log(error));
  }

  showVaccines(vaccine: Vaccine){
    this.updVaccine = vaccine;
    console.log(this.isupdated);
  }


  vaccineupdateform=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    description:new FormControl(),
    price:new FormControl(),
    image_URLs:new FormControl(),
    categories:new FormControl(),
    seller:new FormControl(),
  });

  updateVaccine(updpro){
   this.vaccine=new Vaccine(); 
   this.vaccine.id=this.VaccineId.value;
   this.vaccine.name=this.VaccineName.value;
   this.vaccine.description=this.VaccineDescription.value;
   this.vaccine.price=this.VaccinePrice.value;
   this.vaccine.image_URL=this.VaccineImage_URL.value;
   this.vaccine.producer=this.VaccineProducer.value;
   console.log(this.VaccineId.value);
   

   this.vaccineservice.updateVaccine(this.vaccine.id,this.vaccine).subscribe(
    data => {     
      this.isupdated=true;
      this.vaccineservice.getVaccineList().subscribe(data =>{
        this.vaccines =data
        })
    },
    error => console.log(error));
  }
  get VaccineId(){
    return this.vaccineupdateform.get('id');
  }
  get VaccineName(){
    return this.vaccineupdateform.get('name');
  }

  get VaccineDescription(){
    return this.vaccineupdateform.get('description');
  }

  get VaccinePrice(){
    return this.vaccineupdateform.get('price');
  }

  get VaccineImage_URL(){
    return this.vaccineupdateform.get('image_URL');
  }


  get VaccineProducer(){
    return this.vaccineupdateform.get('producer');
  }

  changeisUpdate(){
    this.isupdated=false;
  }
}
