import { connect } from "react-redux";
import Accordian from "./Accordian";
import { handleToggleID } from "../../data/actions/state";

const mapStateToProps = ({ vendorID, vendors, userPos }, { className }) => ({
  vendorID,
  vendors,
  userPos,
  className,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (vendorID) => {
      dispatch(handleToggleID(vendorID));
      document.getElementById(vendorID).scrollIntoView();
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Accordian);
