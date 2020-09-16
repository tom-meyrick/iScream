import { handleToggleID } from "./actions/state";
import initial from "./initial";

const updateID = (state, action) => ({
  ...state,
});

const loaded = (state, action) => ({
  ...state,
  loaded: true,
  vendors: action.vendors,
});

const toggleID = (state, action) => ({
  ...state,
  vendorID: action.vendorID,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADED":
      return loaded(state, action);
    case "UPDATEID":
      return updateID(state, action);
    case "TOGGLEID":
      return toggleID(state, action);
    default:
      return state;
  }
};

export default reducer;
