import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { InputFild} from './styles'

const Input = ({ name, ...rest }) => {
  const inputRef = useRef()
  const { fieldName, registerField, error} = useField(name)
  
  
  useEffect(() => {
  registerField({
    name: fieldName,
    ref: inputRef,
    getValue: ref => {
      return ref.current.value
    },
    setValue: (ref, value) => {
      ref.current.value = value
    },
    clearValue: ref => {
      ref.current.value = ''
    },
  })
}, [fieldName, registerField])

  return (
    <>
    <InputFild
      name={name}
      ref={inputRef}
      {...rest}
    />
    {error && <span style={{ color:'#f00' }}>{error}</span>}
    </>
  )
}

export default Input