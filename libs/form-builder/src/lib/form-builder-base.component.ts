import { Component, Input } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { FormBuilderConfigControl } from './types/FormControl.type'
import { FormBuilderConfig } from './types/FormBuilderConfig.type'

@Component({
  template: '',
})
export abstract class FormBuilderBaseComponent {
  // @Input() configuration: FormBuilderConfig = {} as FormBuilderConfig

  /**
   * @description This is the configuration for the control that is being rendered by the component.
   */
  @Input() control: FormBuilderConfigControl = {} as FormBuilderConfigControl

  /**
   * @description This is the type of control that is being rendered by the component.
   */
  @Input() controlType = ''

  /**
   * @description This is the configuration for the controls that are being rendered by the component.
   */

  @Input() configControls: Record<string, FormBuilderConfigControl> = {}

  @Input() formGroup: FormGroup = {} as FormGroup

  @Input() formControl = new FormControl()

  @Input() formControlName = ''

  @Input() key = ''

  @Input() label = ''

  @Input() placeholder = ''

  @Input() value = ''

  /**
   *  @description This is the configuration for the controls that are being rendered by the component.
   */
  formData = {} as FormBuilderConfig
}
