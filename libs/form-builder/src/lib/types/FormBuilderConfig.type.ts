import { ComponentTypes } from '../enums/ComponentTypes.enum'

export type FormBuilderConfig = {
  configuration: {
    [key: string]: {
      formControlName: string
      placeholder?: string
      value?: string
      label?: string
      type?: string
      controlType:
        | ComponentTypes.AUTO_COMPLETE
        | ComponentTypes.CHECKBOX
        | ComponentTypes.CHIPS
        | ComponentTypes.DATE
        | ComponentTypes.DATE_TIME
        | ComponentTypes.INPUT
        | ComponentTypes.LABEL
        | ComponentTypes.RADIO
        | ComponentTypes.SELECT
        | ComponentTypes.TEXTAREA
        | ComponentTypes.TIME
    }
  }
  configUrl?: string
  validationMessages: {
    [key: string]: {
      [key: string]: string
    }
  }
}
