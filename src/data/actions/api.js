import axios from "../../axiosConfig";
import { loaded, submit } from "../../data/actions/state";

export const handleGet = () => {
  return (dispatch) => {
    axios.get("api/vans").then(
      ({ data }) => {
        dispatch(loaded(data.data));
      },
      (error) => {
        console.log(error);
      }
    );
  };
};

export const handlePost = ({
  name,
  lat,
  lon,
  priciness,
  rating,
  imgUrl,
  bio,
}) => {
  return (dispatch) => {
    axios
      .post("/api/vans", {
        name: name,
        lat: lat,
        lon: lon,
        priciness: priciness,
        rating: rating,
        imgUrl: imgUrl,
        bio: bio,
      })
      .then(
        ({ data }) => {
          dispatch(submit(data.data));
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
