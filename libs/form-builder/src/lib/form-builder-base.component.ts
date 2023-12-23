import { Component, Input } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { FormBuilderConfigControl } from './types/FormControl.type'

@Component({
  template: '',
})
export abstract class FormBuilderBaseComponent {
  @Input() controlType = ''

  @Input() configControls: Record<string, FormBuilderConfigControl> = {} 

  @Input() formGroup: FormGroup = {} as FormGroup

  @Input() formControl = new FormControl()

  @Input() label = ''

  @Input() formControlName = ''

  @Input() placeholder = ''

  @Input() value = ''
}
