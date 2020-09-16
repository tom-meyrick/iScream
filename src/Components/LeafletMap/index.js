import { connect } from "react-redux";
import LeafletMap from "./LeafletMap";
import { handleToggleID } from "../../data/actions/state";

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
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMap);
