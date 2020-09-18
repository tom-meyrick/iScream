import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({ submitted }, { className }) => ({
  submitted,
});

export default connect(mapStateToProps)(App);
