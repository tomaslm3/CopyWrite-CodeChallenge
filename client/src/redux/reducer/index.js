const initialState = {
  echo: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "IECHO":
      return {
        ...state,
        echo: action.payload
      }
    default:
      return state
  }
};

export default rootReducer;