import { Component, OnInit } from '@angular/core';
import { ProducerService } from '../../services/producer.service';
import {FormControl,FormGroup} from '@angular/forms';
import { Producer } from '../../models/producer';
@Component({
  selector: 'app-add-producer',
  templateUrl: './add-producer.component.html',
  styleUrls: ['./add-producer.component.css']
})
export class AddProducerComponent implements OnInit {

  constructor(private producerservice:ProducerService) { }

  producer : Producer=new Producer();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  producersaveform=new FormGroup({
    accountId:new FormControl(),
    name:new FormControl(),
  });

  saveProducer(saveProducer){
    this.producer=new Producer();   
    this.producer.accountId=this.ProducerAccountId.value;
    this.producer.name=this.ProducerName.value;
    this.submitted = true;
    this.save();
  }

  

  save() {
    this.producerservice.createProducer(this.producer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.producer = new Producer();
  }

  get ProducerAccountId(){
    return this.producersaveform.get('accountId');
  }

  get ProducerName(){
    return this.producersaveform.get('name');
  }

  addProducerForm(){
    this.submitted=false;
    this.producersaveform.reset();
  }
}
