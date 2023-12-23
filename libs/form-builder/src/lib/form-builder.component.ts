import { Component, Input, OnInit } from '@angular/core'
import { FormBuilderConfig } from './types/FormBuilderConfig.type'
import { HttpClient } from '@angular/common/http'
import { FormBuilderGeneratorService } from './services/form-builder-generate.service'

@Component({
  selector: 'cs-ng-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  @Input() configuration: FormBuilderConfig = {} as FormBuilderConfig
  @Input() configUrl = ''

  constructor(
    private _httpClient: HttpClient,
    private _fbGeneratorService: FormBuilderGeneratorService,
  ) {}

  formData = {} as FormBuilderConfig

  ngOnInit(): void {
    this.configData()
  }
  async configData(): Promise<void> {
    if (this.configUrl) {
      this._httpClient.get<FormBuilderConfig>(this.configUrl).subscribe(
        data => {
          this.formData = data
          this._fbGeneratorService.toFormGroup(
            this.formData as FormBuilderConfig,
          )
        },
        error => console.log(error),
      )
      return
    }

    this.formData = this.configuration
  }
}
