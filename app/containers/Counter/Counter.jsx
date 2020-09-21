import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { counterReducer } from './reducer'
import { useInjectReducer, useInterval } from 'utils/CustomHooks'

export function Counter({ incNumber, decNumber, counter }) {
  useInjectReducer({
    key: 'counter',
    reducer: counterReducer
  })

  const onDecrementNum = () => decNumber(1)
  const onIncrementNum = () => incNumber(1)

  const [incrNumber, startIncreasing] = useState(false)
  const [decrNumber, startDecreasing] = useState(false)

  useInterval(onIncrementNum, incrNumber ? 50 : null)
  useInterval(onDecrementNum, decrNumber ? 50 : null)

  return (
    <div className="counter-container">
      <hr />
      <h2>{counter}</h2>
      <div>
        <button
          onMouseDown={() => startDecreasing(true)}
          onMouseUp={() => startDecreasing(false)}
        >
          DEC NUM
        </button>
        <button
          onMouseDown={() => startIncreasing(true)}
          onMouseUp={() => startIncreasing(false)}
        >
          INC NUM
        </button>
      </div>
      <style jsx>
        {`
          hr {
            width: 50%
            margin: auto
          }

          h2 {
            text-align: center;
          }
          div {
            margin: auto;
            width: max-content;
          }
          div button {
            margin: 25px;
          }
        `}
      </style>
    </div>
  )
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  decNumber: PropTypes.func.isRequired,
  incNumber: PropTypes.func.isRequired
}
