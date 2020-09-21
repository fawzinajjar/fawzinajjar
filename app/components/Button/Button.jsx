import React from 'react'

export const Button = props => (
  <button style={{ textAlign: 'center', fontWeight: 700 }} {...props}>
    {props.children}
  </button>
)
