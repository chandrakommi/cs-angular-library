import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { FormBuilderComponent } from './form-builder.component'
import { TemplateComponent } from './components/template/template.component'

import { InputComponent } from './components/input/input.component'

import { FormBuilderFormGroupGeneratorService } from './services/form-builder-generate.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CsngUtilsModule } from '@cs-ng/utils'
import { FormBuilderCustomValidatorsRegistryService } from './services/form-builder-custom-validators-registry.service'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CsngUtilsModule,
  ],
  declarations: [FormBuilderComponent, TemplateComponent, InputComponent],
  exports: [FormBuilderComponent, TemplateComponent, InputComponent],
  providers: [
    FormBuilderFormGroupGeneratorService,
    FormBuilderCustomValidatorsRegistryService,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CsngFormBuilderModule {}
