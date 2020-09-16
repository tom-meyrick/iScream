import axios from "../../axiosConfig";
import { loaded } from "../../data/actions/state";

export const handleGet = () => {
  return (dispatch) => {
    axios.get("/vendors/").then(
      ({ data }) => {
        dispatch(loaded(data.data));
      },
      (error) => {
        console.log(error);
      }
    );
  };
};

export const getLocale = () => {
  return (dispatch) => {
    if ("geolocation" in navigator) {
      const geoLocation = navigator.geolocation;
      geoLocation.getCurrentPosition((position) => {
        dispatch({
          type: "LOCALE",
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  };
};
