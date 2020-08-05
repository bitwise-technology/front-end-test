import React from "react";
import {connect} from "react-redux";

class Result extends React.Component {

    render = () => (
        <label>Result</label>
    )
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {})(Result);