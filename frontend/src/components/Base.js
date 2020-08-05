import React from 'react';
import {connect} from "react-redux";
import Home from "./Home";
import Result from "./Result";

class Base extends React.Component {

    render = () => (
        this.props.page === "home" ? <Home/> : <Result/>
    )
}

const mapStateToProps = state => ({
    page: state.user.page
});

export default connect(mapStateToProps, {})(Base);