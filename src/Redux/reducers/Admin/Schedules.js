const initState = {
  data: [],
  isLoading: false,
}

export default function Schedules (state = initState, action) {
  switch(action.type) {
    case 'GET_SCHEDULE' :
      return {
        ...state,
        loading:false,
        data: action.payload
      }
    default :
    return {...state}
  }
}