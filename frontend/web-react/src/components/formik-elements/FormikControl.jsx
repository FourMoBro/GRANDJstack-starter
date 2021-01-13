import React from 'react'
import BasicInput from './BasicInput'
import TextArea from './TextArea'
import SelectSinglePullDown from './SelectSinglePullDown'
import RadioButtons from './RadioButtons'
import CheckboxGroup from './CheckboxGroup'
//import PickADate from './PickADate'

import PickADate from './PickADate'
import SelectMultiPullDown from './SelectMultiPullDown'

function FormikControl (props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <BasicInput {...rest} />
    case 'textarea':
      return <TextArea {...rest} />
    case 'select':
      return <SelectSinglePullDown {...rest} />
    case 'radio':
      return <RadioButtons {...rest} />
    case 'checkbox':
      return <CheckboxGroup {...rest} />
    case 'date':
      return <PickADate {...rest} />
    default:
      return null
  }
}

export default FormikControl