import { FormBuilderConfigControl } from './FormControl.type'

export type FormBuilderConfig = {
  controls: Record<string, FormBuilderConfigControl>
  configUrl?: string
  validationMessages: Record<string, string>
}
