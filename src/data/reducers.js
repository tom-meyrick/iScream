import initial from "./initial";

const updateID = (state, action) => ({
  ...state,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATEID":
      return updateID(state, action);
    default:
      return state;
  }
};

export default reducer;
