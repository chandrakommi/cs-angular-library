import { Component, OnInit } from '@angular/core'
import { FormBuilderBaseComponent } from '../../form-builder-base.component'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'cs-ng-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends FormBuilderBaseComponent implements OnInit {
  constructor() {
    super()
  }

  ngOnInit(): void {
    this.formControl = this.formGroup.get(this.key) as FormControl
  }
}
