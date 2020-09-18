import { handleToggleID } from "./actions/state";
import initial from "./initial";

const updateID = (state, action) => ({
  ...state,
});

const loaded = (state, action) => ({
  ...state,
  loaded: true,
  submitted: false,
  vendors: action.vendors,
});

const formSubmit = (state) => ({
  ...state,
  submitted: false,
});

const toggleID = (state, action) => ({
  ...state,
  vendorID: action.vendorID,
});

const setLocation = (state, { lat, lon }) => ({
  ...state,
  userPos: {
    loaded: true,
    lat: lat,
    lon: lon,
  },
});

const submit = (state, action) => ({
  ...state,
  name: action.name,
  lat: action.lat,
  lon: action.lon,
  priciness: action.priciness,
  rating: action.rating,
  imgUrl: action.imgUrl,
  bio: action.bio,
  icecreams: action.icecreams,
  submitted: true,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADED":
      return loaded(state, action);
    case "UPDATEID":
      return updateID(state, action);
    case "TOGGLEID":
      return toggleID(state, action);
    case "LOCALE":
      return setLocation(state, action);
    case "ADD_VENDOR":
      return submit(state, action);
    case "FORM_SUBMIT":
      return formSubmit(state);
    default:
      return state;
  }
};

export default reducer;
