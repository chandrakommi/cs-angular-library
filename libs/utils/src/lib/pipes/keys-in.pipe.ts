import { Pipe, PipeTransform } from '@angular/core'
import { ValueObject } from '../types/value-object.type'

@Pipe({
  name: 'keysIn',
})
export class KeysInPipe implements PipeTransform {
  transform(value: ValueObject): string[] {
    if (value === null || value === undefined) {
      return []
    }
    return Object.keys(value)
  }
}
