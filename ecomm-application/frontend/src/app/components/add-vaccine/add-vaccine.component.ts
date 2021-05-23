import { Component, OnInit } from '@angular/core';
import { VaccineService } from '../../services/vaccine.service';
import {FormControl,FormGroup} from '@angular/forms';
import { Vaccine } from '../../models/vaccine';
@Component({
  selector: 'app-add-vaccine',
  templateUrl: './add-vaccine.component.html',
  styleUrls: ['./add-vaccine.component.css']
})
export class AddVaccineComponent implements OnInit {

  constructor(private vaccineservice:VaccineService) { }

  vaccine : Vaccine=new Vaccine();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  vaccinesaveform=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    description:new FormControl(),
    price:new FormControl(),
    image_URL:new FormControl(),
    producer:new FormControl(),
  });

  saveVaccine(saveVaccine){
    this.vaccine=new Vaccine(); 
    this.vaccine.id=this.VaccineId.value;
    this.vaccine.name=this.VaccineName.value;
    this.vaccine.description=this.VaccineDescription.value;
    this.vaccine.price=this.VaccinePrice.value;
    this.vaccine.image_URL=this.VaccineImage_URL.value;
    this.vaccine.producer=this.VaccineProducer.value;
    this.submitted = true;
    this.save();
  }

  save() {
    this.vaccineservice.createVaccine(this.vaccine)
      .subscribe(data => console.log(data), error => console.log(error));
    this.vaccine = new Vaccine();
  }
  get VaccineId(){
    return this.vaccinesaveform.get('id');
  }
  get VaccineName(){
    return this.vaccinesaveform.get('name');
  }

  get VaccineDescription(){
    return this.vaccinesaveform.get('description');
  }

  get VaccinePrice(){
    return this.vaccinesaveform.get('price');
  }

  get VaccineImage_URL(){
    return this.vaccinesaveform.get('image_URL');
  }


  get VaccineProducer(){
    return this.vaccinesaveform.get('producer');
  }

  addVaccineForm(){
    this.submitted=false;
    this.vaccinesaveform.reset();
  }
}
