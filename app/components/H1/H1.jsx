import React from 'react'

export const H1 = props => (
  <h1
    style={{
      margin: 0,
      textAlign: 'center',
      fontWeight: 700
    }}
    {...props}
  >
    {props.children}
  </h1>
)
