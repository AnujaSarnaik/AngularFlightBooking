import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {
  formData:any;
  airlineName:any;
  contactNo:any;
  contactAddress:any;
  logo:any
  onClickAddNewAirline()
  {
    console.log("Submit has been done");
  }
  constructor() { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      userName : new FormControl("CTS")
    })
  }

  
}
