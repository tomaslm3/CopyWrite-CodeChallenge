const initialState = {
  echoes: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "IECHO":
      return {
        ...state,
        echoes: state.echoes.concat(action.payload)
      }
    default:
      return state
  }
};

export default rootReducer;