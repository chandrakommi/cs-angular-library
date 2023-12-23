import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormBuilderConfig, ComponentTypes } from '@cs-ng/form-builder'

@Component({
  selector: 'cs-angular-library-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cs-ng-libs'

  configuration: FormBuilderConfig = {
    configuration: {
      firstName: {
        formControlName: 'firstName',
        placeholder: 'First Name',
        value: 'John',
        label: 'First Name',
        type: 'text',
        controlType: ComponentTypes.INPUT,
      },
      lastName: {
        formControlName: 'lastName',
        placeholder: 'Last Name',
        value: 'Doe',
        label: 'Last Name',
        type: 'text',
        controlType: ComponentTypes.INPUT,
      },
      email: {
        formControlName: 'email',
        placeholder: 'Email',
        value: '  ', // <-- This is the value that will be validated
        label: 'Email',
        type: 'email',
        controlType: ComponentTypes.INPUT,
      },
    },
    validationMessages: {
      firstName: {
        required: 'First Name is required',
      },
      lastName: {
        required: 'Last Name is required',
      },
      email: {
        required: 'Email is required',
        email: 'Email is invalid',
      },
    },
  }

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http
      .get('assets/form-builder.config.json')
      .subscribe(data => console.log(data))
  }
}
