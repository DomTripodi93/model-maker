import { Component, OnInit, ViewChild } from '@angular/core';
import { ModelService } from '../model.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @ViewChild('changeBackend') changeBackendForm: NgForm;
  backends = ["Django", "C# .NET Core"];
  backend = "C# .NET Core";
  dateTimeFields = false;
  stringFields = [];
  boolFields = [];
  numFields = [];


  constructor(
    public modelServ: ModelService
  ) { }

  ngOnInit() {
    this.modelServ.fields.forEach((field)=>{
      if (field.fieldType == "DateTime"){
        this.dateTimeFields = true;
      }
    })
  }

  changeBackend(){

  }

}
