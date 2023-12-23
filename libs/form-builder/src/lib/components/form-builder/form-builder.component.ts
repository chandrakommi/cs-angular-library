import { Component, Input, OnInit } from '@angular/core'
import { FormBuilderConfig } from '../../types/FormBuilderConfig.type'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'cs-ng-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  @Input() configuration: FormBuilderConfig = {} as FormBuilderConfig
  @Input() configUrl = ''

  constructor(private _httpClient: HttpClient) {}

  formData = {} as FormBuilderConfig

  ngOnInit(): void {
    this.configData()
  }
  async configData(): Promise<void> {
    if (this.configUrl) {
      this._httpClient.get<FormBuilderConfig>(this.configUrl).subscribe(
        data => {
          this.formData = data
        },
        error => {
          console.log(error)
        },
      )
      return
    }

    this.formData = this.configuration
  }
}
