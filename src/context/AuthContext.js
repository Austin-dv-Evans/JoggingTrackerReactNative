import AsyncStorage from "@react-native-async-storage/async-storage"
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload }
    // signup and signin are the same action so we name both actions signin
    case "signin":
      return { errorMessage: "", token: action.payload }
    case "clear_error_message":
      return { ...state, errorMessage: "" }
    case "signout":
      return { token: null, errorMessage: "" }
    default:
      return state
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({type: 'clear_error_message'})
}

  // make api request to sign up with that email and password
  // if we sign up, modify state, say we are authenticated
  // navigate to main flow
  // if sign up fails reflect error message
const signup = (dispatch) => async ({ email, password }) => {
  try{
    const response = await trackerApi.post('/signup', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signin', payload: response.data.token})
    navigate('TrackList')
  } catch (err) {
    dispatch({ type: 'add_error', payload: 'Signup not successful'})
  }
}

  // try to signin
  // handle success by updating state
  // handle failure by showing error
const signin = (dispatch) => async ({ email, password }) => {
    try{
      const response = await trackerApi.post('/signin', { email, password })
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({type: 'signin', payload: response.data.token })
      navigate('TrackList')
    }catch (err){
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in'
      })
    }
}

// remove token from asyncStorage
// return user to loginFlow
const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token')
  dispatch({ type: 'signout', })
  navigate('loginFlow')
}


const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  if(token) {
    dispatch({ type: 'signin', payload: token})
    navigate('TrackList')
  } else {
    navigate('loginFlow')
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {signin, signout, signup, clearErrorMessage, tryLocalSignin},
  { token: null, errorMessage: '' }
)