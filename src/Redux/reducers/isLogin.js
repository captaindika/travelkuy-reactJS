const initialState = {
  userInfo: {},
  isLogged: false,
}

export default function isLogin(state = initialState, action) {

  switch(action.type){
    case 'IS_LOGIN':
      return {
        ...state,
        isLogged :true,
        userInfo: action.payload
      }
    case 'IS_LOGOUT':
      return initialState
      
    default:
      return state
  }
}