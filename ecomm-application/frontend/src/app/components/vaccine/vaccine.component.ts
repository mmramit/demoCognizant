import { Component, OnInit } from '@angular/core';
import { Vaccine } from '../../models/vaccine';
import { VaccineService } from '../../services/vaccine.service';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {

  private vaccines: Vaccine[];

	constructor(
		private vaccineservice: VaccineService
	) { }

	ngOnInit() {
		this.vaccineservice.getVaccineList().subscribe(data =>{
		this.vaccines =data;
	})
	}

}
