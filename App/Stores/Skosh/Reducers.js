/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { SkoshTypes } from './Actions'

export const initData = (state) => ({
  ...state,
  user: {},
  skoshErrorMessage: null,
  skoshPhoto: null,
})
export const skoshImage = (state, { imageUri }) => ({
  ...state,
  skoshPhoto: imageUri,
})

export const skoshSuccess = (state) => ({
  ...state,
  skoshSuccess: true,
  skoshErrorMessage: null,
  modalUpload: false,
})

export const skoshFailure = (state, { errorMessage }) => ({
  ...state,
  skoshErrorMessage: errorMessage,
})

export const viewSkoshSuccess = (state, { skoshAvatars }) => ({
  ...state,
  skoshAvatars: skoshAvatars, 
})

export const viewSkoshFailure = (state, { errorMessage }) => ({
  ...state,
  skoshErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [SkoshTypes.INIT_DATA]: initData,
  [SkoshTypes.SKOSH_IMAGE]: skoshImage,
  [SkoshTypes.SKOSH_FAILURE]: skoshFailure,
  [SkoshTypes.SKOSH_SUCCESS]: skoshSuccess,
  [SkoshTypes.VIEW_SKOSH_FAILURE]: viewSkoshFailure,
  [SkoshTypes.VIEW_SKOSH_SUCCESS]: viewSkoshSuccess,
})
