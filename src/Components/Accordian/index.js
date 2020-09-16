import { connect } from "react-redux";
import Accordian from "./Accordian";

const mapStateToProps = ({ vendorID, vendors }) => {
  return {
    vendorID,
    vendors,
  };
};

export default connect(mapStateToProps)(Accordian);
