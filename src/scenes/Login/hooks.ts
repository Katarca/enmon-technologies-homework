import { Reducer } from 'react'

type LoginState = {
  email: null | string
  password: null | string
  loginError: null | 'Something went wrong'
  emailError: null | 'Please enter email' | 'Email is not valid'
  passwordError: null | 'Please enter password'
}

type LoginAction =
  | { type: 'updateEmail'; payload: LoginState['email'] }
  | { type: 'updatePassword'; payload: LoginState['password'] }
  | { type: 'updateLoginError'; payload: LoginState['loginError'] }
  | { type: 'updateEmailError'; payload: LoginState['emailError'] }
  | { type: 'updatePasswordError'; payload: LoginState['passwordError'] }

export const initialLoginState: LoginState = {
  email: null,
  password: null,
  loginError: null,
  emailError: null,
  passwordError: null,
}

export const loginReducer: Reducer<LoginState, LoginAction> = (state, action) => {
  switch (action.type) {
    case 'updateEmail': {
      return {
        ...state,
        email: action.payload,
      }
    }
    case 'updatePassword': {
      return {
        ...state,
        password: action.payload,
      }
    }
    case 'updateLoginError': {
      return {
        ...state,
        loginError: action.payload,
      }
    }
    case 'updateEmailError': {
      return {
        ...state,
        emailError: action.payload,
      }
    }
    case 'updatePasswordError': {
      return {
        ...state,
        passwordError: action.payload,
      }
    }
  }
}
