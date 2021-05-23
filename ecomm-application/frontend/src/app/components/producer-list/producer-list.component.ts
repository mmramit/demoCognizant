import { Component, OnInit } from '@angular/core';
import { ProducerService } from '../../services/producer.service';
import { Producer } from '../../models/producer';
import { Observable,Subject } from "rxjs";

import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-producer-list',
  templateUrl: './producer-list.component.html',
  styleUrls: ['./producer-list.component.css']
})
export class ProducerListComponent implements OnInit {

 constructor(private producerervice:ProducerService) { }

  producerArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  producers: Observable<Producer[]>;
  producer : Producer=new Producer();
  updProducer: Producer=new Producer();
  deleteMessage=false;
  producerslist:any;
  isupdated = false;    
 

  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.producerervice.getProducerList().subscribe(data =>{
    this.producers =data;
    this.dtTrigger.next();
    })
  }
  
  deleteProducer(id: string) {
    this.producerervice.deleteProducer(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.producerervice.getProducerList().subscribe(data =>{
            this.producers =data
            })
        },
        error => console.log(error));
  }

  showProducer(producer: Producer){
    this.updProducer = producer;
    console.log(this.isupdated);
  }


  producerupdateform=new FormGroup({
    id:new FormControl(),
    accountId:new FormControl(),
    name:new FormControl(),
  });

  updateProducer(updpro){
   this.producer=new Producer(); 
   this.producer.id=this.ProducerId.value;
   this.producer.accountId=this.ProducerAccountId.value;
   this.producer.name=this.ProducerName.value;
  
   console.log(this.ProducerId.value);


   this.producerervice.updateProducer(this.producer.id,this.producer).subscribe(
    data => {     
      this.isupdated=true;
      this.producerervice.getProducerList().subscribe(data =>{
        this.producers =data
        })
    },
    error => console.log(error));
  }

  get ProducerId(){
    return this.producerupdateform.get('id');
  }
  get ProducerAccountId(){
    return this.producerupdateform.get('accountId');
  }

  get ProducerName(){
    return this.producerupdateform.get('name');
  }

  changeisUpdate(){
    this.isupdated=false;
  }
}
