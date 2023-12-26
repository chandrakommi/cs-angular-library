import { Injectable } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { FormBuilderConfigControl } from '../types/FormControl.type'

@Injectable({
  providedIn: 'root',
})

/**
 * Service responsible for generating a FormGroup using the FormBuilder.
 */
export class FormBuilderFormGroupGeneratorService {
  private _formGroup = new FormGroup({})

  constructor(private _formBuilder: FormBuilder) {}
  /**
   * Generates a FormGroup based on the provided controls.
   *
   * @param controls - The controls to be added to the FormGroup.
   * @returns The generated FormGroup.
   */
  async generateFormGroup(
    controls: Record<string, FormBuilderConfigControl>,
  ): Promise<FormGroup> {
    for (const control of Object.keys(controls)) {
      this._formGroup.addControl(
        control,
        this._formBuilder.control(controls[control].value || ''),
      )
    }
    return this._formGroup
  }
}
