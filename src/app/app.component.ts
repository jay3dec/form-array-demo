import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  customerInfo : FormGroup;

  constructor(private formBuilder : FormBuilder){}

  ngOnInit(){
    this.customerInfo = this.formBuilder.group({
      firstName : [],
      lastName : [],
      username : [],
      email : [],
      products : this.formBuilder.array([])
    })
    this.setDefaultData();
  }

  addProduct(name = "", desc = ""){
    let products = this.customerInfo.get('products') as FormArray;
    products.push(this.formBuilder.group({
      name : [name, [Validators.required]],
      description : [desc, [Validators.required]]
    }));
  }

  createCustomerInfo(){
    console.log('data is ', this.customerInfo.value);
    this.customerInfo.markAllAsTouched();
  }

  setDefaultData(){
    this.addProduct("tyre", "rubber material");
  }


}
