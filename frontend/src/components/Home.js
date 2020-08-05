import React from 'react';
import 
{
    Polygon, Content, LeftContent, View, ViewSearch, Logo,
    SearchText, Bold, Computer, SearchInput, GitButton, ViewSocial
}    
from "../assets/styles";

import { FaSearch, FaGithub, FaInstagram, FaLinkedin, FaMedium, FaSpinner } from 'react-icons/fa';
import {connect} from "react-redux";
import {getUser} from "../actions/index";

const polygon = require("../assets/images/polygon.png");
const computer = require("../assets/images/img-app.png");
const logo = require("../assets/images/logo.png");

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {user: ""}
    }

    render = () => (
        <Content>
            <Polygon src = {polygon}></Polygon>
            <Computer src = {computer}></Computer>
            <LeftContent>
                <View>
                    <Logo src = {logo}></Logo>
                </View>
                <ViewSearch>
                    <SearchText>Buscar um usuário no <Bold>Github</Bold> <br/> ficou muito <Bold>fácil!</Bold></SearchText>
                </ViewSearch>
                <SearchInput placeholder = "Buscar usuário">
                    <FaSearch style = {{color: "#4F4F4F", marginLeft: 14, fontSize: 18}}></FaSearch>
                    <input value = {this.state.user} onChange = {user => this.setState({user: user.target.value})} placeholder = "Buscar usuário"></input>
                    <GitButton loading = {this.props.loading ? "true" : "false"} disabled = {this.props.loading} onClick = {() => this.props.getUser(this.state.user)}>
                        {this.props.loading ? 
                        <FaSpinner className = "spin" style = {{color: "white", fontSize: 18}}></FaSpinner> :
                        <FaGithub style = {{color: "white", fontSize: 18}}></FaGithub>
                        }
                    </GitButton>
                </SearchInput>
            </LeftContent>
            <ViewSocial>
                <FaMedium style = {{color: "#FD71EA", fontSize: 28}}></FaMedium>
                <FaInstagram style = {{color: "#FD71EA", fontSize: 28}}></FaInstagram>
                <FaLinkedin style = {{color: "#FD71EA", fontSize: 28}}></FaLinkedin>
            </ViewSocial>
        </Content>
    )
}

const mapStateToProps = state => ({
    loading: state.user.loading
});

export default connect(mapStateToProps, {getUser})(Home);