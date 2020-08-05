import React from "react";
import
{
    View, ViewNumberRepositories, Logo, Nav, BodyTable,
    SearchInput, GitButton, ContainerRepositories,
    Container, UserImg, ViewUserInfo, UserName, HeaderTable
}    
from "../assets/styles";
import { FaSearch, FaGithub, FaInstagram, FaLinkedin, FaMedium, FaSpinner } from 'react-icons/fa';

import {getUser} from "../actions/index";
import {connect} from "react-redux";

const logo = require("../assets/images/logo.png");

class Result extends React.Component {

    constructor(props){
        super(props);
        this.state = {user: ""}
    }

    renderRows = (user) => {
        let arr = [];
        user.repositories.nodes.forEach(element => {
            arr.push(
                <tr>
                    <td>{element.name}</td>
                    <td>{element.ref ? element.ref.target.history.totalCount : ""}</td>
                    <td>{element.ref ? element.ref.target.history.edges[0].node.message : ""}</td>
                    <td>{element.ref ? element.ref.target.history.edges[0].node.oid : ""}</td>
                </tr>
            )
        });
        return arr;
    }

    render = () => {
        let user = this.props.user ? this.props.user.user : null;
        return <Container>
            <Nav>
                <Logo src = {logo}></Logo>
                <SearchInput style = {{marginTop:0}} placeholder = "Buscar usuário">
                    <FaSearch style = {{color: "#4F4F4F", marginLeft: 14, fontSize: 18}}></FaSearch>
                    <input value = {this.state.user} onChange = {user => this.setState({user: user.target.value})} placeholder = "Buscar usuário"></input>
                    <GitButton loading = {this.props.loading ? "true" : "false"} disabled = {this.props.loading} onClick = {() => this.props.getUser(this.state.user)}>
                        {this.props.loading ? 
                        <FaSpinner className = "spin" style = {{color: "white", fontSize: 18}}></FaSpinner> :
                        <FaGithub style = {{color: "white", fontSize: 18}}></FaGithub>
                        }
                    </GitButton>
                </SearchInput>
                <View>
                    <FaMedium style = {{color: "#FD71EA", fontSize: 28}}></FaMedium>
                    <FaInstagram style = {{color: "#FD71EA", fontSize: 28}}></FaInstagram>
                    <FaLinkedin style = {{color: "#FD71EA", fontSize: 28}}></FaLinkedin>
                </View>
            </Nav>
            {user ?
            <View>
                <ViewUserInfo>
                    <UserImg src = {user.avatarUrl}></UserImg>
                    <View style = {{marginLeft: 50}}>
                        <UserName>{user.name}</UserName>
                        <ViewNumberRepositories>
                            <label>{user.repositories.totalCount}</label>
                            <label>Repositórios</label>
                        </ViewNumberRepositories>
                    </View>
                </ViewUserInfo>
                <ContainerRepositories>
                    <label>Repositórios</label>
                    <table className = "table table-striped">
                        <HeaderTable>
                            <tr>
                                <th scope="col">REPOSITÓRIO</th>
                                <th scope="col">COMMITS</th>
                                <th scope="col">MSG ULTIMO COMMIT</th>
                                <th scope="col">HASH ULTIMO COMMIT</th>
                            </tr>
                        </HeaderTable>
                        <BodyTable>
                            {this.renderRows(user)}
                        </BodyTable>
                    </table>
                </ContainerRepositories>
            </View>
            : <label></label>
            }
        </Container>
    }
}

const mapStateToProps = state => ({
    loading: state.user.loading,
    user: state.user.user
});

export default connect(mapStateToProps, {getUser})(Result);