import { connect } from "react-redux";
import Accordian from "./Accordian";

const mapStateToProps = ({ vendorID }) => {
  return {
    vendorID,
  };
};

export default connect(mapStateToProps)(Accordian);
