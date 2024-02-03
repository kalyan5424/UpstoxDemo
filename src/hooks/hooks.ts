import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from 'store/store'

/**
 *  useAppSelector() function is custom hook function for handling Redux state type to address Typescript error.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
