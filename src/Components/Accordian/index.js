import { connect } from "react-redux";
import Accordian from "./Accordian";
import { handleToggleID } from "../../data/actions/state";

const mapStateToProps = ({ vendorID, vendors }) => {
  return {
    vendorID,
    vendors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (vendorID) => {
      dispatch(handleToggleID(vendorID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Accordian);
