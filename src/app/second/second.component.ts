import { Component, OnInit, } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  contactsForm: FormGroup

  constructor(formBuilder: FormBuilder) { 
    this.contactsForm = formBuilder.group({
      city: ['', Validators.required],
      street: ['', Validators.required],
      apartment: ['', Validators.required],
      phoneArray: formBuilder.array([
        ['', [Validators.required, Validators.minLength(10)]]
      ])
    })
  }

  phoneArray(): FormArray {
    return this.contactsForm.get('phoneArray') as FormArray;
  }

  addNewPhone() {
    this.phoneArray().push(new FormControl('', [Validators.required, Validators.minLength(10)]))
  }

  onSubmit(): void {
    if (this.contactsForm.valid) {
      return alert('pass')
    }

    alert('error')
  }

  ngOnInit(): void {
  }

}
