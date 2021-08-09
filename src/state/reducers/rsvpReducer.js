const reducer = (state = 0, action) => {
  switch (action.type) {
    case "rsvpYes":
      return state + action.payload;
    case "rsvpNo":
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
