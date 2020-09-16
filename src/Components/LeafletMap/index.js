import { connect } from "react-redux";
import LeafletMap from "./LeafletMap";

const mapStateToProps = ({ vendorID, userPos, vendors }) => {
  return {
    vendorID,
    userPos,
    vendors,
  };
};

export default connect(mapStateToProps)(LeafletMap);
