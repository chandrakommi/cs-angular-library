import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { CsngFormBuilderModule } from '@cs-ng/form-builder'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CsngFormBuilderModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
