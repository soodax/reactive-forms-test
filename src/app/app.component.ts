import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  contactsForm = new FormGroup({
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    apartment: new FormControl('', Validators.required),
    phoneArray: new FormArray([
      new FormControl('', [Validators.required, Validators.minLength(10)])
    ])
  })

  phoneArray() {
    return this.contactsForm.get('phoneArray') as FormArray
  }

  addNewPhone() {
    this.contactsForm.controls.phoneArray.push(new FormControl('', [Validators.required, Validators.minLength(10)]))
  }

  onSubmit() {
    if (this.contactsForm.valid) {
      return alert('pass')
    }

    alert('error')
  }

  ngOnInit() {
  }
}
