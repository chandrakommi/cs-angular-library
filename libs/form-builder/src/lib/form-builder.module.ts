import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

import { FormBuilderComponent } from './components/form-builder/form-builder.component'
import { TemplateComponent } from './components/template/template.component'
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component'
import { CheckBoxComponent } from './components/check-box/check-box.component'
import { ChipsComponent } from './components/chips/chips.component'
import { DateComponent } from './components/date/date.component'
import { DateTimeComponent } from './components/date-time/date-time.component'
import { InputComponent } from './components/input/input.component'
import { LabelComponent } from './components/label/label.component'
import { RadioComponent } from './components/radio/radio.component'
import { SelectComponent } from './components/select/select.component'
import { TimeComponent } from './components/time/time.component'

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [
    FormBuilderComponent,
    TemplateComponent,
    AutoCompleteComponent,
    CheckBoxComponent,
    ChipsComponent,
    DateComponent,
    DateTimeComponent,
    InputComponent,
    LabelComponent,
    RadioComponent,
    SelectComponent,
    TimeComponent,
  ],
  exports: [
    FormBuilderComponent,
    TemplateComponent,
    AutoCompleteComponent,
    CheckBoxComponent,
    ChipsComponent,
    DateComponent,
    DateTimeComponent,
    InputComponent,
    LabelComponent,
    RadioComponent,
    SelectComponent,
    TimeComponent,
  ],
})
export class CsngFormBuilderModule {}
