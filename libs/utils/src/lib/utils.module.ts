import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { KeysInPipe } from './pipes/keys-in.pipe'

@NgModule({
  imports: [CommonModule],
  declarations: [KeysInPipe],
  exports: [KeysInPipe],
})
export class CsngUtilsModule {}
