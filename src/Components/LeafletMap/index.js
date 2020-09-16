import { connect } from "react-redux";
import LeafletMap from "./LeafletMap";

const mapStateToProps = ({ vendorID }) => {
  return {
    vendorID,
  };
};

export default connect(mapStateToProps)(LeafletMap);
