const initState = {
  data : [],
  isLoading : false
}

export default function Transactions (state = initState, action) {
  switch (action.type) {
    case 'GET_TRANS' :
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    default :
    return {...state}
  }
}