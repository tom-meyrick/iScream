import { connect } from "react-redux";
import SubmitMessage from "./SubmitMessage";
import { formSubmit } from "../../data/actions/state";

const mapStateToProps = ({ submitted }) => {
  return {
    submitted,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => dispatch(formSubmit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitMessage);
