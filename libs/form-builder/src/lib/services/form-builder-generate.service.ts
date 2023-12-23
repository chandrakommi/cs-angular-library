import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class FormBuilderGeneratorService {
  toFormGroup(controls: Record<string, unknown>) {
    console.log(controls)
    return
  }
}
