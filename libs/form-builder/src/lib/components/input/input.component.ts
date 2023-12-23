import { Component } from '@angular/core'
import { FormBuilderBaseComponent } from '../../form-builder-base.component'

@Component({
  selector: 'cs-ng-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends FormBuilderBaseComponent {
  constructor() {
    super()
  }
  
}
