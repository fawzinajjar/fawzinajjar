/*

use Inject Reducer helps in injecting reducers into the store
from within the component itself instead of having to import each manually.

*/

import React from 'react'
import invariant from 'invariant'
import { createReducer } from 'app/setupStore'
import { ReactReduxContext } from 'react-redux'

const injectReducerFactory = store => (key, reducer) => {
  invariant(
    !!key && typeof key === 'string' && typeof reducer === 'function',
    'injectReducer: Expected `key` to be a reducer function'
  )

  if (
    Reflect.has(store.injectedReducers, key) &&
    store.injectedReducers[key] === reducer
  )
    return

  store.injectedReducers[key] = reducer
  store.replaceReducer(createReducer(store.injectedReducers))
}

export const useInjectReducer = ({ key, reducer }) => {
  const context = React.useContext(ReactReduxContext)
  React.useEffect(() => {
    injectReducerFactory(context.store)(key, reducer)
  }, [])
}
