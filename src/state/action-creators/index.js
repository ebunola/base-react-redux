export const rsvpYes = (count) => {
  return (dispatch) => {
    dispatch({
      type: "rsvpYes",
      payload: count,
    });
  };
};

export const rsvpNo = (count) => {
  return (dispatch) => {
    dispatch({
      type: "rsvpNo",
      payload: count,
    });
  };
};
