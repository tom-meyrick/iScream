import { connect } from "react-redux";
import Loaded from "./Loaded";
import { handleGet } from "../../data/actions/api";

const mapStateToProps = ({ loaded }) => {
  return {
    loaded,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleLoad: () => dispatch(handleGet()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loaded);
