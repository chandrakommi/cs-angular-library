import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilderConfig } from './types/FormBuilderConfig.type'
import { HttpClient } from '@angular/common/http'
import { FormBuilderFormGroupGeneratorService } from './services/form-builder-generate.service'
import { FormBuilderBaseComponent } from './form-builder-base.component'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'cs-ng-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent
  extends FormBuilderBaseComponent
  implements OnInit
{
  @Input() configUrl = ''

  @Input() configuration = {} as FormBuilderConfig

  @Output() formChanges = new EventEmitter<FormGroup>()
  constructor(
    private _httpClient: HttpClient,
    private _fbFormGroupGeneratorService: FormBuilderFormGroupGeneratorService,
    private _fb: FormBuilder,
  ) {
    super()
    this.formGroup = this._fb.group({})
  }

  async ngOnInit(): Promise<void> {
    this._getConfigData()
  }
  private async _getConfigData(): Promise<void> {
    if (this.configuration && this.configuration.controls) {
      this.formData = this.configuration
      await this._generateFormGroup()
    }
    this._getConfigUrlData()
  }

  private async _generateFormGroup(): Promise<void> {
    await this._fbFormGroupGeneratorService
      .generateFormGroup(this.formData.controls)
      .then(formGroup => {
        this.formGroup = formGroup
        this.formChanges.emit(this.formGroup)
      })

    this._trackFormChanges()
  }

  private async _trackFormChanges(): Promise<void> {
    this.formGroup.valueChanges.subscribe(() => {
      this.formChanges.emit(this.formGroup)
    })
  }

  private async _getConfigUrlData(): Promise<void> {
    if (this.configUrl) {
      this._httpClient.get<FormBuilderConfig>(this.configUrl).subscribe(
        data => {
          this.formData = data as FormBuilderConfig
          if (this.formData?.controls) {
            this._generateFormGroup()
          }
        },
        error => console.log(error),
      )
    }
  }
}
