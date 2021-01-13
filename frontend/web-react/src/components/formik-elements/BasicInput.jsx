import React from 'react'
import { Field, ErrorMessage } from 'formik'

import { Input, FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react'
// import TextError from './TextError'

function BasicInput (props) {
  const { label, name, ...rest } = props
  return (
    // Pre-styling...
    // <div className='form-control'>
    //   <label htmlFor={name}>{label}</label>
    //   <Field id={name} name={name} {...rest} />
    //   <ErrorMessage component={TextError} name={name} />
    // </div>
    // Apres-styling... 
    <Field name={name}>
      {
        ({field, form}) => {
          return
            <FormControl isInvlaid={form.errors[name] && form.touched[name]}>
              <FormLabel htmlFor={name}>{label}</FormLabel>
              <Input id={name} {...rest} {...field} />
              <FormErrorMessage>{form.errors[name]}</FormErrorMessage>  
            </FormControl>
        }
      }
    </Field>

  )
}

export default BasicInput