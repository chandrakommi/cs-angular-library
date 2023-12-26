import { Component, OnInit } from '@angular/core'
import { FormBuilderBaseComponent } from '../../form-builder-base.component'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'cs-ng-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent
  extends FormBuilderBaseComponent
  implements OnInit
{
  constructor() {
    super()
  }

  ngOnInit(): void {
    this.formControl = this.formGroup.get(this.key) as FormControl
  }
}
