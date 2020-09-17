import { connect } from "react-redux";
import LeafletMap from "./Component";
import { handleToggleID } from "../../data/actions/state";
import { getLocale } from "../../data/actions/api";

const mapStateToProps = ({ vendorID, userPos, vendors }) => {
  return {
    vendorID,
    userPos,
    vendors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (vendorID) => {
      dispatch(handleToggleID(vendorID));
      document.getElementById(vendorID).scrollIntoView();
    },
    handleMount: () => {
      dispatch(getLocale());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMap);
