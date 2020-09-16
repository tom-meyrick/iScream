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
