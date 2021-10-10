const toast =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (action.type === "error") {
      console.log("Toasty", action.payload.message);
    } else {
      next(action);
    }
  };

export default toast;
