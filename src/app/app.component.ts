import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  //Созданием формы через FormGroup
  testForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(2)]),
    email: new FormControl('', [Validators.email])
  })

}
