import { connect } from "react-redux";
import SignupForm from "./SignupForm";
import { handlePost } from "../../data/actions/api";

const mapStateToProps = ({
  name,
  lat,
  lon,
  priciness,
  rating,
  imgUrl,
  bio,
}) => {
  return {
    name,
    lat,
    lon,
    priciness,
    rating,
    imgUrl,
    bio,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // handleSubmit: (data) => dispatch(handlePost(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
