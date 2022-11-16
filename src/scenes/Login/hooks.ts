import { Reducer } from 'react'

type LoginState = {
  email: null | string
  password: null | string
  loginError: null | 'Something went wrong'
  emailError: null | 'Please enter email' | 'Email is not valid'
  passwordError: null | 'Please enter password'
}

type LoginAction =
  | { type: 'update'; payload: { key: 'email'; value: LoginState['email'] } }
  | {
      type: 'update'
      payload: { key: 'password'; value: LoginState['password'] }
    }
  | {
      type: 'update'
      payload: { key: 'loginError'; value: LoginState['loginError'] }
    }
  | {
      type: 'update'
      payload: { key: 'emailError'; value: LoginState['emailError'] }
    }
  | {
      type: 'update'
      payload: { key: 'passwordError'; value: LoginState['passwordError'] }
    }

export const initialLoginState: LoginState = {
  email: null,
  password: null,
  loginError: null,
  emailError: null,
  passwordError: null,
}

export const loginReducer: Reducer<LoginState, LoginAction> = (state, action) => {
  switch (action.type) {
    case 'update':
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      }
  }
}
