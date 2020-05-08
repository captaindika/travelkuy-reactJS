const initState = {
  data: [],
  dataSchedule: [],
  isLoading: false
}

export default function Busses(state= initState, action) {
  switch (action.type) {
    case 'GET_BUSSES':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case 'GET_BUS_SCHEDULE':
      return {
        ...state,
        isLoading: false,
        dataSchedule: action.payload
      }
    case 'GET_TOTALBUSSES':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case 'EDIT_BUSSES':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case 'ADD_BUS':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case 'DELETE_BUSSES' :
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case 'UPDATE_BUS':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    default:
      return {...state}
  }
}